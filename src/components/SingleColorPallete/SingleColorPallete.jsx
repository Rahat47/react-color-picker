import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { generatePalletes } from "../../helpers/colorHelpers.js";
import ColorBox from "../ColorBox/ColorBox.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import PalleteFooter from "../PalleteFooter/PalleteFooter.jsx";
import { useStyles } from "./SingleColorPallete.styles.js";

const SingleColorPallete = ({ findPalleteById }) => {
    const { colorId, palleteId } = useParams();
    const [pallete, setPallete] = useState(null);
    const [shades, setShades] = useState(null);
    const [format, setFormat] = useState("hex");

    useEffect(() => {
        const selectedPallete = generatePalletes(findPalleteById(palleteId));
        setPallete(selectedPallete);
        setShades(gatherShades(selectedPallete, colorId));
    }, [palleteId, findPalleteById, colorId]);

    // Gathers shade from pallete.colors array
    function gatherShades(pallete, colorToFilterBy) {
        if (!pallete) return [];

        //Return all shade of the given color
        let shades = [];
        let allColors = pallete.colors;

        for (const key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        // removes the first item from the array because we dont need it
        shades.shift();

        return shades;
    }

    const changeFormat = val => {
        setFormat(val);
    };

    const colorBoxes = shades ? (
        shades.map((shade, i) => (
            <ColorBox
                key={i}
                background={shade[format]}
                format={format}
                name={shade.name}
            />
        ))
    ) : (
        <Grid
            style={{ height: "80vh", flexDirection: "column" }}
            alignItems="center"
            container
            justifyContent="center"
        >
            <Typography variant="h6">Loading...</Typography>
            <CircularProgress color="primary" size={80} />
        </Grid>
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar handleChange={changeFormat} />
            <div className={classes.colors}>
                {colorBoxes}

                <div className={classes.goBack}>
                    <Link
                        className={classes.backButton}
                        to={`/pallete/${pallete?.id}`}
                    >
                        Go Back
                    </Link>
                </div>
            </div>

            {pallete && <PalleteFooter pallete={pallete} />}
        </div>
    );
};

export default SingleColorPallete;
