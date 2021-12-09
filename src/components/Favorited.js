import CharCard from './CharCard'
import '../styles/favorited.css'

// This is where all the favorited characters will go. Logic is very similar to the logic in mainpage. The main difference is that favorited is set to true which will be important inside the char card component
function Favorited(props) {
  const favorites = []
  for (let i = 0; i < props.favList.length; i++) {
    favorites.push(
      <CharCard 
        key={i}
        index={i}
        birthYear={props.favList[i].birth_year}
        eyeColor={props.favList[i].eye_color}
        gender={props.favList[i].gender}
        hairColor={props.favList[i].hair_color}
        height={props.favList[i].height}
        mass={props.favList[i].mass}
        name={props.favList[i].name}
        skinColor={props.favList[i].skin_color}
        homeworld={props.favList[i].homeworld}
        updateState={props.updateState}
        state={props.state}
        charList={props.charList}
        favList={props.favList}
        favorited={true}
      />)
  }
  return (
    <div id='fav'>
      {favorites}     
    </div>    
  )  
}

export default Favorited