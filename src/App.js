// IMPORT
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Render from "./components/Render/Render";
import Posts from "./components/posts/Posts";
import Error from "./components/error/error";
import Header from "./components/header";
// IMPORT END

// FUNCTION APP

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <div className={theme}>
        <Routes>
          <Route path="/" element={<Render theme={theme} />} />
          <Route path="/name/:name" element={<Posts theme={theme} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}
// RENDER END

export default App;
