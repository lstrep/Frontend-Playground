import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TripDetails = () => {
  const { id } = useParams();
  const { data: trip, error } = useFetch('http://localhost:8000/trips/' + id);
  const history = useHistory();

  const handleClick= () =>{
    fetch('http://localhost:8000/trips/' + trip.id,{
    method: 'DELETE'
    }).then(() => {
      history.push('/'); // after deleting we go to  the homepage
    })
  }

  return (
    <div className="trip-details">
      { error && <div>{ error }</div> }
      { trip && (
        <article>
          <h2>Deatails of a trip to { trip.destination }</h2>
          <p>City: { trip.city }</p>
          <div>Hotel: {trip.hotel} </div>
          <div>Period: { trip.dates }</div>
          <button onClick={handleClick}> delete </button>
        </article>
      )}
    </div>
  );
}
 
export default TripDetails;