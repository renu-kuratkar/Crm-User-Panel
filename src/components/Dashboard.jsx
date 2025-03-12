import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import NewDashboard from "./NewDashboard";
import NewCoustmerList from "./NewCoustmerList";
import LeadsTable from "./LeadsTable";
import Sales from "./Sales";
import NewCards from "./NewCards";
import ProjectTable from "./ProjectTable";
import TaskList from "./TaskList";
import Registration from "./Registrations";
import DealData from "./DealData";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("newDashboard"); // Default to NewDashboard

  useEffect(() => {
    console.log("Active Component:", activeComponent);
  }, [activeComponent]);

  return (
    <div className="flex w-full relative">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setActiveComponent={setActiveComponent} />

      <div className="flex-1">
        {/* Navbar */}
        <Navbar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />

        {/* Main Content */}
        <main className={`pt-16 px-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
          {activeComponent === "newDashboard" && <NewDashboard />}
          {activeComponent === "leadsTable" && <LeadsTable />}
          {activeComponent === "sales" && <Sales />}
          {activeComponent === "newCustomerList" && <NewCoustmerList />}
          {activeComponent === "deals" && <DealData />}
          {activeComponent === "analytics" && <NewCards />}
          {activeComponent === "task" && <TaskList />}
          {activeComponent === "project" && <ProjectTable />}
          {activeComponent === "customerRegistration" && <Registration />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
