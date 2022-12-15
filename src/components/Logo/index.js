import './estilo.css'
import logo from '../../images/logo.svg'

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Book</strong> Shop</p>
        </div>
    )
}

export default Logo     