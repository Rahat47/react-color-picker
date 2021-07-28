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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DraggableColorList from "../DraggableColorList/DraggableColorList.jsx";
import { arrayMove } from "react-sortable-hoc";

const NewPalleteForm = ({ savePallete, palletes }) => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("rgba(255, 255, 255, 1)");
    const [colors, setColors] = useState([]);
    const [colorName, setColorName] = useState("");
    const [newPalleteName, setNewPalleteName] = useState("");

    //?Adds custom validator to the form
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                color => color.name.toLowerCase() !== value.toLowerCase()
            );
        });

        ValidatorForm.addValidationRule("isColorUnique", value => {
            return colors.every(col => col.color !== color);
        });

        ValidatorForm.addValidationRule("isPalleteNameUnique", value => {
            return palletes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }, [color, colors, palletes]);

    //? utils for the drawer to open and close
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //? ulit for the color picker
    const updateCurrentColor = color => {
        console.log(color);
        // const newColorHex = color.hex;
        const newColorRgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        // const newColorHSLA = `hsla(${color.hsl.h}, ${color.hsl.s}, ${color.hsl.l}, ${color.hsl.a})`;
        // const newColorHSL = `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
        setColor(newColorRgba);
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

    //well the name says it all
    const createAndSavePallete = () => {
        const palleteName = newPalleteName;
        const nameSlug = palleteName.toLowerCase().replace(/\s/g, "-");
        const newPallete = {
            paletteName: palleteName,
            id: nameSlug,
            colors,
        };
        savePallete(newPallete);
        setOpen(false);
        history.push("/");
    };

    //Deletes a color from the pallete
    const deleteColor = colorName => {
        const newColors = colors.filter(col => col.name !== colorName);
        setColors(newColors);
    };

    //On sort end method for the react sortable HOC component
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setColors(arrayMove(colors, oldIndex, newIndex));
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="default"
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
                        Create a new color palette
                    </Typography>

                    <ValidatorForm onSubmit={createAndSavePallete}>
                        <TextValidator
                            label="Pallete Name"
                            value={newPalleteName}
                            validators={["required", "isPalleteNameUnique"]}
                            errorMessages={[
                                "Please enter a Pallete Name",
                                "The Pallete name is already used",
                            ]}
                            onChange={e => setNewPalleteName(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save Pallete
                        </Button>
                    </ValidatorForm>
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
                        onClick={() => setColors([])}
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

                <DraggableColorList
                    onSortEnd={onSortEnd}
                    axis="xy"
                    colors={colors}
                    deleteColor={deleteColor}
                />
            </main>
        </div>
    );
};

export default NewPalleteForm;
