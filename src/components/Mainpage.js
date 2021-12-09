import CharCard from './CharCard'
import '../styles/mainPage.css'

// This is where we will be able to see all of the characters that are accessable in our api. 
function Mainpage(props){
  // Here we are making a function that will allow us to see more characters in the api. This url needs to be ambigious since the api sends them in increments of 10 with a new api url to get the next batch
  const getMoreChar = (url) => {
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        props.charList.push(data.results[i]);
      }
      props.updateState({...props.state, newCharUrl: data.next, charList: props.charList})
    });
  }
  // Here we are adding a char card component for each character in the list inside our state. We are passing all our info as props to be used later to render inside each card
  const cards = []
  for (let i = 0; i < props.charList.length; i++) {
    cards.push(
      <CharCard 
        key={i}
        index={i}
        birthYear={props.charList[i].birth_year}
        eyeColor={props.charList[i].eye_color}
        gender={props.charList[i].gender}
        hairColor={props.charList[i].hair_color}
        height={props.charList[i].height}
        mass={props.charList[i].mass}
        name={props.charList[i].name}
        skinColor={props.charList[i].skin_color}
        homeworld={props.charList[i].homeworld}
        updateState={props.updateState}
        state={props.state}
        charList={props.charList}
        favList={props.favList}
        favorited={false}
      />)
  }
  return (
    <div id='main'>
      {cards}
      <div id='btn'>
        <button id='getMore' onClick={(url) => getMoreChar(props.newCharUrl)}> Get More Characters </button>
      </div>
      
    </div>  
  )  
}
  
export default Mainpage