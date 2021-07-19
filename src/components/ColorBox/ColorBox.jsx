import React from "react";
import "./ColorBox.css";

const ColorBox = ({ background, name }) => {
    return (
        <div style={{ background }} className="Color-box">
            <span>{name}</span>
            <span>More</span>
        </div>
    );
};

export default ColorBox;
