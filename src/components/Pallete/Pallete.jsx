import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";
import "./Pallete.css";
import Navbar from "../Navbar/Navbar.jsx";

const Pallete = ({ pallete }) => {
    const [level, setLevel] = useState(500);

    return (
        <div className="Pallete">
            {/* Navbar Goes Here */}
            <Navbar level={level} setLevel={setLevel} />

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
