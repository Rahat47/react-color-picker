import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    colorPicker: {
        width: "100% !important",
        marginTop: theme.spacing(3),
    },

    colorButton: {
        width: "100% ",
        padding: "1rem",
        marginTop: theme.spacing(3),
        fontSize: "2rem",
    },

    form: {
        width: "100%",
    },

    input: {
        width: "100%",
        height: "70px",
    },
}));