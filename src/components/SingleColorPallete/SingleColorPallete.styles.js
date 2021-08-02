import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },

    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        background: "black",
        height: "50%",

        [theme.breakpoints.down('lg')]: {
            width: "25%",
            height: "33.3333%",
        },

        [theme.breakpoints.down('md')]: {
            height: "20%",
            width: "50%"
        },

        [theme.breakpoints.down('xs')]: {
            height: "10%",
            width: "100%"
        },

    },

    backButton: {
        position: "absolute",
        cursor: "pointer",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "none",
        background: "rgba(216, 216, 216, 0.4)",
        borderRadius: "3px",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "5px",
        border: "none",
        transition: "opacity 0.5s ease",


    },



}));
