import Pallete from './components/Pallete/Pallete.jsx';
import { generatePalletes } from './helpers/colorHelpers.js';
import seedColors from './seedColors.js'
import { Route, Switch } from 'react-router-dom'

function App() {
  //finds a pallete from seedColors array where id mathces the parameter ID
  const findPalleteById = (id) => {
    return seedColors.find(pallete => pallete.id === id);
  }

  return (
    <Switch>
      <Route exact path="/">
        Pallete List Goes here
      </Route>
      <Route path="/pallete/:id" render={routeProps => (
        <Pallete pallete={generatePalletes(findPalleteById(routeProps.match.params.id))} />
      )} >

      </Route>
    </Switch>
  );
}

export default App;
