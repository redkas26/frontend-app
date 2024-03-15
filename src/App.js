import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import NavbarBrand from "./components/navbar"; 
import Button from './components/button';
import Posts from './components/posts';


function App() {
  return (
    <>
      <NavbarBrand />

      <div className='container'>
        <div className='row justify-content-evenly' >
          <div className='col-6'>
            <Posts postName='Learn a Laravel PHP' postBody='Junior developper'/>
            <Posts postName='Learn a JavaScript' postBody='Senior Developper'/>
            <Posts postName='Learn a Java' postBody='Junior developer' />
          </div>
          
          <div className='col-4'>
            <Button title='Java' imgUrl=''/>
            <Button title='javascript'/>
            <Button title='php laravel'/>
            <Button title='python 😞😞'>
              <div>
                <span></span>
              </div>
            </Button>
            <Button>
              <div>
                <img style={{width:"100px",height:"50px"}} src='https://tse1.mm.bing.net/th?id=OIP.64GEkhZ7oG2up_WZ-E2lRgHaE8&pid=Api&P=0&h=180' alt=''></img>
              </div>
            </Button>
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
      </div>
          
          
          
    </div>
      
    </>
  );
}

export default App;
