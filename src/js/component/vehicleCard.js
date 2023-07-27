import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const VehicleCard = (props) => {
    const {store, actions} = useContext(Context)
    const[fetchVehicle, setFetchVehicle] = useState()

    const getVehicle = (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then(res => res.json())
            .then((response) =>{
                setFetchVehicle(response.result.properties)
            });
    }

    useEffect(() => {
        getVehicle(props.vehicle.uid);
    }, []);

    return(
        <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.vehicle.name}</h5>
                <div className= "text-start">
                    <p>Crew: {fetchVehicle && fetchVehicle.crew}</p>
                    <p>Model: {fetchVehicle && fetchVehicle.model}</p>
						
				</div>
                <Link 
                    to={`/vehicle/${props.vehicle.uid}`}
                    className="btn btn-outline-primary" style={{color:"blue"}}
					> 
					Learn More
					</Link>
					<button className="btn btn-outline-danger ms-5" onClick={()=>{
						actions.changeMessage(props.vehicle.name);
					}}><i className="fa fa-heart text-danger" /></button>
			</div>
		</div>
	)
}

export default VehicleCard