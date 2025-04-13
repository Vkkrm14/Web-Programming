import React, { useState } from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Main() {
  const [joke, setJoke] = useState("");

  const arr = [
    "Why is 6 afraid of 7? Cuz 7 8(ate) 9.",
    "Why was 10 afraid ? Cuz it's in the middle of 9 11!",
    "How does the ocean say hi? It waves!",
    "What do you call a group of cows playing instruments? A moo-sical band!",
    "What do you call a bear with no socks on? Barefoot!",
  ];

  const handleClick = () => {
    const random = Math.floor(Math.random() * arr.length);
    setJoke(arr[random]);
  };

  return (
    <>
      <button onClick={handleClick}>Tell me a joke!</button>
      <p>{joke}</p>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <h3>This is the Footer</h3>
    </footer>
  );
}

function Q1() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header title="Joke Teller" />
      <Main />
      <Footer />
    </div>
  );
}

export default Q1;
