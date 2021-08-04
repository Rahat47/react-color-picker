import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
    AppBar,
    Button,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Palette } from "@material-ui/icons";
import { useStyles } from "./PalleteFormNav.styles.js";
import PalleteMetaForm from "../palleteMetaForm/PalleteMetaForm.jsx";

const PalleteFormNav = ({
    open,
    createAndSavePallete,
    handleDrawerOpen,
    palletes,
}) => {
    const classes = useStyles();
    const [formShowing, setFormShowing] = useState(false);

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
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <Palette />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Create a Pallete
                    </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Go Back
                        </Button>
                    </Link>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={() => setFormShowing(true)}
                    >
                        Save Pallete
                    </Button>
                </div>
            </AppBar>
            {formShowing && (
                <PalleteMetaForm
                    createAndSavePallete={createAndSavePallete}
                    palletes={palletes}
                    setFormShowing={setFormShowing}
                />
            )}
        </div>
    );
};

export default PalleteFormNav;
