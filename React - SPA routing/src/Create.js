import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const[destination, setDestination] = useState('');

  const[city, setCity] = useState('');

  const[hotel, setHotel] = useState('');
  
  const[dates, setDates] = useState('');

  const[isPending, setIsPending] = useState(false); // to make that after adding a post info 'loading' is displayed

  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault()      // do not refresh page after clicking submit
    const trip = { destination, city, hotel, dates };

    setIsPending(true);
    
    fetch('http://localhost:8000/trips', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(trip)
    }).then(() =>
    {
      console.log('new trip has been added')
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Trip</h2>
      <form onSubmit={handleSubmit} >
        <label>Trip destination:</label>
        <input
          type="text"
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />       
        <label>Destination city:</label>
        <textarea 
        required
        value = {city}
        onChange = {(e) => setCity(e.target.value)}
        > 
        </textarea>

        <label> Hotel:</label>
        <textarea 
        value={hotel}
        onChange={(e) => setHotel(e.target.value)}
        >
        </textarea >

        <label>Dates:</label>
        <textarea 
        required
        value = {dates}
        onChange = {(e) => setDates(e.target.value)}
        > 
        </textarea>


        { !isPending && <button>Add Trip</button>}  
        { isPending && <button disabled> Adding trip... </button>} 
      

      </form>
    </div>
  );
}

export default Create;