import React from "react";
import {Link} from "react-router-dom";

const Sobre = ()=>{
    return(
        <div>
            <nav>
                <h1>Sobre</h1>

                <ul>
                    <li>
                        <Link to="/">Retornar a pagina inicial</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 

export default Sobre;