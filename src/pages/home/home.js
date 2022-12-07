import React from "react";
import {Link} from "react-router-dom";




const Home = ()=>{
    return(
        <div>
            <nav>
                <h1>Home</h1>

                <ul>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Home;