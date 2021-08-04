//Vendor Imports
import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Helpers
import seedColors from "./seedColors.js";
// Components
import Pallete from "./components/Pallete/Pallete.jsx";
import PalleteList from "./components/PalleteList/PalleteList.jsx";
import SingleColorPallete from "./components/SingleColorPallete/SingleColorPallete.jsx";
import NewPalleteForm from "./components/newPalleteForm/NewPalleteForm.jsx";
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

                        <Route exact path="/pallete/:id">
                            <Page>
                                <Pallete findPalleteById={findPalleteById} />
                            </Page>
                        </Route>

                        <Route exact path="/pallete/:palleteId/:colorId">
                            <Page>
                                <SingleColorPallete
                                    findPalleteById={findPalleteById}
                                />
                            </Page>
                        </Route>

                        <Route exact path="/">
                            <Page>
                                <PalleteList
                                    deletePallete={deletePallete}
                                    palletes={palletes}
                                />
                            </Page>
                        </Route>

                        {/* Fallback Route */}
                        <Route>
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
