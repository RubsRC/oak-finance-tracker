// CreditCards.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function CreditCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("/api/credit-cards").then((response) => setCards(response.data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="my-4">Credit Cards</h2>
          <Row>
            {cards.map((card) => (
              <Col md={4} key={card._id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>
                      Balance: ${card.balance}
                      <br />
                      Due Date: {new Date(card.dueDate).toLocaleDateString()}
                      <br />
                      Interest Rate: {card.interestRate}%
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CreditCards;
