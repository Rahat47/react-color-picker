import { makeStyles } from "@material-ui/core";
import { backgroundSVG } from "../../helpers/backGround";

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#0c14aa",
        backgroundImage: backgroundSVG,
        backgroundAttachment: "fixed",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",


    },
    container: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "wrap",

        [theme.breakpoints.down('sm')]: {
            width: "75%"
        },

        [theme.breakpoints.down('xs')]: {
            width: "65%"
        },

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",

        "& a": {
            color: "white",

        }
    },
    palletes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(2, 1fr)",
        },

        [theme.breakpoints.down('xs')]: {
            gap: "1.7rem",
            gridTemplateColumns: "repeat(1, 1fr)",
        },
    },

}));
