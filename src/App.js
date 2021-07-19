import Pallete from './components/Pallete/Pallete.jsx';
import seedColors from './seedColors.js'

function App() {
  return (
    <div >
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
