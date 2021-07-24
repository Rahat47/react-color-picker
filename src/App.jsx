import Pallete from "./components/Pallete/Pallete.jsx";
import { generatePalletes } from "./helpers/colorHelpers.js";
import seedColors from "./seedColors.js";
import { Route, Switch } from "react-router-dom";
import PalleteList from "./components/PalleteList/PalleteList.jsx";
import SingleColorPallete from "./components/SingleColorPallete/SingleColorPallete.jsx";

function App() {
    //finds a pallete from seedColors array where id mathces the parameter ID
    const findPalleteById = id => {
        return seedColors.find(pallete => pallete.id === id);
    };

    return (
        <Switch>
            <Route exact path="/">
                <PalleteList palletes={seedColors} />
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

            <Route exact path="/pallete/:palleteId/:colorId">
                <SingleColorPallete />
            </Route>
        </Switch>
    );
}

export default App;
