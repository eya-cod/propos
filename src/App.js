
import React from 'react';
import './App.css';
import ProfilComponent from './Profile/ProfilComponent';


const arr =[ 
  "Hi it's me Eya!",
  "i m a student at Go My Code",
  "my goal is to be successful in my studies ",
  "and achieve my dream of becoming a web developer",
];
function App() {

  const handlName =(userName)=>
    alert(`this is ${userName}`);
    
  
  return (
    <div className="App">
  
    <ProfilComponent FullName="Eya Sahli"  bio={arr} profession="Student"  handlName={handlName}>
    
      
      <img src='/img.jpg' alt=''></img>
      
    </ProfilComponent>
  
    </div>
  );
}

export default App;
