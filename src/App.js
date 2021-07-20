import Pallete from './components/Pallete/Pallete.jsx';
import { generatePalletes } from './helpers/colorHelpers.js';
import seedColors from './seedColors.js'

function App() {
  console.log(generatePalletes(seedColors[4]))
  return (
    <div >
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
