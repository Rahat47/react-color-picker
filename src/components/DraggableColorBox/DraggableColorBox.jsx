import { useStyles } from "./DraggableColorbox.styles.js";

const DraggableColorBox = ({ color }) => {
    const classes = useStyles();

    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className={classes.root}
        >
            {color}
        </div>
    );
};

export default DraggableColorBox;
