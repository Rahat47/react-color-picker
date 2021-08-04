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
import { red, green } from "@material-ui/core/colors";

const PalleteListDialog = ({ handleClose, handleDelete, open }) => {
    return (
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
                                backgroundColor: green[100],
                                color: green[600],
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
    );
};

export default PalleteListDialog;
