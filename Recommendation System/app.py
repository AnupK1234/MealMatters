import numpy as np
import pandas as pd
import seaborn as sns
import streamlit as st
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.metrics import (accuracy_score, classification_report,
                             confusion_matrix, f1_score, precision_score,
                             r2_score, recall_score)
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import (KNeighborsClassifier, KNeighborsRegressor,
                               NearestNeighbors)
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import LabelEncoder, StandardScaler

# Load the dataset
df = pd.read_csv("recipes.csv", low_memory=False)

# Select necessary columns
df = df[['RecipeId', 'Barcode', 'Name', 'CookTime', 'PrepTime', 'TotalTime', 'Calories',
         'FatContent', 'SaturatedFatContent', 'CholesterolContent',
         'SodiumContent', 'CarbohydrateContent', 'FiberContent', 'SugarContent',
         'ProteinContent', 'RecipeServings', 'DatePublished', 'RecipeInstructions', 'Images']]

# Drop fields with NaN values
df = df.dropna()
# df

# Convert columns to appropriate data types
df['Barcode'] = df['Barcode'].str.extract('(\d+)').astype(int)
df['DatePublished'] = pd.to_datetime(df['DatePublished'])
df['Calories'] = df['Calories'].astype(float)
df['FatContent'] = df['FatContent'].astype(float)
df['SaturatedFatContent'] = df['SaturatedFatContent'].astype(float)
df['CholesterolContent'] = df['CholesterolContent'].astype(float)
df['SodiumContent'] = df['SodiumContent'].astype(float)
df['CarbohydrateContent'] = df['CarbohydrateContent'].astype(float)
df['FiberContent'] = df['FiberContent'].astype(float)
df['SugarContent'] = df['SugarContent'].astype(float)
df['ProteinContent'] = df['ProteinContent'].astype(float)
df['RecipeInstructions'] = df['RecipeInstructions'].astype(str)
df['Images'] = df['Images'].astype(str)
df['RecipeInstructions'] = df['RecipeInstructions'].str.replace('"', '').str.replace("''", "'").str.replace("(", "").str.replace(")", "")
df['Images'] = df['Images'].str.replace('"', '').str.replace("''", "'").str.replace("(", "").str.replace(")", "")

# Streamlit UI
st.title('Food Recommendation - MealMatters')

# Input fields
age = st.number_input("Enter your age", min_value=1, max_value=150, value=25)
weight = st.number_input("Enter your weight (in kg)")
height = st.number_input("Enter your height (in centimeters)")
gender = st.selectbox("Select your gender", options=["Male", "Female"])
lifestyle = st.selectbox("Select your lifestyle", options=["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extra Active"])

def calculate_bmr(weight, height, age, gender):
    if gender == "Male":
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
    else:
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
    return bmr

# Button to calculate BMR
if st.button("Calculate BMR"):
    bmr = calculate_bmr(weight, height, age, gender)
    # Adjust low_calories_data based on lifestyle
    if lifestyle == "Sedentary":
        calorie_limit = bmr * 1.2
    elif lifestyle == "Lightly Active":
        calorie_limit = bmr * 1.375
    elif lifestyle == "Moderately Active":
        calorie_limit = bmr * 1.55
    elif lifestyle == "Very Active":
        calorie_limit = bmr * 1.725
    else:  # "Extra Active"
        calorie_limit = bmr * 1.9


    st.write(f"Your Basal Metabolic Rate (BMR) is: {calorie_limit:.2f} calories/day")
    #st.write(f"Your Basal Metabolic Rate (BMR) is: {bmr:.2f} calories/day")

    low_calories_data = df[df['Calories'] < calorie_limit]
    low_calories_data
    #st.write(low_calories_data)
    

def food_recommendation(barcode):
    try:
        # Find the nearest neighbors based on food contents
        barcode_data = df[df['Barcode'] == barcode][['FatContent', 'SaturatedFatContent',
                                                        'CholesterolContent', 'SodiumContent',
                                                        'CarbohydrateContent', 'FiberContent',
                                                        'SugarContent', 'ProteinContent']]

        k = 10
        nn_recipe_idxs = nn_model.kneighbors(barcode_data, n_neighbors=k, return_distance=False)[0]

        # Get the recommended recipe based on Nearest Neighbors
        nn_recipes = [df.iloc[nn_recipe_idx] for nn_recipe_idx in nn_recipe_idxs]

        # Filter out recommendations with calories higher than the calculated BMR
        nn_recipes = [recipe for recipe in nn_recipes if recipe['Calories'] < calorie_limit][0]['Name']

        # Use Naive Bayes to find a similar recipe with fewer calories 
        similar_food_idx = nb_model.predict(barcode_data)[0]
        similar_food = df[df['Calories'] < calorie_limit].iloc[similar_food_idx]['Name']
    except:
        nn_recipes = 'Food Data Not Found'
        similar_food = 'Food Data Not Found'

    return nn_recipes, similar_food

barcode_input = st.text_input('Enter Barcode', '')
if st.button('Get Recommendations'):
    if barcode_input:

        bmr = calculate_bmr(weight, height, age, gender)
        # Adjust low_calories_data based on lifestyle
        if lifestyle == "Sedentary":
            calorie_limit = bmr * 1.2
        elif lifestyle == "Lightly Active":
            calorie_limit = bmr * 1.375
        elif lifestyle == "Moderately Active":
            calorie_limit = bmr * 1.55
        elif lifestyle == "Very Active":
            calorie_limit = bmr * 1.725
        else:  # "Extra Active"
            calorie_limit = bmr * 1.9
        
        low_calories_data = df[df['Calories'] < calorie_limit]

        # Encode the target variable using LabelEncoder
        label_encoder = LabelEncoder()
        calories_encoded = label_encoder.fit_transform(low_calories_data['Calories'])

        # Feature extraction
        features = low_calories_data[['FatContent', 'SaturatedFatContent', 'CholesterolContent',
                 'SodiumContent', 'CarbohydrateContent', 'FiberContent',
                 'SugarContent', 'ProteinContent']]

        # Target variable
        target = calories_encoded

        # Split the data into training and testing sets
        X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

        # Nearest Neighbors model
        nn_model = KNeighborsRegressor(n_neighbors=5)
        nn_model.fit(X_train, y_train)

        # Naive Bayes model
        nb_model = GaussianNB()
        nb_model.fit(features, target)



        nn_recipes, similar_food = food_recommendation(int(barcode_input))
        st.write(f"Nearest Neighbors Recommended Food: {nn_recipes}")
        st.write(f"Naive Bayes Recommended Food (with fewer calories): {similar_food}")
    else:
        st.write('Please enter a barcode.')
