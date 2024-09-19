//Buoc 5
import React from "react";
import "./NextCreate.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

class NextCreate extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="box1" />
                <div className="box2" />
                <div className="text1">Firm body, clear lines.</div>
                <div className="text2">Maintain weight</div>
                <div className="box3" />
                <div className="text3">Muscle gain</div>
                <div className="text4">Effective weight loss, shine with confidence.</div>
                <div className="text5">Lose Fat</div>
                <div className="text6">Keep slim, full of energy</div>
                <img className="image1" src="https://via.placeholder.com/100x100" alt="placeholder" />
                <img className="image2" src="https://via.placeholder.com/100x100" alt="placeholder" />
                <img className="image3" src="https://via.placeholder.com/100x100" alt="placeholder" />
                <div className="create-account">Create your account to ...</div>
                <div className="meal-plan">Get a meal plan</div>
                <div className="calories-info">Find out your calories and macronutrients for free</div>
                <div className="workout-plan">Get a workout plan</div>
                <div className="back">Back</div>
                <div className="create-button">
                    <div>Create account</div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NextCreate;
