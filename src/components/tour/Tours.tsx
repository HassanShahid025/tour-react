import { TourType } from '../../App'
import { Tour } from './Tour'
import './Tours.css'

export interface Iprop{
    tours: TourType[];
    removeTour: (id: string) => void;
      
}

export const Tours = ({tours, removeTour}:Iprop) => {
    return(
      <div className='main-tour'>
        <div className="title">
            <h1>Our Tours</h1>
            <div className="underline"></div>
        </div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
        })}
      </div>
    )
}