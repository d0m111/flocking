import "../Styles/Portfolio.css"
import portfolio from "../Data/portfolio.json"

export default function Portfolio(){
    return(
        <div className="portfolio_container">
            
                {portfolio.map((e)=>(
                    <div className="card">
                        <iframe className="iFrame_properties" src={e.web} title={e.name}></iframe>
                        <div className="card_description">
                            {/* <p>{e.name}</p>
                            <p>{e.about}</p> */}
                            <div className="assets">
                                {e.assets.map((e)=>{
                                    return(
                                        <p>{e}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}