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
import { useHistory } from "react-router-dom";
import DraggableColorList from "../DraggableColorList/DraggableColorList.jsx";
import arrayMove from "array-move";
import PalleteFormNav from "../PalleteFormNav/PalleteFormNav.jsx";
import ColorPickerForm from "../ColorPickerForm/ColorPickerForm.jsx";

const NewPalleteForm = ({ savePallete, palletes }) => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [colors, setColors] = useState(palletes[0].colors);
    const isPalleteFull = colors.length >= 20;

    //? utils for the drawer to open and close
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
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
                palletes={palletes}
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

                <ColorPickerForm
                    isPalleteFull={isPalleteFull}
                    colors={colors}
                    setColors={setColors}
                />
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
