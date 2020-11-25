import React from "react";

function About() {
  return (
    <div>
      <h1>You got time? We got the recipe!</h1>

      <blockquote className="blockquote">
        <p className="mb-0">WeFork! changed my life.</p>
        <footer className="blockquote-footer">
          Creators<cite title="Source Title">it</cite>
        </footer>
      </blockquote>

      <blockquote className="blockquote">
        <p className="mb-0">Magnifique!</p>
        <footer className="blockquote-footer">
          That weird Ratatouille mouse<cite title="Source Title"></cite>
        </footer>
      </blockquote>

      <p>
        WeFork! was created so you can have fun! Ever wondered about what do
        they eat in Egypt? We got you. Never tried a meal that stars with the
        letter T? Yap, we got you. Told someone you are interest in, that you
        LOVE lentils and now you have to prepare something for that special
        someon? You know the drill, we got you!
      </p>

      <h2>Contact the creators</h2>
      <p>guilherme.tretow@gmail.com</p>
      <p>rodrigomatosrj@gmail.com</p>
    </div>
  );
}

export default About;
