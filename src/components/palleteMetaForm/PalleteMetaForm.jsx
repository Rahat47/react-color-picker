import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const PalleteMetaForm = ({
    palletes,
    createAndSavePallete,
    setFormShowing,
}) => {
    const [newPalleteName, setNewPalleteName] = useState("");
    const [stage, setStage] = useState("form");

    useEffect(() => {
        ValidatorForm.addValidationRule("isPalleteNameUnique", value => {
            return palletes.every(
                ({ paletteName }) =>
                    paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }, [palletes]);

    const handleClose = () => {
        setStage("form");
        setFormShowing(false);
    };

    const showEmojiPicker = () => {
        setStage("emoji");
    };

    const savePallete = newEmoji => {
        const emoji = newEmoji.native;

        createAndSavePallete(newPalleteName, emoji);
        setStage("form");
        setFormShowing(false);
    };

    return (
        <>
            <Dialog open={stage === "emoji"} onClose={handleClose}>
                <DialogTitle>Choose a pallete Emoji</DialogTitle>
                <Picker
                    onSelect={savePallete}
                    theme="light"
                    emojiTooltip
                    title="Pick an Emoji"
                    showSkinTones={false}
                />
            </Dialog>

            <Dialog
                open={stage === "form"}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Choose a Pallete Name
                </DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new beautiful pallete.
                            Make sure the name is unique
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
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Save Pallete
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </>
    );
};

export default PalleteMetaForm;
