import { Link } from "react-router-dom";
import MiniPallete from "../MiniPallete/MiniPallete.jsx";
import { useStyles } from "./PalleteList.styles.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
    Avatar,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors";
import { useState } from "react";

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
                            <MiniPallete
                                openDialog={handleOpen}
                                deletePallete={deletePallete}
                                {...pallete}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>

            {/* Material UI Confirmation Dialog Component */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="delete-dialog-title"
            >
                <DialogTitle id="delete-dialog-title">
                    Delete This Pallete?
                </DialogTitle>

                <List>
                    {/* Delete Icon */}
                    <ListItem button onClick={handleDelete}>
                        <ListItemAvatar>
                            <Avatar
                                style={{
                                    backgroundColor: blue[100],
                                    color: blue[600],
                                }}
                            >
                                <Check />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Delete</ListItemText>
                    </ListItem>

                    <ListItem button onClick={handleClose}>
                        <ListItemAvatar>
                            <Avatar
                                style={{
                                    backgroundColor: red[100],
                                    color: red[600],
                                }}
                            >
                                <Close />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Cancel</ListItemText>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};

export default PalleteList;
