import Pallete from "./components/Pallete/Pallete.jsx";
import { generatePalletes } from "./helpers/colorHelpers.js";
import seedColors from "./seedColors.js";
import { Route, Switch } from "react-router-dom";
import PalleteList from "./components/PalleteList/PalleteList.jsx";
import SingleColorPallete from "./components/SingleColorPallete/SingleColorPallete.jsx";
import NewPalleteForm from "./components/newPalleteForm/NewPalleteForm.jsx";
import { useState } from "react";

function App() {
    const [palletes, setPalletes] = useState(seedColors);

    //finds a pallete from seedColors array where id mathces the parameter ID
    const findPalleteById = id => {
        return palletes.find(pallete => pallete.id === id);
    };

    const savePallete = newPallete => {
        setPalletes([...palletes, newPallete]);
    };

    return (
        <Switch>
            <Route exact path="/pallete/new">
                <NewPalleteForm palletes={palletes} savePallete={savePallete} />
            </Route>

            <Route
                exact
                path="/pallete/:id"
                render={routeProps => (
                    <Pallete
                        pallete={generatePalletes(
                            findPalleteById(routeProps.match.params.id)
                        )}
                    />
                )}
            />

            <Route
                exact
                path="/pallete/:palleteId/:colorId"
                render={routeProps => (
                    <SingleColorPallete
                        colorId={routeProps.match.params.colorId}
                        pallete={generatePalletes(
                            findPalleteById(routeProps.match.params.palleteId)
                        )}
                    />
                )}
            />

            <Route exact path="/">
                <PalleteList palletes={palletes} />
            </Route>
        </Switch>
    );
}

export default App;
