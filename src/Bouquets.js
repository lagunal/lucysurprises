import React from 'react';

import './App_carrousel.css';

import PhotoItem from './components/photoItem/photoItem';


function Bouquets() {
  return (
    <React.Fragment>
    
    <main role="main">


    <section className="jumbotron text-center">
                <div className="container">
                {/* <h1 className="jumbotron-heading">Album example</h1> */}
                <img src={'/assets/img/LogoLucySurprises.png'} className="img-fluid"/>
                <p className="h1">"Because Every Day is a Special Day"</p>
                {/* <p>
                    <a href="#" className="btn btn-primary my-2 mx-1">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p> */}
                </div>
    </section>




    <div className="container marketing">

      <PhotoItem 
          title='Mini Bouquet '
          miniDescription='Minimalist...!'
          english='It is a Balloon Bouquet in miniature version with Chic Style, seeks to recreate the motive to celebrate for our client in a simple way, with a touch of elegance and without excessive.'
          spanish='Es un Bouquet de Globos en versión miniatura con un estilo Chic, busca recrear el motivo a celebrar por nuestro cliente de una manera sencilla, con un toque de elegancia y sin excesos.'
          price='$99.99 - $115'
          photo='/assets/img/miniBouquet.jpeg'
      />


      <hr className="featurette-divider" />

      <PhotoItem 
          title='Small Bouquet '
          miniDescription='Fresh...!'
          english='it is a balloon bouquet with fresh style that stands out in plain sight and denotes with simplicity the motive to celebrate by our client.'
          spanish='Es un Bouquet de Globos que destaca a la vista y denota con sencillez el motivo a celebrar por nuestro cliente.'
          price='$120 - $134.99'
          photo='/assets/img/smallBouquet.jpeg'
      />

      <hr className="featurette-divider" />

      <PhotoItem 
          title='Medium Bouquet '
          miniDescription='Wonderful...!'
          english='It is a Balloon Bouquet remarkable, which striking for its beautiful decorative details to celebrate and fest that person or moment super special for you. This is our Most Popular Bouquet, because cause a Impressive Surprise Feeling in the persons that receive them.'
          spanish='Es un ramo de globos notable, que destaca por sus hermosos detalles decorativos para celebrar y festejar a esa persona o momento super especial para ti. Este es nuestro ramo más popular, porque causa una sensación de sorpresa impresionante en las personas que los reciben.'
          price='$140 - $169.99'
          photo='/assets/img/mediumBouquet.jpeg'
      />

   
      <hr className="featurette-divider" />

      <PhotoItem 
          title='Large Bouquet '
          miniDescription='Awesome...!'
          english=''
          spanish=''
          price='$180 - $209.99'
          photo='/assets/img/largeBouquet.jpeg'
      />

      <hr className="featurette-divider" />

    </div>

    <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2019 Lucy Surprises LLC. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    </main>
    </React.Fragment>
  );
}

export default Bouquets;
