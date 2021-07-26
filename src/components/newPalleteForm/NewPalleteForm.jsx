import clsx from "clsx";
import {
    AppBar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";
import { useState } from "react";
import { useStyles } from "../newPalleteForm/newPallete.styles.js";
import { ChromePicker } from "react-color";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox.jsx";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useEffect } from "react";

const NewPalleteForm = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("rgba(255, 255, 255, 1)");
    const [colors, setColors] = useState([]);
    const [colorName, setColorName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                color => color.name.toLowerCase() !== value.toLowerCase()
            );
        });

        ValidatorForm.addValidationRule("isColorUnique", value => {
            return colors.every(col => col.color !== color);
        });
    }, [color, colors]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const updateCurrentColor = color => {
        console.log(color);
        // const newColorHex = color.hex;
        const newColorRgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        // const newColorHSLA = `hsla(${color.hsl.h}, ${color.hsl.s}, ${color.hsl.l}, ${color.hsl.a})`;
        // const newColorHSL = `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
        setColor(newColorRgba);
    };

    const clearColors = () => {
        setColors([]);
    };

    const createColor = () => {
        const newColor = {
            name: colorName,
            color,
        };
        setColors([...colors, newColor]);
        setColorName("");
    };

    const handleChange = e => {
        setColorName(e.target.value);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h4">Design Your Pallete</Typography>

                <div>
                    <Button
                        onClick={clearColors}
                        variant="contained"
                        color="secondary"
                    >
                        Clear Pallete
                    </Button>
                    <Button variant="contained" color="primary">
                        Random Color
                    </Button>
                </div>

                <ChromePicker
                    color={color}
                    onChange={updateCurrentColor}
                    // onChangeComplete={newColor => {
                    //     // console.log(newColor);
                    // }}
                />

                <ValidatorForm onSubmit={createColor}>
                    <TextValidator
                        validators={[
                            "required",
                            "isColorNameUnique",
                            "isColorUnique",
                        ]}
                        errorMessages={[
                            "this field is required",
                            "this color name is not unique",
                            "this color is already used",
                        ]}
                        value={colorName}
                        onChange={handleChange}
                    />

                    <Button
                        style={{
                            backgroundColor: color,
                        }}
                        variant="contained"
                        type="submit"
                    >
                        Add Color
                    </Button>
                </ValidatorForm>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                {colors.map((color, i) => (
                    <DraggableColorBox
                        key={i}
                        color={color.color}
                        name={color.name}
                    />
                ))}
            </main>
        </div>
    );
};

export default NewPalleteForm;
