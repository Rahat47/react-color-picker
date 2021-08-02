import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        height: "120vh",
        display: "flex",
        flexDirection: "column",
    },

    colors: {
        height: "90%"
    },

    palleteFooter: {
        backgroundColor: "white",
        height: "6vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold"
    },

    emoji: {
        fontSize: "1.5rem",
        margin: "0 1rem"
    }
}));