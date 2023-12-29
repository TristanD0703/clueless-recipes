import React from 'react'
import './App.css'
import RecipeCard from './RecipeCard.jsx';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, get, set, ref, child, onValue } from 'firebase/database';

function App() {
  function retrieveRecipeData(){
    
  }
  const firebaseConfig = {
    apiKey: "AIzaSyBO5wtOZ-iMepXjlAaJtd57mn8KlXcEbjk",
    authDomain: "clueless-recipes.firebaseapp.com",
    databaseURL: "https://clueless-recipes-default-rtdb.firebaseio.com",
    projectId: "clueless-recipes",
    storageBucket: "clueless-recipes.appspot.com",
    messagingSenderId: "464626059255",
    appId: "1:464626059255:web:917a22b6187227fe9f50f2",
    measurementId: "G-V9WMZ99G7Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const recipeRef = ref(database, 'recipes');
  var [recipeList, setRecipeList] = React.useState(Object.values(get(recipeRef)));
  console.log(recipeList);

  onValue(recipeRef, (snapshot) => {
    
    const data = snapshot.val();
    console.log(data);

    //recipeList = Object.values(data);
  });

  return (
    <>
      { recipeList.map((recipe) => <RecipeCard key = {recipe.title} recipeData = {recipe}/>) }
    </>
  )
}

export default App
