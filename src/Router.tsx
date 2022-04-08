import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

// (App에서 Router에 toggleTheme으로 보낸 toggleTheme)props의 type을 알려줘야 한다.
interface IRouterProps {}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
