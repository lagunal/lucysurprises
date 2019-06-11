import React  from 'react';

import './photoItem.css';

const PhotoItem = (props) => {
    const { title, miniDescription, english, spanish, price, photo } = props;
    console.log(photo);
    return(
        <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">{title}<span className="text-muted mini-description">{miniDescription}</span></h2>
          <p className="lead">{english}</p>
          <p className="lead">{spanish}</p>
          <div className="price"><p className="lead range">Price Range:</p><p className="lead ml-2">{price}</p></div>
        </div>
        <div className="col-md-5">
          {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          <img className="bd-placeholder-img" width="100%" height="100%" 
                src={photo}
                ></img>
        </div>
      </div>
    );
};

export default PhotoItem;

