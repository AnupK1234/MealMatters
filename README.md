<h1 align="center">MealMatters</h1>

## Introduction:
MealMatters is a webapp designed to overcome student food insecurity by connecting students with nearby restaurants that provide free meals. The webapp facilitates student registration, enabling them to view a list of nearby restaurants offering free meals and request coupons from the organization. Donors can also register for an account and make donations to the organization, which utilizes these funds to reimburse restaurants for meals provided to students. MealMatters aims to increase student access to free meals, alleviate the financial burden of food insecurity, raise awareness of the issue, and encourage support for student food insecurity initiatives.


<p align="center">Tech Stack:</p>
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white"> 
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

## Configure and run on local environment
**Project directory/folder structure:**
* client (Frontend) : This folder contains all the code related to Frontend part.
* server (Backend) : This folder contains all the code related to Backend part.

**Setting up project locally (Installation) :**
1. Fork the repository

2. Clone Your Forked Repository:

```sh
git clone https://github.com/<your_username>/MealMatters.git
```
**Client (Frontend)** 

3. Navigate to the Client Directory:

```sh
cd MealMatters/client
```

4. Install Dependencies:

```sh
npm install
```

5. Start the Application:

```sh
npm run dev
```
The client will be running on http://localhost:5173/ in your browser.  

**Server (Backend)**

1. Navigate to the Server Directory:

```sh
cd MealMatters/server
```

2. Install Dependencies:

```sh
npm install
```

3. Start the server

```sh
npm start
```
**Note :** Create a ```.env``` file in the root of ```server``` directory and add the following entities in that .env file

```sh
MONGO_URL = mongodb+srv:<YOUR_MONGODB-ATLAS_CONNECTION_STRING_URL>
PORT = 5000
JWT_SECRET = <YOUR_SECRET_KEY>
```
Refer this image for MONGODB-ATLAS_CONNECTION_STRING_URL : [Link](https://postimg.cc/6TWbMF1q)

## How to contribute 👨‍💻
- Have a look at [CONTRIBUTING.md](.github/CONTRIBUTING.md) for contribution guidelines.  

## Connect with Project Admin :
[Anup Khismatrao](https://linktr.ee/anupkhismatrao)

## License 🛡️ 

MealMatters is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
