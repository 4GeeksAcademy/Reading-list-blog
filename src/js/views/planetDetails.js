import React, {useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetDetails =() => {
    const params = useParams()
    const {actions, store} = useContext(Context)


    useEffect(() =>{
        actions.getPlanet(params.planetId)
    }, []);

    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-sm-12">
                {store.planet ? (
                    <div className="row">
                        <div className="col-md-4 col-sm-2">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`}/>
                        </div>
                           
                        <div className="card-body col-md-8 col-sm-10 bg-dark text-white">
                            <h3 className="card-title text-warning">{store.planet.name}</h3>
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
                                    <h5>Climate: </h5>{store.planet.climate}
                                </div>
                                <div className="col">
                                    <h5>Diameter: </h5>{store.planet.diameter}
                                </div>
                                <div className="col">
                                    <h5>Orbital period: </h5>{store.planet.orbital_period}
                                </div>
                                <div className="col">
                                    <h5>Population: </h5>{store.planet.population}
                                </div>
                                <div className="col">
                                    <h5>Rotation period: </h5>{store.planet.rotation_period}
                                </div>
                                <div className="col">
                                    <h5>Terrain: </h5>{store.planet.terrain} 
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