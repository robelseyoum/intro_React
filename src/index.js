import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="https://images-na.ssl-images-amazon.com/images/I/71tWaxdJNWL._AC_UL200_SR200,200_.jpg"
    alt="Wonkey Donkey"
  />
);

const Title = () => (
  //here fontSize used as inline style
  <h2 style={{ fontSize: "2rem", color: "red" }}>The Wonkey Donkey</h2>
);

//let create variable for styling author
const authorStyle = {
  letterSpacing: "10px",
  color: "green"
};
const Author = () => <p style={authorStyle}>by Craig Smith</p>;

ReactDom.render(<Books />, document.getElementById("root"));
