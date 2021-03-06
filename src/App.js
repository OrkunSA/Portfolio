import React from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };

    ReactGA.initialize("UA-192521881-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  resumeData() {
    const load = document.getElementById("siteLoading");
    $.ajax({
      url: "/data.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        setTimeout(() => {
          load.outerHTML = "";
        }, 500);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.resumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Work data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
