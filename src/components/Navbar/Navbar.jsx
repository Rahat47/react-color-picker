import "rc-slider/assets/index.css";
import "./Navbar.css";
import { IconButton, MenuItem, Select, Snackbar } from "@material-ui/core";
import Slider from "rc-slider";
import { useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = ({ level, setLevel, handleChange }) => {
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    const handleChangeFormat = event => {
        setFormat(event.target.value);
        handleChange(event.target.value);
        setOpen(true);
    };

    return (
        <header className="Navbar">
            <div className="logo">
                <Link to="/">ColorPicker</Link>
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
                <Select
                    defaultValue={format}
                    value={format}
                    onChange={handleChangeFormat}
                >
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">
                        RGBA - rgba(255,255,255,1.0)
                    </MenuItem>
                </Select>
            </div>

            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={3000}
                message={
                    <span id="message-id">
                        Format Changed to {format.toUpperCase()}
                    </span>
                }
                ContentProps={{
                    "aria-describedby": "message-id",
                }}
                onClose={() => setOpen(false)}
                action={[
                    <IconButton
                        onClick={() => setOpen(false)}
                        color="inherit"
                        key="close"
                        aria-label="Close the snackbar"
                    >
                        <Close />
                    </IconButton>,
                ]}
            />
        </header>
    );
};

export default Navbar;
