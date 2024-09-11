import RecipeManager from './components/RecipeManager'; 
import "./components/Recipe.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Recipe Manager</h1>
      </header>
      <main>
        <RecipeManager />
      </main>
    </div>
  );
}

export default App;
