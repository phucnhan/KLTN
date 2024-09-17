import React from "react";
import "./Footer.css";
class Footer extends React.Component {
    render() {
        return (
            <div>
            <div style={{ width: 1920, height: 175, left: 0, top: 1825, position: 'absolute', background: 'black' }}>
            <div style={{ left: 920, top: 20, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word' }}>Resources<br /><br />Database<br /><br />Exercises Calculator</div>
            <div style={{ width: 128, left: 1217, top: 18, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word' }}>Country<br /><br />United States<br /><br />Viet Nam<br /><br />🌎 Others</div>
            <div style={{ left: 1476, top: 17, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word' }}>Company<br /><br />Contract<br /><br />Blog</div>
            <div style={{ left: 1684, top: 16, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word' }}>Follow Us</div>
            <img style={{ width: 162, height: 175, left: 0, top: 0, position: 'absolute' }} src="image/logo.png" />
          </div>
            </div>
        );
    }
}

export default Footer;
