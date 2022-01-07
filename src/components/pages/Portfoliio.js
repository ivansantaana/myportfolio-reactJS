import React from 'react';
import CardItem from '../Cards/CardItem';
import '../Cards/Cards.css';

function Portfolio() {
    return (
        <div className='cards'>
        <h1>¡Échale un vistazo a algunos de mis trabajos!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Un simple reproductor de música para escuchar las canciones y covers de Ane Gómez.'
                label='Android APP'
                path='/portfolio'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Miniaturas, logos, banners y edición de video en el canal de Ane Gómez.'
                label='YT Channel'
                path='/portfolio'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.png'
                text='Página web de GoodFoodTalk.'
                label='Website'
                path='/portfolio'
              />
              <CardItem
                src='images/img-4.png'
                text='Aplicación para WildForest'
                label='Android APP'
                path='/portfolio'
              />
              <CardItem
                src='images/img-8.png'
                text='Web K-BERRI BEAUTY con multi-idioma, sesiones, sección de productos y carrito de la compra'
                label='Website'
                path='/portfolio'
              />
            </ul>
          </div>
        </div>
      </div>

    );
}
export default Portfolio;