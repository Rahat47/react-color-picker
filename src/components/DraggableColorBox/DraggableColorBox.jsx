import { useStyles } from "./DraggableColorbox.styles.js";
import { Delete } from "@material-ui/icons";
import { SortableElement } from "react-sortable-hoc";
import chroma from "chroma-js";
const DraggableColorBox = SortableElement(({ color, name, handleDelete }) => {
    const classes = useStyles();

    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className={classes.root}
        >
            <div
                className={classes.boxContent}
                style={{
                    color: `${
                        chroma(color).luminance() <= 0.08 ? "white" : "black"
                    }`,
                }}
            >
                <span>{name}</span>

                <Delete
                    className={classes.deleteIcon}
                    onClick={() => handleDelete(name)}
                />
            </div>
        </div>
    );
});

export default DraggableColorBox;
