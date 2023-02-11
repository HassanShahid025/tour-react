import { useState } from "react";
import { TourType } from "../../App";
import './Tours.css';

interface Itour{
    tour: TourType;
    removeTour: (id: string) => void;
}


export const Tour = ({tour,removeTour}:Itour) => {

    const [readmore, setReadmore] = useState(false)

    return(
        <div className="single-tour">
            <img src={tour.image} alt="" />
            <div className="details">
                <div className="name-price">
                    <h4>{tour.name}</h4>
                    <p>${tour.price}</p>
                </div>
                <p>{readmore ? tour.info : `${tour.info.substring(0,200)}`}
                <button className="toggle-text-btn" onClick={()=>{setReadmore(!readmore)}}>{readmore ? "Show less": "...Read more"}</button>
                </p>
                <div className="button-container">
                <button className="delete-btn" onClick={() => removeTour(tour.id)}>
                Not interested
                </button>
                </div>
                
            </div>
        </div>
    )
}