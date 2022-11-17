import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "C", xp: 2 },
      { id: 4, value: "TypeScript", xp: 1.5 },
      { id: 2, value: "CSS", xp: 1.4 },
      { id: 3, value: "HTML", xp: 1.3 },
      { id: 6, value: "C++", xp: 1.2 },
      { id: 7, value: "Python", xp: 1 },
    ],
    frameworks: [
      {id: 5, value: "SFML", xp: 1.8},
      { id: 2, value: "React", xp: 1.6 },
      { id: 4, value: "Sass", xp: 1.4 },
      { id: 1, value: "Node", xp: 1.3 },
      {id: 5, value: "Bootstrap", xp: 0.9},
      { id: 3, value: "Flutter", xp: 0.6 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"

        />
      </div>
    );
  }
}

export default Languages;
