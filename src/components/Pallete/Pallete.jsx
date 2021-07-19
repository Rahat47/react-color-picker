import React from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";
import "./Pallete.css";

const Pallete = props => {
    const { colors } = props;
    return (
        <div className="Pallete">
            {/* Navbar Goes Here */}

            <div className="Pallete-colors">
                {/* Bunch of color boxes */}
                {colors.map((color, i) => (
                    <ColorBox
                        background={color.color}
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
