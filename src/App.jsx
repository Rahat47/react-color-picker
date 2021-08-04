import Pallete from "./components/Pallete/Pallete.jsx";
import { generatePalletes } from "./helpers/colorHelpers.js";
import seedColors from "./seedColors.js";
import { Route, Switch, useLocation } from "react-router-dom";
import PalleteList from "./components/PalleteList/PalleteList.jsx";
import SingleColorPallete from "./components/SingleColorPallete/SingleColorPallete.jsx";
import NewPalleteForm from "./components/newPalleteForm/NewPalleteForm.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";
import Page from "./helpers/Page.jsx";

function App() {
    //create a variable called allPalletes and check if localStorage has this data
    const allPalletes = JSON.parse(localStorage.getItem("palletes"));

    const [palletes, setPalletes] = useState(allPalletes || seedColors);

    //finds a pallete from seedColors array where id mathces the parameter ID
    const findPalleteById = id => {
        return palletes.find(pallete => pallete.id === id);
    };

    const savePallete = newPallete => {
        const newPalletes = [...palletes, newPallete];
        syncLocalstorage(newPalletes);
        setPalletes(newPalletes);
    };

    const deletePallete = id => {
        const newPalletes = palletes.filter(pallete => pallete.id !== id);
        syncLocalstorage(newPalletes);
        setPalletes(newPalletes);
    };

    const syncLocalstorage = newPalletes => {
        //save palletes to localstorage
        localStorage.setItem("palletes", JSON.stringify(newPalletes));
    };

    const location = useLocation();

    return (
        <Route>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={500}
                >
                    <Switch location={location}>
                        <Route exact path="/pallete/new">
                            <Page>
                                <NewPalleteForm
                                    palletes={palletes}
                                    savePallete={savePallete}
                                />
                            </Page>
                        </Route>

                        <Route
                            exact
                            path="/pallete/:id"
                            render={routeProps => (
                                <Page>
                                    <Pallete
                                        pallete={generatePalletes(
                                            findPalleteById(
                                                routeProps.match.params.id
                                            )
                                        )}
                                    />
                                </Page>
                            )}
                        />

                        <Route
                            exact
                            path="/pallete/:palleteId/:colorId"
                            render={routeProps => (
                                <Page>
                                    <SingleColorPallete
                                        colorId={
                                            routeProps.match.params.colorId
                                        }
                                        pallete={generatePalletes(
                                            findPalleteById(
                                                routeProps.match.params
                                                    .palleteId
                                            )
                                        )}
                                    />
                                </Page>
                            )}
                        />

                        <Route exact path="/">
                            <Page>
                                <PalleteList
                                    deletePallete={deletePallete}
                                    palletes={palletes}
                                />
                            </Page>
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Route>
    );
}

export default App;
