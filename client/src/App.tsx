import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.tsx";
import List from "./pages/List.tsx";
import Search from "./pages/Search.tsx";
import Cover from "./components/cover/Cover.tsx";
import styles from "./assets/styles/common.module.scss";

function App() {
  return (
    <div className={styles.entire}>
      <Cover />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
