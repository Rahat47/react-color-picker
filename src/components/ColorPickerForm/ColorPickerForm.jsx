import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useStyles } from "./ColorPickerForm.styles";

const ColorPickerForm = ({ setColors, colors, isPalleteFull }) => {
    const classes = useStyles();
    const [colorName, setColorName] = useState("");
    //set random rgba a color as initial state
    const [color, setColor] = useState(returnRandomColor());

    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                color => color.name.toLowerCase() !== value.toLowerCase()
            );
        });

        ValidatorForm.addValidationRule("isColorUnique", value => {
            return colors.every(col => col.color !== color);
        });
    }, [colors, color]);

    const updateCurrentColor = color => {
        // const newColorHex = color.hex;
        const newColorRgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        // const newColorHSLA = `hsla(${color.hsl.h}, ${color.hsl.s}, ${color.hsl.l}, ${color.hsl.a})`;
        // const newColorHSL = `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
        setColor(newColorRgba);
    };

    function returnRandomColor() {
        return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
            Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 1)`;
    }

    const createColor = () => {
        const newColor = {
            name: colorName,
            color,
        };
        setColors([...colors, newColor]);
        setColorName("");
    };

    const handleChange = e => {
        setColorName(e.target.value);
    };

    return (
        <>
            <ChromePicker
                className={classes.colorPicker}
                color={color}
                onChange={updateCurrentColor}
                // onChangeComplete={newColor => {
                //     // console.log(newColor);
                // }}
            />

            <ValidatorForm
                onSubmit={createColor}
                instantValidate={false}
                className={classes.form}
            >
                <TextValidator
                    label="Color Name"
                    variant="filled"
                    margin="normal"
                    className={classes.input}
                    validators={[
                        "required",
                        "isColorNameUnique",
                        "isColorUnique",
                    ]}
                    errorMessages={[
                        "Color Name is required",
                        "this color name is not unique",
                        "this color is already used",
                    ]}
                    value={colorName}
                    onChange={handleChange}
                />

                <Button
                    style={{
                        backgroundColor: color,
                    }}
                    className={classes.colorButton}
                    variant="contained"
                    type="submit"
                    disabled={isPalleteFull}
                >
                    {isPalleteFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </>
    );
};

export default ColorPickerForm;
