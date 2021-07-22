import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem, Select } from "@material-ui/core";
import Slider from "rc-slider";
import { useState } from "react";

const Navbar = ({ level, setLevel, handleChange }) => {
    const [format, setFormat] = useState("hex");
    const handleChangeFormat = event => {
        setFormat(event.target.value);
        handleChange(event.target.value);
    };

    return (
        <header className="Navbar">
            <div className="logo">
                <a href="/">ColorPicker</a>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={level => setLevel(level)}
                    />
                </div>
            </div>

            <div className="select-container">
                <Select defaultValue={format} onChange={handleChangeFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">
                        RGBA - rgb(255,255,255,1.0)
                    </MenuItem>
                </Select>
            </div>
        </header>
    );
};

export default Navbar;
