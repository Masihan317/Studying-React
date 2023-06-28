import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
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
  <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>);
};

const Image = () => {
  return (<img src='https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL210_SR195,210_.jpg' alt='book'/>);
}

const Author = () => {
  return <h4 style={{ color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Emily Henry</h4>;
}

const Title = () => {
  return <h1>Happy Place</h1>;
}

ReactDom.render(<BookList />, document.getElementById('root'));