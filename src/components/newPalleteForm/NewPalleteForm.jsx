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

const NewPalleteForm = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState("rgba(255, 255, 255, 1)");
    const [colors, setColors] = useState(["purple", "green"]);

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

    const createColor = () => {
        setColors([...colors, color]);
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
                    <Button variant="contained" color="secondary">
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

                <Button
                    style={{
                        backgroundColor: color,
                    }}
                    variant="contained"
                    onClick={createColor}
                >
                    Add Color
                </Button>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                {colors.map((color, i) => (
                    <DraggableColorBox key={i} color={color} />
                ))}
            </main>
        </div>
    );
};

export default NewPalleteForm;
