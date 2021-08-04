import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },

    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: '"Roboto", sans-serif',
        height: "100%",
        display: "flex",
        alignItems: "center",

        "& a": {
            textDecoration: "none",
            color: "black"
        },

        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",

        "& .rc-slider-track": {
            height: "8px",
            backgroundColor: "rgba(130,126,216,1.0)",
        },

        "& .rc-slider-rail": {
            height: "8px"
        },

        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover,.rc-slider-handle:focus": {
            backgroundColor: "#3524bc",
            outline: "none",
            border: "2px solid #3524bc",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
        },

        [theme.breakpoints.down("sm")]: {
            width: "150px"
        },

    },

    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    },

}));