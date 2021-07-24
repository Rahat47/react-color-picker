import { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "../ColorBox/ColorBox.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import PalleteFooter from "../PalleteFooter/PalleteFooter.jsx";

const SingleColorPallete = ({ pallete, colorId }) => {
    const [format, setFormat] = useState("hex");
    const shades = gatherShades(pallete, colorId);
    // Gathers shade from pallete.colors array
    function gatherShades(pallete, colorToFilterBy) {
        //Return all shade of the given color
        let shades = [];
        let allColors = pallete.colors;

        for (const key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        // removes the first item from the array because we dont need it
        shades.shift();

        return shades;
    }

    const changeFormat = val => {
        setFormat(val);
    };

    const colorBoxes = shades.map((shade, i) => (
        <ColorBox
            key={i}
            background={shade[format]}
            format={format}
            name={shade.name}
        />
    ));

    return (
        <div className="Pallete single-color-pallete">
            <Navbar handleChange={changeFormat} />
            <div className="Pallete-colors">
                {colorBoxes}

                <div className="goBack Color-box">
                    <Link className="back-button" to={`/pallete/${pallete.id}`}>
                        Go Back
                    </Link>
                </div>
            </div>

            <PalleteFooter pallete={pallete} />
        </div>
    );
};

export default SingleColorPallete;
