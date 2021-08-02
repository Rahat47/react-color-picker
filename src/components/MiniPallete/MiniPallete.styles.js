import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",

        "&:hover svg": {
            opacity: 1,
            visibility: "visible"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4.5px",
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

        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem"
        }
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",

        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem"
        }
    },

    deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "20px",
        height: "20px",
        position: "absolute",
        top: "0",
        right: "0",
        padding: "10px",
        zIndex: "20",
        opacity: 0,
        transition: "opacity 300ms ease-in-out",
        visibility: "hidden",
    }
}));