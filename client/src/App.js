import './App.css';
import { Router } from '@reach/router';
import PetDashboard from './views/PetDashboard';
import NewPet from './views/NewPet';
import ViewPet from './views/ViewPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <Router>
        <PetDashboard path="/" />
        <NewPet path="pets/new" />
        <ViewPet path="pets/:id" />
        <EditPet path="pets/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
