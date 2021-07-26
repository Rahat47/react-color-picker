import { Link } from "react-router-dom";
import MiniPallete from "../MiniPallete/MiniPallete.jsx";
import { useStyles } from "./PalleteList.styles.js";

const PalleteList = ({ palletes }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to="/pallete/new">Create Pallete</Link>
                </nav>
                <div className={classes.palletes}>
                    {palletes.map(pallete => (
                        <MiniPallete key={pallete.id} {...pallete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PalleteList;
