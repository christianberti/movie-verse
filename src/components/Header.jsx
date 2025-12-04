import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <Link to={'/'}>MovieVerse</Link>
        <input type="text" placeholder='Buscar...'/>
        <Link to={'/#'}>Favoritos</Link>
    </div>
  )
}

export default Header