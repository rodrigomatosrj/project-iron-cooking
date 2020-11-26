import React from "react";
import "./about.css";
function About() {
  return (
    <div className="bg-dark shadow-lg  div">
      <h1 className="mt-5 text-center pt-5 pb-5  text-danger ">
        You got time? We got the recipe!
      </h1>
      <p className="ml-5 pt-5 text-muted text-center mr-5 ">
        WeFork! was created so you can have fun! Ever wondered about what people
        eat in Egypt? We got you.
        <br /> Are you a fan of meals starting with "T"? Yap, we got you. <br />
        Told someone that you like, that you REEALY LOVE lentils and now you
        have to cook for that special someone?
        <br /> You know the drill, we got you!
      </p>
      <div>
        <div className="pt-5 text-center">
          <blockquote className="blockquote mt-5 ml-5  ">
            <p className="mb-0 text-muted">“WeFork! changed our lives”</p>
            <footer className="blockquote-footer">
              Creators<cite title="Source Title"></cite>
            </footer>
          </blockquote>
        </div>
        <br></br>
        <div>
          <blockquote className="blockquote text-center ml-5">
            <p className="mb-0 text-muted">“Magnifique”</p>
            <footer className="blockquote-footer">
              That weird Ratatouille rat<cite title="Source Title"></cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="ml-5 bottom contact text-center ">
        <h2 className="text-danger ">Contact the creators</h2>
        <p className="text-muted">guilherme.tretow@gmail.com</p>
        <p className="text-muted">rodrigomatosrj@gmail.com</p>
      </div>
    </div>
  );
}

export default About;
