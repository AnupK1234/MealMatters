import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css'

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchTerm } = useParams();

    useEffect(() => {
        setTerm(searchTerm ?? '');
      }, [searchTerm]);

    const search = async () => {
        term ? navigate('/search/' + term) : navigate('/inventory');
    }  
    return (
    <div className={classes.container}>
        <input 
         type="text" 
         placeholder='Search Food Item!'
         onChange={e => setTerm(e.target.value)}    
         onKeyUp={e => e.key === 'Enter' && search()}
         value={term}
        />
        <button onClick={search}>Search</button>
    </div>
  );
}
