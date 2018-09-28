import React, { Component } from "react";
import logo_ from "./AFB-trail.gif";
import image_ from "./final-cap.gif";
import "./App.css";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Applist from "./Applist";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <nav class="navbar is-warning is-fixed-top">
          <div class="navbar-brand">
            <a class="navbar-item" href="">
              <img width="130" height="90" />
            </a>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div class="navbar-menu">
            <div class="navbar-start">
              <a
                class="navbar-item is-uppercase has-text-weight-bold "
                href=""
              />
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a
                      style={{ margin: "12px 0px 0px 0px" }}
                      class="button is-light is-rounded"
                    >
                      <span class="icon">
                        <i class="fas fa-user" />
                      </span>
                      <span>
                        Login <span> 😀 </span>
                      </span>
                    </a>
                  </p>
                  <p class="control">
                    <a
                      style={{ margin: "12px 0px 0px 0px" }}
                      class="button is-light is-rounded "
                      href=""
                    >
                      <span class="icon">
                        <i class="fas fa-users" />
                      </span>
                      <span>Register 🤓 </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Content style={{ padding: "20px 20px 0px 30px" }}>
          <div
            style={{
              background: "hsl(48, 100%, 67%)",
              padding: 14,
              minHeight: 300,
              borderRadius: 12
            }}
          >
            <img src={image_} />
          </div>
        </Content>

        <section class="section">
          <div class="container">
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-white">
                      <p class="title">Anonymous Feed Back!</p>
                      <p class="subtitle">
                        YO! Punch up your favourite button to give feedback to
                        your co-workers!
                      </p>
                    </article>
                    <article class="tile is-child notification is-primary">
                      <p class="title">Celebs</p>
                      <p class="subtitle">Score your Feedback</p>
                      <a class="button is-info">Go! Feedback</a>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-primary">
                      <p class="title" />
                      <p class="subtitle">
                        Its Absolutely fine to KICK a button!
                      </p>
                      <figure class="image is-4by3">
                        <img src="https://media.giphy.com/media/l0HlG7zxji53RUtpe/giphy.gif" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-primary">
                    <p class="title">Wild WIlD Pegasus</p>
                    <p class="subtitle">
                      <a class="button is-info">Go! Feedback</a>
                    </p>
                    <div class="content">
                      <a class="button is-info">Info</a>
                    </div>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-white">
                  <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>

                    <div class="content" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Pegasus</strong> by <a href=""> SOAL </a>. The source code
              is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed{" "}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </footer>

        <Applist />
      </div>
    );
  }
}

export default App;
