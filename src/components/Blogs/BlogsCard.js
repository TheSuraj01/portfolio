import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFileText } from "react-icons/bs";

function ArticleCards(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" className="card-image" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="underline">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.readLink} target="_blank">
          <BsFileText /> &nbsp;
          {"Read More"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCards;
