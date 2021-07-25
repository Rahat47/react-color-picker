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