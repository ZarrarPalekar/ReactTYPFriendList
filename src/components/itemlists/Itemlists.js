import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import "./Itemlists.css";

const Itemlists = (props) => {
  return (
    <ListGroup.Item className="allItems">
      {props.name}
      <span className="float-right">
        <Button variant="danger">X</Button>
      </span>
    </ListGroup.Item>
  );
};

export default Itemlists;
