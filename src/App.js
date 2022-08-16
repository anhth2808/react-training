import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import './App.css';

import ComponentsAndProps from './MainConcepts/ComponentsAndProps'
import HelloWorld from './MainConcepts/HelloWorld';
import StateAndLifecycle from './MainConcepts/StateAndLifecycle'
import HandingEvents from './MainConcepts/HandingEvents'
import ConditionalRendering from './MainConcepts/ConditionalRendering'
import ListsAndKeys from './MainConcepts/ListsAndKeys'

import StarGame from './Plu/StarGame';
import CardsApp from './Plu/CardsApp';

import Ex1 from './F8/Ex1';
import Ex2 from './F8/Ex2';
import Ex3 from './F8/Ex3';
import Ex4 from './F8/Ex4';
import Ex5 from './F8/Ex5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/MainConcepts/HelloWorld' element={< HelloWorld />}></Route>
        <Route exact path='/MainConcepts/ComponentsAndProps' element={< ComponentsAndProps />}></Route>
        <Route exact path='/MainConcepts/StateAndLifecycle' element={< StateAndLifecycle />}></Route>
        <Route exact path='/MainConcepts/HandingEvents' element={< HandingEvents />}></Route>
        <Route exact path='/MainConcepts/ConditionalRendering' element={< ConditionalRendering />}></Route>
        <Route exact path='/MainConcepts/ListsAndKeys' element={< ListsAndKeys />}></Route>



        <Route exact path='/Plu/CardsApp' element={< CardsApp />}></Route>
        <Route exact path='/Plu/StarGame' element={< StarGame />}></Route>


        <Route exact path='/F8/Ex1' element={< Ex1 />}></Route>
        <Route exact path='/F8/Ex2' element={< Ex2 />}></Route>
        <Route exact path='/F8/Ex3' element={< Ex3 />}></Route>
        <Route exact path='/F8/Ex4' element={< Ex4 />}></Route>
        <Route exact path='/F8/Ex5' element={< Ex5 />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
