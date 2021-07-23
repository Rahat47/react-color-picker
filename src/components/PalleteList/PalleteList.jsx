import { Link } from "react-router-dom";
import MiniPallete from "../MiniPallete/MiniPallete.jsx";

const PalleteList = ({ palletes }) => {
    return (
        <div>
            <MiniPallete />
            <h1>React Colors</h1>

            {palletes.map(pallete => (
                <p key={pallete.id}>
                    <Link to={`/pallete/${pallete.id}`}>
                        {pallete.paletteName}
                    </Link>
                </p>
            ))}
        </div>
    );
};

export default PalleteList;
