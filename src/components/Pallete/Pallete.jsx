import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Pallete.css";

const Pallete = ({ pallete }) => {
    const [level, setLevel] = useState(500);

    return (
        <div className="Pallete">
            {/* Navbar Goes Here */}
            <div className="slider">
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={level => setLevel(level)}
                />
            </div>

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
