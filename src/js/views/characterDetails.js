import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
    const params = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacter(params.characterId);
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-sm-12">
                {store.character ? (
                    <div className="row">
                        <div className="col-md-4 col-sm-2">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`}/>    
                        </div>

                        <div className="card-body col-md-8 col-sm-10 bg-dark text-white">
                            <h3 className="card-title text-warning">{store.character.name}</h3>
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
                                    <h5>Birth year: </h5> {store.character.birth_year}
                                </div>
                                <div className="col">
                                    <h5>Eye color: </h5>{store.character.eye_color}
                                </div>
                                <div className="col">
                                    <h5>Gender: </h5> {store.character.gender}
                                </div>
                                <div className="col">
                                    <h5>Hair color: </h5> {store.character.hair_color}
                                </div>
                                <div className="col">
                                    <h5>Height: </h5> {store.character.height}
                                </div>
                                <div className="col">
                                    <h5>Skin color: </h5>{store.character.skin_color}
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