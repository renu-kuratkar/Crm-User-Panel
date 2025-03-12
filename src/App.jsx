import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CustomerList from "./components/CustomerList";
import EditCustomer from "./components/EditCustomer";
import AddCustomer from "./components/AddCustomer";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<CustomerList />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
        
        {/* <Route path="/add-customer" element={<AddCustomer />} /> */}
    </Routes>
  );
};

export default App;
