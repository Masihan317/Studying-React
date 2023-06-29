import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL210_SR195,210_.jpg',
    title: 'Happy Place',
    author: 'Emily Henry'
  }
  ,
  {
    img: 'https://m.media-amazon.com/images/I/51JSo2gyr2L._SX331_BO1,204,203,200_.jpg',
    title: 'Nick and Charlie',
    author: 'Alice Oseman'
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (<Book book={book}></Book>);
      })}
    </section>
    );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
  <article className='book'>
    <img src={img} alt='book'/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>);
};

ReactDom.render(<BookList />, document.getElementById('root'));