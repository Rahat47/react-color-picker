import { useStyles } from "./PalleteFooter.styles.js";

const PalleteFooter = ({ pallete }) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            {pallete.paletteName}
            <span className={classes.emoji}>{pallete.emoji}</span>
        </footer>
    );
};

export default PalleteFooter;
