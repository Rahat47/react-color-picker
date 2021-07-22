import Pallete from './components/Pallete/Pallete.jsx';
import { generatePalletes } from './helpers/colorHelpers.js';
import seedColors from './seedColors.js'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Switch>
      <Route exact path="/">
        Pallete List Goes here
      </Route>
      <Route path="/pallete/:id" >
        <Pallete pallete={generatePalletes(seedColors[0])} />
      </Route>
    </Switch>
  );
}

export default App;
