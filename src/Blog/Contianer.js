import React from "react";
import img1 from '../assets/img/1.png';

function InfoContainer(props) {
  return(
            <div className="info-section d-flex">
              <span style={{
                color: '#4f4f4f'
              }}>{props.AuthorName}</span>
              <button className="btn btn-success">Read More</button>
            </div>
  )
}

export default function Contianer(props) {

  document.title = `posts`
  const authorName = props.AuthorName;
  const title =  props.title;
  const description = props.description;

  return (
    <>
      <div className="container">
        <div className="justify-content-center">
          <div className="post-container col-lg-9 col-md-10 col-12 d-flex">
            <div className="img-container">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="text-container">
              <h1>{title}</h1>
              <p>{description}</p>
              <InfoContainer AuthorName={authorName}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
