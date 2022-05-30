import TripList from "./TripList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: trips } = useFetch('http://localhost:8000/trips')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { trips && <TripList trips={trips} /> }
    </div>
  );
}
 
export default Home;