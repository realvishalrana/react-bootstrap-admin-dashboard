// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Sidebar.scss";
// import { Button } from "react-bootstrap";

// const SIDEBAR_ITEMS = [
//   { name: "Overview", color: "#6366f1", href: "/" },
//   { name: "Products", color: "#8B5CF6", href: "/products" },
//   { name: "Users", color: "#EC4899", href: "/users" },
//   { name: "Sales", color: "#10B981", href: "/sales" },
//   { name: "Orders", color: "#F59E0B", href: "/orders" },
//   { name: "Analytics", color: "#3B82F6", href: "/analytics" },
//   { name: "Settings", color: "#6EE7B7", href: "/settings" },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const location = useLocation();

//   return (
//     <div className={`custom-sidebar ${isOpen ? "open" : "collapsed"}`}>
//       <div className="sidebar-header">
//         <Button
//           variant="link"
//           className="menu-toggle"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           Menu
//           {/* {collapsed ? "☰" : "×"} */}
//           {/* <Menu size={24} /> */}
//         </Button>
//       </div>
//       <nav className="sidebar-nav">
//         {SIDEBAR_ITEMS.map((item) => {
//           const isActive = location.pathname === item.href;
//           return (
//             <Link
//               key={item.href}
//               to={item.href}
//               className={`sidebar-link ${isActive ? "active" : ""}`}
//             >
//               <item.name />
//               {/* <item.icon
//                 size={20}
//                 style={{ color: item.color }}
//                 className="sidebar-icon"
//               /> */}
//               {isOpen && <span className="sidebar-label">{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.scss"; // Import your SCSS file

// const SIDEBAR_ITEMS = [
//   { name: "Overview", icon: "📊", href: "/" },
//   { name: "Products", icon: "🛍️", href: "/products" },
//   { name: "Users", icon: "👥", href: "/users" },
//   { name: "Sales", icon: "💰", href: "/sales" },
//   { name: "Orders", icon: "🛒", href: "/orders" },
//   { name: "Analytics", icon: "📈", href: "/analytics" },
//   { name: "Settings", icon: "⚙️", href: "/settings" },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
//       <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
//         ☰
//       </button>
//       <nav className="menu">
//         {SIDEBAR_ITEMS.map((item) => (
//           <Link key={item.href} to={item.href} className="menu-item">
//             <span className="icon">{item.icon}</span>
//             {isOpen && <span className="label">{item.name}</span>}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import "./Sidebar.scss";

const SIDEBAR_ITEMS = [
  { name: "Overview", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Users", href: "/users" },
  { name: "Sales", href: "/sales" },
  { name: "Orders", href: "/orders" },
  { name: "Analytics", href: "/analytics" },
  { name: "Settings", href: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <Button variant="light" onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
        ☰
      </Button>
      <Nav className="flex-column mt-3">
        {SIDEBAR_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className="sidebar-link"
            activeClassName="active"
          >
            <span className="icon">🔹</span>
            {isOpen && <span className="label">{item.name}</span>}
          </NavLink>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
