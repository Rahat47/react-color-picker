import { useStyles } from "./DraggableColorbox.styles.js";
import { Delete } from "@material-ui/icons";
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement(({ color, name, handleDelete }) => {
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

                <Delete
                    className={classes.deleteIcon}
                    onClick={() => handleDelete(name)}
                />
            </div>
        </div>
    );
});

export default DraggableColorBox;
