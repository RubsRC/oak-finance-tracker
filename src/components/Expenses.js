// Expenses.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("/api/expenses").then((response) => setExpenses(response.data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="my-4">Expenses</h2>
          <Row>
            {expenses.map((item) => (
              <Col md={4} key={item._id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{item.category}</Card.Title>
                    <Card.Text>
                      Amount: ${item.amount}
                      <br />
                      Description: {item.description}
                      <br />
                      Date: {new Date(item.date).toLocaleDateString()}
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

export default Expenses;
