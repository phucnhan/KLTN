//Buoc 4
import React from "react";
import "./Food.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


class Food extends React.Component {
    render() {
        return (
         
            <div style={{width: 1920, height: 3000, position: 'relative', background: 'white'}}>
            <div style={{width: 1920, height: 175, left: 0, top: 0, position: 'absolute', background: 'black'}}>
              <div style={{width: 130, height: 40, left: 1790, top: 88, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Login</div>
              <div style={{width: 130, height: 40, left: 1626, top: 88, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Contact</div>
              <div style={{width: 130, height: 40, left: 1462, top: 88, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>About Us</div>
              <img style={{width: 162, height: 175, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/162x175" />
            </div>
            <div style={{width: 175, height: 20, left: 328, top: 339, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{width: 175, height: 20, left: 600, top: 339, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{width: 175, height: 20, left: 872, top: 339, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{width: 175, height: 20, left: 1144, top: 339, position: 'absolute', background: '#99D7A6'}}></div>
            <div style={{width: 175, height: 20, left: 1416, top: 339, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{left: 131, top: 272, position: 'absolute', color: 'black', fontSize: 40, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}> Back</div>
            <div style={{width: 500, height: 100, left: 710, top: 491, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Your eating preferences</div>
            <div style={{width: 189, height: 50, left: 709, top: 591, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Proteins</div>
            <div style={{width: 255, left: 709, top: 930, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Carbohydrates</div>
            <div style={{width: 255, left: 709, top: 2020, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Fruits</div>
            <div style={{width: 255, left: 709, top: 1316, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Fats</div>
            <div style={{width: 327, left: 710, top: 1668, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'Zen Antique', fontWeight: '400', wordWrap: 'break-word'}}>Dairy and Beverages</div>
            <div style={{left: 1238, top: 601, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Select all</div>
            <div style={{width: 59, left: 1238, top: 950, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Select all</div>
            <div style={{width: 59, left: 1238, top: 2040, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Select all</div>
            <div style={{width: 59, left: 1238, top: 1336, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Select all</div>
            <div style={{width: 59, left: 1239, top: 1688, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Select all</div>
            <div style={{width: 1920, height: 175, left: 0, top: 2825, position: 'absolute', background: 'black'}}>
              <div style={{left: 215, top: 21, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Resources</div>
              <div style={{left: 215, top: 47, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Database</div>
              <div style={{left: 215, top: 73, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Exercises Calculator</div>
              <div style={{left: 439, top: 21, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Country</div>
              <div style={{left: 439, top: 47, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>🇺🇸 United States</div>
              <div style={{left: 439, top: 73, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>🇻🇳 Viet Nam</div>
              <div style={{left: 439, top: 99, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>🌎 Others</div>
              <div style={{left: 625, top: 21, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Company</div>
              <div style={{left: 625, top: 47, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Contact</div>
              <div style={{left: 625, top: 73, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Blog</div>
              <div style={{left: 821, top: 21, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Follow Us</div>
              <img style={{width: 162, height: 175, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/162x175" />
              <div style={{width: 1920, height: 175, left: 0, top: 0, position: 'absolute', background: 'black'}}>
                <div style={{left: 920, top: 20, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Resources<br/><br/>Database<br/><br/>Exercises Calculator</div>
                <div style={{width: 128, left: 1217, top: 18, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Country<br/><br/>🇺🇸 United States<br/><br/>🇻🇳 Viet Nam<br/><br/>🌎 Others</div>
                <div style={{left: 1476, top: 17, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Company<br/><br/>Contract<br/><br/>Blog</div>
                <div style={{left: 1684, top: 16, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '900', wordWrap: 'break-word'}}>Follow Us</div>
                <img style={{width: 162, height: 175, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/162x175" />
              </div>
            </div>
            <div style={{width: 92, height: 40, left: 753, top: 679, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 1028, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 2118, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 1414, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 754, top: 1766, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 743, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 1092, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 2182, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 1478, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 102, height: 40, left: 752, top: 1830, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 743, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 1092, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 2182, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 1478, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 1830, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 743, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 1092, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 2182, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 1478, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1002, top: 1830, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 743, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 1092, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 2182, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1122, top: 1156, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 1124, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 1124, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 1124, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 807, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 753, top: 1156, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 753, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 753, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 753, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 753, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 93, height: 40, left: 753, top: 2374, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 807, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 1156, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 143, height: 40, left: 1001, top: 807, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 85, height: 40, left: 1001, top: 1156, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 85, height: 40, left: 1003, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 85, height: 40, left: 1003, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 85, height: 40, left: 1003, top: 2246, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 85, height: 40, left: 1003, top: 2310, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 679, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 1028, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 2118, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 877, top: 1414, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 878, top: 1766, position: 'absolute', background: '#FBB605', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 679, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 1028, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 2118, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1001, top: 1414, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1002, top: 1766, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 679, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 1028, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 2118, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1125, top: 1414, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{width: 92, height: 40, left: 1126, top: 1766, position: 'absolute', background: '#D9D9D9', borderRadius: 8}} />
            <div style={{left: 15.50, top: 5.50, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chicken</div>
            <div style={{left: 773, top: 689, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chicken</div>
            <div style={{width: 51, left: 773, top: 1038, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Rice</div>
            <div style={{width: 51, left: 773, top: 2128, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Banana</div>
            <div style={{width: 59, left: 772, top: 1424, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Avocado</div>
            <div style={{width: 59, left: 773, top: 1776, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Milk</div>
            <div style={{left: 907, top: 689, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Beef</div>
            <div style={{width: 50, left: 898, top: 1038, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Potato</div>
            <div style={{width: 85, left: 880, top: 2128, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Strawnberris</div>
            <div style={{width: 66, left: 891, top: 1424, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Peanuts</div>
            <div style={{width: 66, left: 892, top: 1776, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Yogurt</div>
            <div style={{left: 1037, top: 689, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Fish</div>
            <div style={{width: 88, left: 1003, top: 1038, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Sweet Potato</div>
            <div style={{width: 88, left: 1003, top: 2128, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Apple</div>
            <div style={{width: 88, left: 1003, top: 1424, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Almonds</div>
            <div style={{width: 88, left: 1004, top: 1776, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>White Cheese</div>
            <div style={{left: 1035, top: 753, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Ham</div>
            <div style={{width: 90, left: 1001, top: 1102, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Green Beans</div>
            <div style={{width: 90, left: 1001, top: 2192, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Tangerine</div>
            <div style={{width: 90, left: 1001, top: 1488, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chocolate</div>
            <div style={{width: 90, left: 1002, top: 1840, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Coconut Milk</div>
            <div style={{left: 1156, top: 753, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Tofu</div>
            <div style={{width: 54, left: 1144, top: 1102, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Pasta</div>
            <div style={{width: 54, left: 1144, top: 2192, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Orange</div>
            <div style={{width: 54, left: 1141, top: 1166, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Cereal</div>
            <div style={{width: 54, left: 1144, top: 2256, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Peach</div>
            <div style={{left: 907, top: 753, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Pork</div>
            <div style={{width: 57, left: 894, top: 1102, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Peas</div>
            <div style={{width: 57, left: 894, top: 2192, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Papaya</div>
            <div style={{width: 57, left: 894, top: 1488, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Chia</div>
            <div style={{width: 80, left: 884, top: 1840, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Almond Milk</div>
            <div style={{left: 772, top: 817, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Tempeh</div>
            <div style={{width: 52, left: 772, top: 1166, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Corn</div>
            <div style={{width: 52, left: 774, top: 2256, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Kiwi</div>
            <div style={{width: 78, left: 767, top: 2320, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Grenadia</div>
            <div style={{width: 97, left: 753, top: 2384, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Dragon Fruit</div>
            <div style={{width: 59, left: 1141, top: 2320, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Pear</div>
            <div style={{left: 902, top: 817, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Seitan</div>
            <div style={{width: 41, left: 902, top: 1166, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Oats</div>
            <div style={{width: 53, left: 897, top: 2256, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Mango</div>
            <div style={{width: 62, left: 894, top: 2320, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Grapes</div>
            <div style={{left: 1024, top: 817, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Protein Powder</div>
            <div style={{width: 49, left: 1019, top: 1166, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Breads</div>
            <div style={{width: 85, left: 1002, top: 2256, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Watermelon</div>
            <div style={{width: 92, left: 999, top: 2320, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Cantaloupe</div>
            <div style={{left: 773, top: 753, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Turkey</div>
            <div style={{width: 67, left: 765, top: 1102, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Beans</div>
            <div style={{width: 67, left: 765, top: 2192, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Pineapple</div>
            <div style={{width: 67, left: 765, top: 1488, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Olives</div>
            <div style={{width: 93, left: 756, top: 1840, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Yellow Cheese</div>
            <div style={{left: 1158, top: 689, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Egg</div>
            <div style={{width: 70, left: 1136, top: 1038, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Cassava</div>
            <div style={{width: 82, left: 1130, top: 2128, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Blueberries</div>
            <div style={{width: 70, left: 1136, top: 1424, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Walnuts</div>
            <div style={{width: 70, left: 1137, top: 1776, position: 'absolute', textAlign: 'center', color: '#1D1B20', fontSize: 14, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word'}}>Soy Milk</div>
          </div>
          
        );
    }
}

export default Food;



