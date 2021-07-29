import {
    AppBar,
    Button,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { useStyles } from "./PalleteFormNav.styles.js";

const PalleteFormNav = ({
    open,
    createAndSavePallete,
    handleDrawerOpen,
    palletes,
}) => {
    const classes = useStyles();
    const [newPalleteName, setNewPalleteName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule("isPalleteNameUnique", value => {
            return palletes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }, [palletes]);

    return (
        <>
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

                    <ValidatorForm
                        onSubmit={() => createAndSavePallete(newPalleteName)}
                    >
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

                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button variant="contained" color="secondary">
                                Go Back
                            </Button>
                        </Link>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default PalleteFormNav;
