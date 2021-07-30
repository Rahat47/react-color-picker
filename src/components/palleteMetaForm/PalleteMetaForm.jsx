import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const PalleteMetaForm = ({
    palletes,
    createAndSavePallete,
    setFormShowing,
    formShowing,
}) => {
    const [newPalleteName, setNewPalleteName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule("isPalleteNameUnique", value => {
            return palletes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }, [palletes]);

    const handleClose = () => {
        setFormShowing(false);
    };

    return (
        <Dialog
            open={formShowing}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Choose a Pallete Name
            </DialogTitle>
            <ValidatorForm
                onSubmit={() => createAndSavePallete(newPalleteName)}
            >
                <DialogContent>
                    <Picker theme="dark" emojiTooltip title="Pick an Emoji" />

                    <DialogContentText>
                        Please enter a name for your new beautiful pallete. Make
                        sure the name is unique
                    </DialogContentText>

                    <TextValidator
                        label="Pallete Name"
                        fullWidth
                        margin="normal"
                        value={newPalleteName}
                        validators={["required", "isPalleteNameUnique"]}
                        errorMessages={[
                            "Please enter a Pallete Name",
                            "The Pallete name is already used",
                        ]}
                        onChange={e => setNewPalleteName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        Save Pallete
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
};

export default PalleteMetaForm;
