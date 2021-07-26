import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "blue",
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
        gap: "20px"
    },

}));
