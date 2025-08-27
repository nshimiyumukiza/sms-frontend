import { 
  FaUsers, 
  FaBookOpen, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaChartBar, 
} from "react-icons/fa";
import { useState } from "react";
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: FaChartBar },
  { id: 'students', label: 'Students', icon: FaUsers },
  { id: 'teachers', label: 'Teachers', icon: FaGraduationCap },
  { id: 'classes', label: 'Classes', icon: FaBookOpen },
  { id: 'schedule', label: 'Schedule', icon: FaCalendarAlt },
  { id: 'settings', label: 'Settings', icon: FaCog }
];


const Sidebar = () => {
  // State to track which menu item is currently active
  const [activeTab, setActiveTab] = useState('dashboard');


  return (
    <div className="w-64 bg-white shadow-sm border-r h-screen">
      {/* Brand/Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-800">EduManager</h1>
        <p className="text-sm text-gray-600 mt-1">School Management System</p>
      </div>
      
      {/* Navigation Menu */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          // Get the icon component dynamically
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
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
      </nav>

      {/* Optional: User Profile Section at Bottom */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">AD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@school.edu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper to show the sidebar in action
const SidebarDemo = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      {/* Demo content area */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Sidebar Component Demo</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">🔍 What we've built:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Fixed-width sidebar (w-64 = 256px)</li>
                <li>Brand/logo section at the top</li>
                <li>Dynamic navigation menu with icons</li>
                <li>Active state management with visual feedback</li>
                <li>Hover effects for better UX</li>
                <li>User profile section at the bottom</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">⚙️ Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><strong>State Management:</strong> Uses useState to track active menu item</li>
                <li><strong>Dynamic Icons:</strong> Icons are stored in data and rendered dynamically</li>
                <li><strong>Conditional Styling:</strong> Active item gets blue background and border</li>
                <li><strong>Responsive Design:</strong> Ready for mobile responsiveness</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">🎨 CSS Classes Used:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li><code>w-64</code> - Fixed width (256px)</li>
                <li><code>bg-white</code> - White background</li>
                <li><code>shadow-sm</code> - Subtle shadow</li>
                <li><code>border-r</code> - Right border</li>
                <li><code>hover:bg-gray-50</code> - Hover effect</li>
                <li><code>transition-colors duration-200</code> - Smooth color transitions</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">💡 Try This:</h4>
              <p className="text-yellow-700 text-sm">Click on different menu items in the sidebar to see the active state change!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDemo;