import { useState } from "react";
import TripList from "./TripList";
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const [trips, setTrips] = useState([
    { title: 'The Big Apple', body: 'lorem ipsum...', destination: 'New York', id: 1 },
    { title: 'Museum Journey', body: 'lorem ipsum...', destination: 'London', id: 2 },
    { title: 'Awesome holiday on the beach!', body: 'lorem ipsum...', destination: 'Egypt', id: 3 }
  ])

  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');

  function handleChangeTitle(event){
    setTitle(event.target.value);
    
  }

  function handleChangeDestination(event)
  {
    setDestination(event.target.value);
  }

  function handleAdd(){
    if(title.length > 3 && destination.length > 3)
    {
      console.log(title.length)
    
    const newList = trips.concat({ title: title, body: "body", destination: destination,  id: uuidv4() });

    setTrips(newList);
    }else {
       alert("String too short")
    }
    setTitle('');
    setDestination('');
  }


  const handleDelete = (id) => {
    const newTrips = trips.filter(trip => trip.id !== id);
    setTrips(newTrips);
  }

  return (
    <div className="home">
      <div> 
      <AddItem
        title={title}
        destination = {destination}
        onChangeTitle = {handleChangeTitle}
        onChangeDestination = {handleChangeDestination}
        onAdd = {handleAdd}
      />

      <TripList trips={trips} title="All Trips" handleDelete={handleDelete} />
      </div>
    </div>
  );
}
const AddItem = ( props ) => (
  <div>
    <h2>Set title of a trip</h2>
    <input type="textTitle" value={props.title} onChange={props.onChangeTitle} />
    <h2>Set trip destination</h2>
    <input type="textDestination" value={props.destination} onChange={props.onChangeDestination} />
    <h2></h2>
    <button type="button" onClick={props.onAdd} >
      Add Trip
    </button>
  </div>
);

export default Home;