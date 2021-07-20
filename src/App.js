import Pallete from './components/Pallete/Pallete.jsx';
import { generatePalletes } from './helpers/colorHelpers.js';
import seedColors from './seedColors.js'

function App() {

  return (
    <div >
      <Pallete pallete={generatePalletes(seedColors[4])} />
    </div>
  );
}

export default App;
