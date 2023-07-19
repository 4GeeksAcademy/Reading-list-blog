import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const VehicleDetails = () => {
    const params = useParams()
    const {actions, store} = useContext(Context)

    useEffect(() =>{
        actions.getVehicle(params.vehicleId)
    }, []);

    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-sm-12">
                {store.vehicle ? (
                    <div className="row">
                        <div className="col-md-4 col-sm-2">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}.jpg`}/>
                        </div>
                           
                        <div className="card-body col-md-8 col-sm-10 bg-dark text-white">
                            <h3 className="card-title text-warning">{store.vehicle.name}</h3>
                            <br/>
                            <>
                            <p>
                                Veniam irure veniam sit incididunt excepteur magna excepteur non
                                aute ut. Nisi irure consectetur enim ullamco irure ad. Tempor eu
                                pariatur incididunt id minim in mollit exercitation irure est. Anim
                                ex ut est ea exercitation labore aliqua culpa non ut. Ullamco
                                pariatur ad adipisicing est minim sunt laborum aliqua amet laboris
                                velit anim.
                            </p>
                            < div className="row text-white justify-content-center mt-4 border-top border-secondary pt-4">
                                <div className="col">
                                    <h5>Cargo capacity: </h5> {store.vehicle.cargo_capacity}
                                </div>
                                <div className="col">
                                    <h5>Consumables: </h5>{store.vehicle.consumables}
                                </div>
                                <div className="col">
                                    <h5>Crew: </h5>{store.vehicle.crew}
                                </div>
                                <div className="col">
                                    <h5>Model: </h5>{store.vehicle.model}
                                </div>
                                <div className="col">
                                    <h5>Passengers: </h5>{store.vehicle.passengers}
                                </div>
                                <div className="col">
                                    <h5>Vehicle class: </h5>{store.vehicle.vehicle_class}
                                </div>
                                </div>
                            </>
                        </div>
                    </div>
                ) : (
                    <h3>Loading...</h3>
                )}
            </div>
        </div>
    );
};