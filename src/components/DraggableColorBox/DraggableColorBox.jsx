import { useStyles } from "./DraggableColorbox.styles.js";

const DraggableColorBox = ({ color, name }) => {
    const classes = useStyles();

    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className={classes.root}
        >
            {name}
        </div>
    );
};

export default DraggableColorBox;
