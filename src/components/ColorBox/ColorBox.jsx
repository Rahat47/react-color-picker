import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background, name }) => {
    return (
        <div style={{ background }} className="Color-box">
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-button">Copy</button>
            </div>
            <span className="see-more">More</span>
        </div>
    );
};

export default ColorBox;
