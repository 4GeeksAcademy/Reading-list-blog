import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharacterCard = (props) => {
	const {store, actions} = useContext(Context)
	const[fetchCharacter, setFetchCharacter] = useState()

	const getCharacter = (uid) => {
		fetch(`https://www.swapi.tech/api/people/${uid}`)
			.then(res => res.json())
			.then((response) =>{
				setFetchCharacter(response.result.properties)
			});
	}

	useEffect(() => {
        getCharacter(props.character.uid);
    }, []);
	

	return ( 	
		<div className="card">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<div className= "text-start">
                    <p>Gender: {fetchCharacter && fetchCharacter.gender} </p>
                    <p>Hair color: {fetchCharacter && fetchCharacter.hair_color}</p>
					<p>Eye color: {fetchCharacter && fetchCharacter.eye_color}</p>
				</div>
					<Link 
						to={`/character/${props.character.uid}`}
						className="btn btn-outline-primary" style={{color:"blue"}}
					> 
					Learn More
					</Link>
					<button className="btn btn-outline-danger ms-5" onClick={()=>{
						actions.changeMessage(props.character.name);
					}}><i className="fa fa-heart text-danger" /></button>
			</div>
		</div>
	)
}

export default CharacterCard