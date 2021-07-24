import { useState } from "react";
import ColorBox from "../ColorBox/ColorBox.jsx";

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

        // removes the first item from the array
        shades.shift();

        return shades;
    }

    const colorBoxes = shades.map((shade, i) => (
        <ColorBox
            key={i}
            background={shade.hex}
            format={format}
            name={shade.name}
        />
    ));

    return (
        <div className="Pallete">
            <h1>Hello single color pallete</h1>
            <div className="Pallete-colors">{colorBoxes}</div>
        </div>
    );
};

export default SingleColorPallete;
