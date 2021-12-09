import '../styles/charCard.css'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons';

// Component that will hold all our info for each individual character. Again put inside another folder for modularity
function CharCard(props) {
  // This function determines whether a character is favorited and how to handle the difference. 
  const favClick = () => {
    if (props.favorited) {
      props.charList.push(props.favList.splice(props.index, 1)[0]);
    } else {
      props.favList.push(props.charList.splice(props.index, 1)[0]);
    }
    props.updateState({...props.state, charList: props.charList, favList: props.favList});
  }
  let FavIcon;
  let Delete;
  // This is just to determine whether the heart will be solid or not based the favorited state of the card
  if (props.favorited) {
    FavIcon = (<span> <FAIcon icon={solidHeart} onClick={()=> favClick()}/> </span>);
  } else {
    FavIcon = (<span> <FAIcon icon={regHeart} onClick={()=> favClick()}/> </span>);
    // Here I set the delete variable to a button tag because i only want the user to be able to delete a char card if its not favorited
    Delete = (<button onClick={() => {
      props.charList.splice(props.index, 1);
      props.updateState({...props.state, charList: props.charList});
      }
    }> 
        Delete Character 
      </button>);
  }
  return (
    <div id='card'>
      {FavIcon}
      <p>
        <strong> Name: </strong> {props.name}  <br/>
        <strong> Birth Year: </strong> {props.birthYear} <br/>
        <strong> Gender: </strong> {props.gender} <br/>
        <strong> Mass: </strong> {props.mass}kg <br/>
        <strong> Height: </strong> {props.height}cm  <br/>
        <strong> Eye Color: </strong> {props.eyeColor} <br/>
        <strong> Hair Color: </strong> {props.hairColor} <br/>
        <strong> Skin Color: </strong> {props.skinColor} <br/>
      </p>
      {Delete}
    </div>  
  )  
}

export default CharCard
