import clsx from "clsx";
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    Typography,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useState } from "react";
import { useStyles } from "../newPalleteForm/newPallete.styles.js";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DraggableColorList from "../DraggableColorList/DraggableColorList.jsx";
// import { arrayMove } from "react-sortable-hoc";
import arrayMove from "array-move";
import PalleteFormNav from "../PalleteFormNav/PalleteFormNav.jsx";

const NewPalleteForm = ({ savePallete, palletes }) => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("rgba(255, 255, 255, 1)");
    const [colors, setColors] = useState(palletes[0].colors);
    const [colorName, setColorName] = useState("");
    const isPalleteFull = colors.length >= 20;

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
    const createAndSavePallete = newPalleteName => {
        const nameSlug = newPalleteName.toLowerCase().replace(/\s/g, "-");
        const newPallete = {
            paletteName: newPalleteName,
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

    const getRandomColor = () => {
        //pick random color from existing palletes, and return it
        const randomPallete =
            palletes[Math.floor(Math.random() * palletes.length)];
        const randomColor =
            randomPallete.colors[
                Math.floor(Math.random() * randomPallete.colors.length)
            ];
        const newColor = {
            name: randomColor.name,
            color: randomColor.color,
        };

        return newColor;
    };

    const addRandomColor = () => {
        //Check if the new color name is unique. if it is unique, add it to the colors state else call the function again
        const newColor = getRandomColor();
        if (
            colors.every(
                color =>
                    color.name.toLowerCase() !== newColor.name.toLowerCase()
            )
        ) {
            setColors([...colors, newColor]);
        } else {
            addRandomColor();
        }
    };

    return (
        <div className={classes.root}>
            <PalleteFormNav
                open={open}
                createAndSavePallete={createAndSavePallete}
                handleDrawerOpen={handleDrawerOpen}
            />
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
                    <Button
                        onClick={addRandomColor}
                        variant="contained"
                        color="primary"
                        disabled={isPalleteFull}
                    >
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
                        disabled={isPalleteFull}
                    >
                        {isPalleteFull ? "Palette Full" : "Add Color"}
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
