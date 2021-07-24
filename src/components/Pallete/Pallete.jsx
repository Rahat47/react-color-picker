import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";
import "./Pallete.css";
import Navbar from "../Navbar/Navbar.jsx";
import PalleteFooter from "../PalleteFooter/PalleteFooter.jsx";

const Pallete = ({ pallete }) => {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");

    const changeFormat = val => {
        setFormat(val);
    };

    return (
        <div className="Pallete">
            <Navbar
                level={level}
                setLevel={setLevel}
                handleChange={changeFormat}
            />

            <div className="Pallete-colors">
                {/* Bunch of color boxes */}
                {pallete.colors[level].map(color => (
                    <ColorBox
                        palleteId={pallete.id}
                        colorId={color.id}
                        background={color[format]}
                        name={color.name}
                        key={color.id}
                    />
                ))}
            </div>

            <PalleteFooter pallete={pallete} />
        </div>
    );
};

export default Pallete;
