import Pallete from './Pallete.jsx';
import seedColors from './seedColors.js'

function App() {
  return (
    <div >
      <Pallete {...seedColors[1]} />
    </div>
  );
}

export default App;
