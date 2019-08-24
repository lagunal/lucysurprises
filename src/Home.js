import React from 'react';

import './App_carrousel.css';


import guide1 from './assets/img/PriceGuide1.png';
import guide2 from './assets/img/PriceGuide2_.jpg';

function Home() {
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


    {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <img className="bd-placeholder-img" width="100%" height="100%" 
                src={require("./assets/img/LogoLucySurprises.png")}
                ></img>
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> */}



    <div className="container marketing">

    <img className="bd-placeholder-img" width="100%" height="100%" 
                src={guide1}
                ></img>
    
    <hr className="featurette-divider" />

    <img className="bd-placeholder-img" width="100%" height="100%" 
                src={guide2}
                ></img>

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

export default Home;
