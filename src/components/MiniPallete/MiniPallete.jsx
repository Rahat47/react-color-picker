import { useStyles } from "./MiniPallete.styles.js";

const MiniPallete = ({ paletteName, id, emoji, colors }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.colors}></div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
};

export default MiniPallete;
