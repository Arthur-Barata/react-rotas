import React from "react";
import { Link } from "react-router-dom";


const User =()=>{
    return(
        <div>
            <nav>
                <h1>User</h1>
                <ul>
                    <li>
                        <Link to="/">Retornar à pagina inicial</Link>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default User;