import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Trip Agency</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#3c87ff',
          borderRadius: '10px' 
        }}>Add trip</Link>
      </div>
    </nav>
  );
}
 
export default Navigationbar;