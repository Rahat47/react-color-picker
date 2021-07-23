import { useStyles } from "./MiniPallete.styles.js";
import { useHistory } from "react-router-dom";

const MiniPallete = ({ paletteName, id, emoji, colors }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div
            onClick={() => history.push(`/pallete/${id}`)}
            className={classes.root}
        >
            <div className={classes.colors}>
                {colors.map((color, index) => (
                    <div
                        style={{
                            backgroundColor: color.color,
                        }}
                        className={classes.miniColor}
                        key={index}
                    ></div>
                ))}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default MiniPallete;
