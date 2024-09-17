import React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div style={{width: 1920, height: 175, left: 0, top: 1, position: 'absolute', background: 'black'}}>
                <div style={{width: 130, height: 40, left: 1790, top: 87, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Login</div>
                <div style={{width: 130, height: 40, left: 1626, top: 87, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Contact</div>
                <div style={{width: 130, height: 40, left: 1462, top: 87, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>About Us</div>
                <img style={{width: 162, height: 175, left: 0, top: 0, position: 'absolute'}} src="image/logo.png"/>
                </div>
            </div>
        );
    }
}

export default Navbar;
