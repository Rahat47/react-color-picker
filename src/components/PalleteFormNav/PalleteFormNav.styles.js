import { makeStyles } from "@material-ui/core";
const drawerWidth = 250;

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px"
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    hide: {
        display: 'none',
    },

    navBtns: {
        marginRight: "1rem",
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            marginRight: "0.2rem",
        },
    },

    button: {
        margin: "0 0.5rem",

        [theme.breakpoints.down('sm')]: {
            margin: "0",
            fontSize: "12px",
            lineHeight: "1.3"
        },
    },
}));