import { UserCircle, Folder, ShoppingBag, At, ChatCircleText, Image, CheckCircle, Calendar, ClipboardText, Briefcase, Users, BellRinging, Headset, ChatDots } from "@phosphor-icons/react";
import adialogo from "../assets/adialogo.png";

const Sidebar = ({ isOpen, setActiveComponent }) => {
  const sidebarItems = [
    { icon: UserCircle, label: "Dashboard", component: "newDashboard" },
    { icon: ShoppingBag, label: "Customers", component: "newCustomerList" },
    { icon: Briefcase, label: "Leads", component: "leadsTable" },
    { icon: ClipboardText, label: "Sales", component: "sales" },
    { icon: Users, label: "Deals", component: "deals" },
    { icon: ChatDots, label: "Communication", component: "communication" },
    { icon: Headset, label: "Supports", component: "supports" },
    { icon: ClipboardText, label: "Tasks", component: "taskList" },
    { icon: BellRinging, label: "Reminders", component: "reminders" }
  ];

  const otherItems = [
    { icon: Folder, label: "File Manager", component: "fileManager" },
    { icon: At, label: "Mail", component: "mail" },
    { icon: ChatCircleText, label: "Messages", component: "messages" },
    { icon: Image, label: "Photos", component: "photos" },
    { icon: CheckCircle, label: "To-Do Lists", component: "todoLists" },
    { icon: Calendar, label: "Calendar", component: "calendar" }
  ];

  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#1E2A38] p-4 transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"} flex flex-col text-black`}> 

      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-6">
        <img src={adialogo} alt="Logo" className="w-10 h-10 object-contain rounded-full" />
        {isOpen && <h6 className="text-xl text-white font-bold">CRM Panel</h6>}
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2 text-[rgb(207,230,255)]">
          {sidebarItems.map((item, index) => (
            <li 
              key={index} 
              className="group flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 transition duration-200"
              onClick={() => setActiveComponent(item.component)}
            >
              <item.icon className="text-lg" />
              {isOpen && <span className="ml-4">{item.label}</span>}
            </li>
          ))}

          {/* Other Sidebar Items */}
          {otherItems.map((item, index) => (
            <li 
              key={index}
              className="group flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 transition duration-200"
              onClick={() => setActiveComponent(item.component)}
            >
              <item.icon className="text-lg" />
              {isOpen && <span className="ml-4">{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
