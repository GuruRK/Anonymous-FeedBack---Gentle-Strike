import React, { Component } from "react";
import image1 from "./boysmile.jpg";
import image2 from "./rock-p.png";
import image3 from "./image.png";
import Shock from "./boyschok.jpg";
import { Button, Layout, Row, Col } from "antd";
import "./feedback1.css";
import posed from "react-pose";
import HoverImage from "react-hover-image";
import $ from "jquery";
import { Container } from "bloomer/lib/layout/Container";
import { Link } from "react-router-dom";

const { Content } = Layout;

const Box = posed.div({
  draggable: true
});

class Feedback1 extends Component {
  state = {
    count: 0
  };

  handleMouseHover = () => {
    this.setState({
      count: this.state.count + 1
    });

    console.log(this.state.count);
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#ffdd57",
          minHeight: "700px"
        }}
      >
        <Content style={{ padding: "20px 20px 0px 30px" }}>
          <div>
            <div>
              <Row>
                <Col span={12}>
                  <div onMouseEnter={this.handleMouseHover}>
                    <HoverImage src={image1} hoverSrc={Shock} />
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <Link to="/">
                      <a
                        style={{ margin: "0px 0px 0px 240px" }}
                        class="button is-dark is-rounded "
                        href=""
                      >
                        <span class="icon">
                          <i class="fas fa-check" />
                        </span>
                        <span>Submit 🤓 </span>
                      </a>{" "}
                    </Link>

                    <h2>score <div style = {{ color : "red"}}> {this.state.count} </div> </h2>
                  </div>

                  <Box>
                    <img
                      className="test1"
                      src={image2}
                      style={{
                        // background: "hsl(48, 100%, 67%)",
                        marginTop: 60,
                        padding: 14,
                        minHeight: 100,
                        maxHeight: 50,
                        borderRadius: 120
                      }}
                    />
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <img
                      className="test"
                      src={image3}
                      style={{
                        // background: "hsl(48, 100%, 67%)",
                        padding: 14,
                        marginLeft: 0,
                        marginRight: 10,
                        maxHeight: 100,
                        borderRadius: 12
                      }}
                    />
                  </Box>
                </Col>
              </Row>
              <Col />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Feedback1;
