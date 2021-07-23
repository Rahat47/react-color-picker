import MiniPallete from "../MiniPallete/MiniPallete.jsx";

const PalleteList = ({ palletes }) => {
    return (
        <div>
            <h1>React Colors</h1>

            {palletes.map(pallete => (
                <MiniPallete key={pallete.id} {...pallete} />
            ))}
        </div>
    );
};

export default PalleteList;
