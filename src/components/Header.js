import React, { Component } from "react";
import Typist from "react-typist";

class Header extends Component {
  state = {
    click: false,
  };

  closeMobileMenu = () => {
    this.setState({
      click: !this.state.click,
    });
  };

  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          width="100%"
          height="100%"
          playsinline=""
        >
          <source src="/videos/mixkit-view-of-the-horizon-in-the-sea-while-a-sailboat-4477.mp4" />
        </video>
        <div className="row banner">
          <div className="banner-text">
            <Typist>
              <h1 className="responsive-headline">
                <span>I'm Orkun Saglam.</span>
              </h1>
              <Typist.Delay ms={500} />
              <h3>
                <Typist.Backspace count={8} delay={200} />
                I'm an <span>Austin</span> based{" "}
                <span>Full Stack Developer.</span>
              </h3>
            </Typist>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
