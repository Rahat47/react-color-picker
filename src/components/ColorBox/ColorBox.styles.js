import chroma from 'chroma-js';

export const styles = {
    colorBox: {
        width: "20%",
        height: props => props.palleteId ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",

        "&:hover button": {
            opacity: "1"
        },

    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },

    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        transform: "skew(0.1)",
        transition: "transform 0.5s ease-in-out",
        // ...(props => props.copied && {
        //     position: "absolute"
        // })
    },

    showOverlay: {
        opacity: 1,
        transform: "scale(50)",
        zIndex: 10,
        position: "absolute"
    },

    copyMsg: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        flexDirection: "column",
        transform: "scale(0.1)",
        opacity: 0,
        color: "white",

        "& h1": {
            fontWeight: 400,
            textShadow: "1px 2px black",
            background: "rgba(216, 216, 216, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase"
        },

        "& p": {
            fontSize: "2rem",
            fontWeight: 100
        }
    },

    showCopyMsg: {
        transform: "scale(1)",
        opacity: 1,
        zIndex: 25,
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s"
    },

    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
    },

    colorName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    },
    seeMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        background: "rgba(216, 216, 216, 0.4)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
    },

    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "black" : "white",
        position: "absolute",
        display: "inline-block",
        cursor: "pointer",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        background: "rgba(216, 216, 216, 0.4)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        opacity: 0,
        transition: "opacity 0.5s ease"
    }
};