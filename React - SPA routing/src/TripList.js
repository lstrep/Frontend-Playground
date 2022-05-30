import { Link } from 'react-router-dom';

const TripList = ({ trips, destination}) => {
  return (
    <div className="trip-list">
      <h2>Available trips: { destination }</h2>
      {trips.map(trip => (
        <div className="trip-preview" key={trip.id} >
           <Link to={`/trips/${trip.id}`}>
          <h2>{ trip.title }</h2>
          <p>Trip to { trip.destination }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TripList;