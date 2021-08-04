import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { generatePalletes } from "../../helpers/colorHelpers.js";
import ColorBox from "../ColorBox/ColorBox.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import PalleteFooter from "../PalleteFooter/PalleteFooter.jsx";
import { useStyles } from "./Pallete.styles.js";

const Pallete = ({ findPalleteById }) => {
    const classes = useStyles();
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    const [pallete, setPallete] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const selectedPallete = generatePalletes(findPalleteById(id));
        setPallete(selectedPallete);
    }, [id, findPalleteById]);

    const changeFormat = val => {
        setFormat(val);
    };

    return (
        <div className={classes.root}>
            <Navbar
                level={level}
                setLevel={setLevel}
                handleChange={changeFormat}
            />

            {pallete.id ? (
                <div className={classes.colors}>
                    {pallete.colors[level].map(color => (
                        <ColorBox
                            palleteId={pallete.id}
                            colorId={color.id}
                            background={color[format]}
                            name={color.name}
                            key={color.id}
                        />
                    ))}
                </div>
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
            )}

            <PalleteFooter pallete={pallete} />
        </div>
    );
};

export default Pallete;
