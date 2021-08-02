import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6.5px",

        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },

        [theme.breakpoints.down("lg")]: {
            width: "25%",
            height: "20%"
        },

        [theme.breakpoints.down("md")]: {
            width: "50%",
            height: "15%"
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "10%"
        },
    },

    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
    },

    deleteIcon: {
        color: "inherit",
        transition: "all 0.2s ease-in-out",
    }
}));