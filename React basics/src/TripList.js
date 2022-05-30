const TripList = ({ trips, title, handleDelete }) => {
  return (
    <div className="trip-list">
      <h2>{ title }</h2>
      {trips.map(trip => (
        <div className="trip-preview" key={trip.id} >
          <h2>{ trip.title }</h2>
          <p>Trip to { trip.destination }</p>
          <button onClick={() => handleDelete(trip.id)}>delete trip</button>
        </div>
      ))}
    </div>
  );
}
 
export default TripList;