import React from "react";
import "./Goals.css"; // External CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Goals extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="progressBar bar1" />
                <div className="progressBar bar2" />
                <div className="progressBar bar3" />
                <div className="progressBar bar4" />
                <div className="progressBar bar5" />
                <div className="goalBox loseFat"></div>
                <div className="goalText loseFatText">Lose Fat</div>
                <div className="descriptionText loseFatDescription">Effective weight loss, shine with confidence.</div>
                <img className="icon" src="https://via.placeholder.com/100x100" alt="icon"/>
                
                <div className="goalBox maintainWeight"></div>
                <div className="goalText maintainWeightText">Maintain weight</div>
                <div className="descriptionText maintainWeightDescription">Firm body, clear lines.</div>
                <img className="icon" src="https://via.placeholder.com/100x100" alt="icon"/>
                
                <div className="goalBox muscleGain"></div>
                <div className="goalText muscleGainText">Muscle gain</div>
                <div className="descriptionText muscleGainDescription">Keep slim, full of energy.</div>
                <img className="icon" src="https://via.placeholder.com/100x100" alt="icon"/>
                
                <div className="backText">Back</div>
                <Footer />
            </div>
        );
    }
}

export default Goals;
