import { useStyles } from "./DraggableColorbox.styles.js";
import { Delete } from "@material-ui/icons";

const DraggableColorBox = ({ color, name }) => {
    const classes = useStyles();

    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className={classes.root}
        >
            <div className={classes.boxContent}>
                <span>{name}</span>
                <span>
                    <Delete className={classes.deleteIcon} />
                </span>
            </div>
        </div>
    );
};

export default DraggableColorBox;
