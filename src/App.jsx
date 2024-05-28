import { Router, Routes } from "react-router-dom";
import routes from "./router/router";

function App() {
  return (
    <Router>
      <div>
        <Routes element={routes} />
      </div>
    </Router>
  );
}

export default App;
