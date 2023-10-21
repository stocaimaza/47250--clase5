import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Menu from './componentes/Menu/Menu';
import Celulares from './componentes/Celulares/Celulares';
import Sillas from './componentes/Sillas/Sillas';
import Computadoras from './componentes/Computadoras/Computadoras';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/computadoras' element={<Computadoras />} />
          <Route path='/sillas/:id' element={<Sillas />} />
          <Route path='/celulares' element={<Celulares />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* Enlaces absolutos y Enlaces relativos
      <h1>Etiquetas de Enlaces</h1>
      <a href="https://www.infobae.com" target='_blank'>Infobae</a>
      <br />
      <a href="">Home</a>
      */}
    </div>
  )
}

export default App

/*
  SPA = Single page application. 
  CSR = Renderizado del lado del cliente. (Client Side Rendering).
  SSR = Renderizado del lado del servidor. (Server Side Rendering).


  React Router: es una librería de enrutamiento para React. 
  Nos permite navegar entre componentes sin tener que recargar la aplicación. 

  ¿Cómo la usamos? 

  1) Instalamos: npm install react-router-dom
  2) Importamos en nuestra App los siguientes componentes de la libreria: 
  BrowserRouter, Route, Routes.
  BrowserRouter: es un componente que envuelve nuestra aplicación y habilita la navegación entre componentes. 
  Routes: define las rutas de navegación. 
  Route: define una ruta en particular. 


*/