import { useEffect, useState } from 'react';
import './App.css';
import Background from './Components/Background/Background';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Nav/Nav';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Service from './Components/Services/Service';

function App() {

  const [count, Setcount] = useState(0);
  const [playstatus, Setplaystatus] = useState(false);
  useEffect(()=>{
    setInterval(()=>{
        Setcount((count)=>{
          return (count === 2 ? 0 : count+1)
        })
    },3000) 
},[])
  return (
    <div className="App">
      <Background count={count} Setcount={Setcount} playstatus={playstatus} Setplaystatus={Setplaystatus}/>
      <Hero count={count} Setcount={Setcount} playstatus={playstatus} Setplaystatus={Setplaystatus}/>
      <Navbar />
      <About />
      <Products />
      <Service count={count} Setcount={Setcount} />
      <Contact />
    </div>
  );
}

export default App;
