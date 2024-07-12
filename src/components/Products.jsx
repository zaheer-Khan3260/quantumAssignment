import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Products() {
  const products = [
    { title: 'Product 1', content: 'This is a wider card with supporting text below as a natural lead-in to additional content.' },
    { title: 'Product 2', content: 'This is a wider card with supporting text below as a natural lead-in to additional content.' },
    { title: 'Product 3', content: 'This is a wider card with supporting text below as a natural lead-in to additional content.' },
  ];

  return (
    <Container className="my-5 animation ">
      <h2 className="text-center mb-5">Products</h2>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;