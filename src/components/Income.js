// Example in Income.js
import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { Container, Row, Col, Card } from "react-bootstrap";

function Income() {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/income")
      .then((response) => setIncome(response.data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="my-4">Income</h2>
          <Row>
            {income.map((item) => (
              <Col md={4} key={item._id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{item.type}</Card.Title>
                    <Card.Text>
                      Amount: ${item.amount}
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

export default Income;
