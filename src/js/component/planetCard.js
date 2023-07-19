import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const PlanetCard = (props) => {
    const {store, actions} = useContext(Context)

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <div className= "text-start">
                    <p>Population: {props.planet.population}</p>
                    <p>Terrain: {props.planet.terrain}</p>
						
				</div>
                <Link 
                    to={`/planet/${props.planet.uid}`}
                    className="btn btn-outline-primary" style={{color:"blue"}}
					> 
					Learn More
					</Link>
					<button className="btn btn-outline-danger ms-5" onClick={()=>{
						actions.changeMessage(props.planet.name);
					}}><i className="fa fa-heart text-danger" /></button>
			</div>
		</div>
	)
}

export default PlanetCard