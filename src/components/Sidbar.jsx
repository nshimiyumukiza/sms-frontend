import React, { useState } from "react";
import {
  FaUsers,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { id: "dashboard", label: "dashboard", icon: FaChartBar },
  { id: "student", label: "student", icon: FaUsers },
  { id: "teachers", label: "Teachers", icon: FaGraduationCap },
  { id: "classes", label: "Classes", icon: FaBookOpen },
  { id: "schedule", label: "Schedule", icon: FaCalendarAlt },
  { id: "settings", label: "Settings", icon: FaCog },
];

const Sidbar = () => {
  const { activeTab, setActiveTabe } = useState("dashboard");
  return (
    <div className="bg-white border-r">
      <div className="w-60 p-6 bg-gray-100 border-b   ">
        <h1 className="text-3xl font-bold text-black">ERNESTE</h1>
        <p className="text-sm text-gray-700 mt-1">School Management</p>
      </div>
      <div className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTabe(item.id)}
              className={`
                w-full flex items-center px-6 py-3 text-left 
                transition-colors duration-200 
                hover:bg-gray-50
                ${activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600 font-medium' 
                  : 'text-gray-700'
                }
              `}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidbar;
