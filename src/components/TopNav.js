import { useState, useEffect } from 'react'


const TopNav = () => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState([
    'Bienvenue sur mon site web',
    'Consultez nos derniers produits',
    'Livraison gratuite pour les commandes de plus de 200mille',
    'faite vos commande sur whatsapp',
    "au +221 77 761 80 72"
  ])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [text.length])

  return (
    <nav className='top-nav'>
      <ul className='top-nav-list'>
        <li className='top-nav-item'>
          <a href='/'>{text[index]}</a>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
