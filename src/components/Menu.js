import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu () {

  const [page, setPage] = useState('ínicio')

  return (

    <div className="navbar-menu-option-container">
      <Link to='/' onClick={() => setPage('início')}>
        <span
          className="navbar-menu-option"
          style={{ fontWeight: page === 'início' ? 'bold' : 'normal' }}
        >
          Início
    </span>
      </Link>
      <Link to='/' onClick={() => setPage('Séries')}>
        <span
          className="navbar-menu-option"
          style={{ fontWeight: page === 'Séries' ? 'bold' : 'normal' }}
        >
          Series
    </span>
      </Link>
      <Link to='/' onClick={() => setPage('Filmes')}>
        <span
          className="navbar-menu-option"
          style={{ fontWeight: page === 'Filmes' ? 'bold' : 'normal' }}
        >
          Filmes
    </span>
      </Link>
      <Link to='/' onClick={() => setPage('Adicionados recentemente')}>
        <span
          className="navbar-menu-option"
          style={{ fontWeight: page === 'Adicionados recentemente' ? 'bold' : 'normal' }}
        >
          Adicionados recentemente
    </span>
      </Link>
      <Link to='/lista' onClick={() => setPage('Minha lista')}>
        <span
          className="navbar-menu-option"
          style={{ fontWeight: page === 'Minha lista' ? 'bold' : 'normal' }}
        >
          Minha Lista
        </span>
      </Link>
    </div>
  )
}

export { Menu };
