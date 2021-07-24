const PalleteFooter = ({ pallete }) => {
    return (
        <footer className="pallete-footer">
            {pallete.paletteName}
            <span className="emoji">{pallete.emoji}</span>
        </footer>
    );
};

export default PalleteFooter;
