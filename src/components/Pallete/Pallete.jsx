import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";
import Slider from "rc-slider";
import "./Pallete.css";
import "rc-slider/assets/index.css";

const Pallete = ({ pallete }) => {
    const [level, setLevel] = useState(500);

    return (
        <div className="Pallete">
            {/* Navbar Goes Here */}
            <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={level => setLevel(level)}
            />

            <div className="Pallete-colors">
                {/* Bunch of color boxes */}
                {pallete.colors[level].map((color, i) => (
                    <ColorBox
                        background={color.hex}
                        name={color.name}
                        key={i}
                    />
                ))}
            </div>
            {/* Footer */}
        </div>
    );
};

export default Pallete;
