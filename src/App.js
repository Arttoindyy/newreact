import {BrowserRouter, Route, Routes} from "react-router-dom";
import Employee_func from "./components/Employee.func.component";
import Employee from "./components/Employee.class.component";

function App() {
return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Employee_func/>}/>
      <Route path="/employee" element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
  </div>
);

}

export default App;