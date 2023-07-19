import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store} = useContext(Context)
	
  const handleRemoveFavorite = (event, message) => {
    event.stopPropagation(); 
    actions.RemoveFavorite(message);
  };
  
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{backgroundColor:"white"}}>
			<Link to="/">
				<img src={"https://w7.pngwing.com/pngs/4/136/png-transparent-star-wars-anakin-skywalker-logo-star-wars-text-number-desktop-wallpaper.png"} alt="Star Wars" style={{maxHeight:100, maxWidth:100}}/>
			</Link>
			<div className="dropdown">
        <Link
          className="btn btn-success dropdown-toggle me-10 favorite"
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          <span class="badge text-bg-secondary">{store.message.length}</span>
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {store.message && store.message.length > 0 ?  store.message.map((message, index) => (
            <li className="list-group-item list" key={index}>{message}  <button className="btn btn-link" onClick={(event) => handleRemoveFavorite(event, message)} >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button></li>
          )): <li className="emptylist mr-2" style={{ width: '250px', fontSize: '15px' }}>The List Is Empty</li>}
        </ul>
      </div>
				
		</nav>
	);
};