import { Link } from "react-router-dom";

const PalleteList = ({ palletes }) => {
    return (
        <div>
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
