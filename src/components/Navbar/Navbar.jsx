//Slider Imports
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
//React
import { useState } from "react";
import { Link } from "react-router-dom";
//MUI Imports
import { IconButton, MenuItem, Select, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useStyles } from "./Navbar.styles.js";

const Navbar = ({ level, setLevel, handleChange }) => {
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleChangeFormat = event => {
        setFormat(event.target.value);
        handleChange(event.target.value);
        setOpen(true);
    };

    return (
        <header className={classes.root}>
            <div className={classes.logo}>
                <Link to="/">ColorPicker</Link>
            </div>
            {level && (
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={level => setLevel(level)}
                        />
                    </div>
                </div>
            )}

            <div className={classes.selectContainer}>
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
