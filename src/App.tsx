import './App.css';
import { useEffect, useState } from 'react';
import { Tours } from './components/tour/Tours';
import { Loading } from './components/loading/Loading';
const url = 'https://course-api.com/react-tours-project';

export interface TourType  {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<TourType []>([]);

  const removeTour = (id:string) => {
  let newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  
  const fetchData = async () => {
    setLoading(true);

    try{
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
        setLoading(false)
        console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(loading){
    return(
      <Loading/>
    )
  }
  if(tours.length === 0){
    return(
      <div className='main-tour'>
        <div className="title">
            <h1>No Tours Left</h1>
            <div className="underline"></div>
            <div className='reload-btn'>
            <button onClick={()=>{fetchData()}} >Reload</button>
            </div>
            
        </div>
      </div>
      
    )
  }
  return (
      <div className="container">
       <Tours tours={tours} removeTour={removeTour}/>
      </div>
      
  );
}

export default App;
