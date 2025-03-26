import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';
import Offer from './Offer';
import FavoriteAuthors from '../pages/FavoriteAuthors';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LandingPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('Featured');

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        filterBooks('Featured', data);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const filterBooks = (category, data = books) => {
    let filtered = [];
    if (category === 'Featured') {
      filtered = data.slice(0, 8);
    } else if (category === 'Best Sellers') {
      filtered = data.filter((book) => parseFloat(book.rating) >= 4.5);
    } else if (category === 'Most Viewed') {
      filtered = data.slice(4, 12);
    }
    setFilteredBooks(filtered);
    setActiveTab(category);
  };

  return (
    <div>
      <Navbar />
      <Carousel />

      <Container className="mt-5">
        <h2 className="mb-4">Popular Books</h2>

        <div className="d-flex mb-4">
          {['Featured', 'Best Sellers', 'Most Viewed'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'danger' : 'light'}
              className="me-2"
              onClick={() => filterBooks(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <Row>
          {filteredBooks.map((book) => (
            <Col key={book.id} md={3} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Link to={`/product/${book.id}`}>
                  <Card.Img
                    variant="top"
                    src={book.image}
                    alt={book.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                </Link>
                <Card.Body className="text-center">
                  <h6 className="text-muted">{book.author}</h6>
                  <Card.Title>{book.title}</Card.Title>
                  <h5 className="text-danger">₹{parseFloat(book.price).toFixed(2)}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Offer />
      <FavoriteAuthors />
      <Footer />
    </div>
  );
};

export default LandingPage;