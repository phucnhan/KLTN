import React from "react";
import "./FisrtInfor.css"; // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class FisrtInfor extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="backText">Back</div>
                <div className="continueText">Continue</div>
                <img className="icon" src="https://via.placeholder.com/100x100" alt="icon"/>
                <div className="box maleBox"></div>
                <div className="box femaleBox"></div>
                <div className="maleText">Male</div>
                <div className="femaleText">Female</div>
                <div className="inputBox" style={{ top: 786 }}></div>
                <img className="icon" style={{ top: 786 }} src="https://via.placeholder.com/100x100" alt="icon"/>
                <div className="inputBox" style={{ top: 1016 }}></div>
                <div className="inputBox" style={{ top: 1246 }}></div>
                <img className="icon" style={{ top: 1016 }} src="https://via.placeholder.com/100x100" alt="icon"/>
                <img className="icon" style={{ top: 1246 }} src="https://via.placeholder.com/100x100" alt="icon"/>
                <div className="unitText" >Cm</div>
                <div className="unitText" >KG</div>
                <Footer />
            </div>
        );
    }
}

export default FisrtInfor;
