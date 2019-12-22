import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
      name="Sharlene Reynolds" 
      avatar="https://randomuser.me/api/portraits/women/2.jpg" 
      online/>
      <Contact 
      name="Micheal Burke" 
      avatar="https://randomuser.me/api/portraits/men/23.jpg" 
      />
      <Contact 
      name="Janet Vasquez" 
      avatar="https://randomuser.me/api/portraits/women/67.jpg" 
      online/>
    </div>
  );
}

export default App;
