import { Link } from "react-router-dom";
import MiniPallete from "../MiniPallete/MiniPallete.jsx";
import { useStyles } from "./PalleteList.styles.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useState } from "react";
import PalleteListDialog from "./PalleteListDialog.jsx";

const PalleteList = ({ palletes, deletePallete }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedPalleteID, setSelectedPalleteID] = useState("");

    const handleClose = () => {
        setOpen(false);
        setSelectedPalleteID("");
    };

    const handleOpen = id => {
        setSelectedPalleteID(id);
        setOpen(true);
    };

    const handleDelete = () => {
        deletePallete(selectedPalleteID);
        handleClose();
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to="/pallete/new">Create Pallete</Link>
                </nav>
                <TransitionGroup className={classes.palletes}>
                    {palletes.map(pallete => (
                        <CSSTransition
                            timeout={500}
                            classNames="fade"
                            key={pallete.id}
                        >
                            <MiniPallete openDialog={handleOpen} {...pallete} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>

            {/* Material UI Confirmation Dialog Component */}
            <PalleteListDialog
                open={open}
                handleClose={handleClose}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default PalleteList;
