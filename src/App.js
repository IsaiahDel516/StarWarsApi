import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Mainpage from './components/Mainpage';
import Favorited from './components/Favorited';
import Header from './components/Header'

// This is where all our components will be rendered. 
function App() {
  const [state, updateState] = useState({
    favList: [],
    charList: [],
    newCharUrl: '',
    charCount: 0
  })
  // when the page loads for the first time, we want to fetch 10 characters right off the bat
  useEffect(() => {
    fetchChar();
  }, [])
  // I made this function outside the use effect to make the code a bit more modular and reusable 
  const fetchChar = () => {
    fetch('https://swapi.dev/api/people/?format=json')
    .then((data) => data.json())
    .then((data) => {
      // setting the results gotten from our api call and storing them in our charlist array. The newCharUrl is for our next api call since the first api url will always return the same results. 
      updateState({...state, charList: data.results, newCharUrl: data.next});
    });
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <Mainpage
            // I pass the whole state along with individual props so that i can use the spread operator later when i update the state instead of manually rewriting every piece of state 
            charList={state.charList}
            updateState={updateState}
            newCharUrl={state.newCharUrl}
            charCount={state.charCount}
            favList={state.favList}
            state={state}
          />}
        />
        <Route path='/favorited' element={
          <Favorited
            favList={state.favList} 
            updateState={updateState}
            state={state}
            charList={state.charList}
          />}
        />
      </Routes>
    </Router>
  );
}

export default App;
