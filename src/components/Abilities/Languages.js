import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "C", xp: 2 },
      { id: 4, value: "JavaScript", xp: 1.1 },
      { id: 2, value: "Css", xp: 1 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 6, value: "C#", xp: 0.4 },
    ],
    frameworks: [
      {id: 5, value: "SFML", xp: 1.8},
      { id: 1, value: "Bootstrap", xp: 1.3 },
      { id: 2, value: "React", xp: 0.8 },
      { id: 3, value: "Flutter", xp: 0.6 },
      { id: 4, value: "Sass", xp: 0.4 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
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
