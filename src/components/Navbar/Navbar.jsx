import './Navbar.css';
import cap from '../../assets/cap.jpg';

const Navbar = () => {
  return (
    <div>
      <nav>
        <img className='logo' src={cap} alt='graduate image'/>
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar