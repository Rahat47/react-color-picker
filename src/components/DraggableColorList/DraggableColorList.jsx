import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox.jsx";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
    return (
        <div style={{ height: "100%" }}>
            {colors.map((color, i) => (
                <DraggableColorBox
                    index={i}
                    handleDelete={deleteColor}
                    key={color.name}
                    color={color.color}
                    name={color.name}
                />
            ))}
        </div>
    );
});

export default DraggableColorList;
