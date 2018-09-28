import React, { Component } from "react";
import "./Applist.css";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import axios from "axios";
import {Link} from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";
// import image from "./img/feedback.png";

class Example extends Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios
      .get(`https://stormy-river-10023.herokuapp.com/employeelist`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }
  render() {
    return (
      <div className="Applist" style={{ backgroundColor: "black" }}>
        <Container>
          <Zoom>
            <Row>
              {this.state.persons.map(person => (
                <Col sm="4">
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: "#ffdd57",
                      borderColor: "#333",
                      height: "300px",
                      width: "300px",
                      top: "37px"
                    }}
                  >
                    <Zoom>
                      <img className="profile-image" src={person.image} />
                    </Zoom>
                    <Roll />
                    <CardText
                      style={{
                        color: "#01295c",
                        borderRadius: "10px",
                        textAlign: "center",
                        fontWeight: "bold"
                      }}
                    >
                      {person.username}
                    </CardText>
                    <CardTitle
                      style={{
                        textAlign: "center"
                      }}
                    >
                      {person.designation}
                    </CardTitle>
                   
                    <Button  calssName= "button-main" style={{
                        color: "#01295c " , }}size="sm"><Link to='/feedback1'>Feedme Back </Link></Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Zoom>
        </Container>
      </div>
    );
  }
}
export default Example;
