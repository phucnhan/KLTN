import "./FisrtInfor.css"; // Import CSS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useState } from 'react';


const Form = () => {
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      gender,
      dob,
      height,
      weight,
    };
    console.log(formData);
  };

  return (
    <div className="firstinfor-container">
         <Navbar/>
    
    <div className="form-container">
       
      <button className="back-button">&lt; Back</button>

      <form onSubmit={handleSubmit}>
        {/* Gender Selection */}
        <div className="form-group">
          <label>Gender</label>
          <div className="gender-container">
            <button
              type="button"
              className={gender === 'male' ? 'selected' : ''}
              onClick={() => setGender('male')}
            >
              Male
            </button>
            <button
              type="button"
              className={gender === 'female' ? 'selected' : ''}
              onClick={() => setGender('female')}
            >
              Female
            </button>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="form-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Cm"
          />
        </div>

        {/* Weight */}
        <div className="form-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="KG"
          />
        </div>

        <button type="submit" className="continue-button">
          Continue &gt;
        </button>
      </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Form;
