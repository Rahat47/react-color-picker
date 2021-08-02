import { Link } from "react-router-dom";
import MiniPallete from "../MiniPallete/MiniPallete.jsx";
import { useStyles } from "./PalleteList.styles.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PalleteList = ({ palletes, deletePallete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to="/pallete/new">Create Pallete</Link>
                </nav>
                <TransitionGroup className={classes.palletes}>
                    {palletes.map(pallete => (
                        <CSSTransition
                            timeout={500}
                            classNames="fade"
                            key={pallete.id}
                        >
                            <MiniPallete
                                deletePallete={deletePallete}
                                {...pallete}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PalleteList;
