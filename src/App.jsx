import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1 style={{ textAlign: "center" }}>Bookshelf 📚</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
