//Buoc 3
import React from "react";
import "./ActivityLevel.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class ActivityLevel extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
                <div className="bar4" />
                <div className="bar5" />
                <div className="box" style={{ top: 726 }}></div>
                <div className="box" style={{ top: 906 }}></div>
                <div className="box" style={{ top: 1446 }}></div>
                <div className="box" style={{ top: 1266 }}></div>
                <div className="box" style={{ top: 1086 }}></div>
                <div className="title">What is your physical activity level?</div>
                <div className="activity" style={{ top: 726 }}>Sedentary</div>
                <div className="activity" style={{ top: 906 }}>Light</div>
                <div className="activity" style={{ top: 1086 }}>Moderate</div>
                <div className="activity" style={{ top: 1266 }}>High</div>
                <div className="activity" style={{ top: 1446 }}>Athlete</div>
                <div className="description" style={{ top: 786 }}>No or little exercise</div>
                <div className="description" style={{ top: 966 }}>Exercise 2-3 days per week</div>
                <div className="description" style={{ top: 1146 }}>Exercise 4-5 days per week</div>
                <div className="description" style={{ top: 1506 }}>Intense exercise 6-7 days per week</div>
                <div className="description" style={{ top: 1326 }}>Exercise 6-7 days per week</div>
                <Footer />
            </div>
        );
    }
}

export default ActivityLevel;
