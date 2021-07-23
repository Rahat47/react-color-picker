import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",

        "&:hover": {
            cursor: "pointer",

        }
    },
    colors: {
        backgroundColor: "grey",

    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",
    }
}));