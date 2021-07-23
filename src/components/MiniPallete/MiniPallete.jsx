import { useStyles } from "./MiniPallete.styles.js";

const MiniPallete = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.main}>Mini Pallete</h1>
        </div>
    );
};

export default MiniPallete;
