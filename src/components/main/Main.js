import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import "./Main.css";
import Itemlists from "../itemlists/Itemlists";

const Main = () => {
  return (
    <div className="container">
      <InputGroup className="mb-5 mt-5 ">
        <FormControl
          placeholder="Add A Friend..."
          aria-label="Add A Friend..."
          aria-describedby="basic-addon2"
          className="maininput"
        />
        <InputGroup.Append>
          <Button className="maininputbutton" variant="success">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup>
        <Itemlists name="Indresh" />
        <Itemlists name="Devang" />
        <Itemlists name="Manan" />
        <Itemlists name="Pratik" />
        <Itemlists name="Dhruv" />
      </ListGroup>
    </div>
  );
};

export default Main;
