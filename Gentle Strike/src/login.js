import React, { Component } from "react";
import { Container } from "bloomer/lib/layout/Container";
import "./login.css";

class Applist extends Component {
  state = {};
  render() {
    return (
      <div
        className="Logincss"
        style={{
          // backgroundColor: "#ffdd57",
          borderColor: "#333",
          height: "300px",
          width: "300px",
          top: "37px"
        }}
      >
        <Container>
          <nav class="navbar is-warning is-fixed-top">
            <div class="navbar-brand">
              <a class="navbar-item" href="">
                <img width="130" height="90" />
              </a>
            </div>

            <div class="navbar-menu">
              <div class="navbar-start">
                <a
                  class="navbar-item is-uppercase has-text-weight-bold "
                  href=""
                />
              </div>
            </div>
          </nav>
          <div class="container">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                value="username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check" />
              </span>
            </div>
            <p class="help is-danger">This username is required</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="email"
                placeholder="Email input"
                value="ex:email@gmail.com"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p class="help is-danger">email is required</p>
          </div>
          <a
            style={{ margin: "12px 0px 0px 0px" }}
            class="button is-danger is-rounded"
          >
            <span class="icon">
              <i class="fab fa-google" />
            </span>
            <span>Login with Gmail</span>
          </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default Applist;
