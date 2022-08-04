// IMPORT

import { Route, Routes } from "react-router-dom"
import Render from "./components/Render/Render";
import Posts from "./components/posts/Posts";
import Error from "./components/error/error";
// IMPORT END

// FUNCTION APP

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Render />} />
        <Route path="/name/:name" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
// RENDER END

export default App;
