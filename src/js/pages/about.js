import React from "react";
import Signature from "../components/signature";

class About extends React.Component {
  render() {
    return (
      <div className="screen-container">
        <div>
          <Signature topicName="About Me" />
        </div>
        <ul className="text-container">
          <li className="text-hls">
            A high school student always looking forward to learning and working
            in a team with various skills and ideas for the benefit of the
            organization and self-growth. Also looking forward to learning
            software engineering, data science, and computer science where he
            would be able to learn to utilize his skills.
          </li>
          <li className="text-hls">&nbsp;</li>
          <li className="text-hls">I am currently a...</li>
          <li className="text-nhls">• student in Cinco Ranch High School</li>
          <li className="text-nhls">• full stack Flutter mobile developer</li>
          <li className="text-nhls">• participant in various hackathons</li>
          <li className="text-nhls">
            • President of IDEA extracurricular club
          </li>
          <li className="text-hls">&nbsp;</li>
          <li className="text-hls">I am currently learning...</li>
          <li className="text-nhls">• machine learning</li>
          <li className="text-nhls">• web development</li>
          <li className="text-nhls">• computer vision</li>
          <li className="text-hls">&nbsp;</li>
          <li className="text-hls">I am currently working on...</li>
          <li className="text-nhls">• something</li>
        </ul>
      </div>
    );
  }
}

class Quote extends React.Component {
  render() {
    let quote = [
      "Gentlemen, a short view back to the past. Thirty years ago, Niki Lauda told us 'take a monkey, place him into the cockpit and he is able to drive the car.' Thirty years later, Sebastian told us 'I had to start my car like a computer, it's very complicated.' And Nico Rosberg said that during the race - I don't remember what race - he pressed the wrong button on the wheel. Question for you both: is Formula One driving today too complicated with twenty and more buttons on the wheel, are you too much under effort, under pressure? What are your wishes for the future concerning the technical programme during the race? Less buttons, more? Or less and more communication with your engineers?",
      "If you no longer go for a gap that exists, you're no longer a racing driver.",
      "A Mercedes-Benz must always look like a Mercedes-Benz",
      "Only Toyota, only myself, is driving used car.",
      "Bwoah",
    ];

    let size = ["quote-l", "quote-m", "quote-m", "quote-s", "quote-s"];

    let author = [
      "Walter Koster",
      "Ayrton Senna",
      "Bruno Sacco",
      "Akio Toyoda",
      "Kimi Räikkönen",
    ];

    let current = Math.floor(Math.random() * quote.length);

    return (
      <div>
        <div className="quote-container">
          <h1 className={size[current]}>{quote[current]}</h1>
        </div>
        <div>
          <h2 className="author">{author[current]}</h2>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/About");
    });
  }
}

export default About;
