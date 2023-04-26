import { Link } from "react-router-dom";
import "../Styles/Services.css";
import services from "../Data/services.json"


export default function Services(){

    return(
        <div className="services_container">
            {services.map((e, i)=>{
                return(
                <div className="services_card" key={i}>
                    <h2>{e.name}</h2>
                    <div className="description_elements">
                        {e.description.map((e,i)=>{
                            return(
                                <p key={i}>{e}</p>
                            )
                        })}
                    </div>
                    <Link to="#" className="button"><p>{e.price}</p></Link>
                </div>)
            })}
        </div>
    )
}