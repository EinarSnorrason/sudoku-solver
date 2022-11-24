
import React , {useState, useEffect} from 'react';

export function useKeyPress() {

    // State for keeping track of whether key is pressed
  
    const [keyPressed, setKeyPressed] = useState(-1);
  
  
  
    // If pressed key is our target key then set to true
  
    function downHandler({ key }) {
  
      if (!isNaN(key)) {
  
        setKeyPressed(parseInt(key));
        
      }
  
    }

    function upHandler({key}){
        setKeyPressed(-1);
    }
  
  
    // Add event listeners
  
    useEffect(() => {
  
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
  
      // Remove event listeners on cleanup
  
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
    
      };
  
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
  
  
    return keyPressed;
  
  }