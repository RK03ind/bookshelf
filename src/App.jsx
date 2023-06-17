import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>Bookshelf 📚</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
