import React from "react";
import "./Fisrt_infor.css"; // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class Fisrt_infor extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="progressBar1" />
                <div className="progressBar2" />
                <div className="progressBar3" />
                <div className="progressBar4" />
                <div className="progressBar5" />
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
                <div className="unitText" style={{ top: 1051 }}>Cm</div>
                <div className="unitText" style={{ top: 1281 }}>KG</div>
                <Footer />
            </div>
        );
    }
}

export default Fisrt_infor;
