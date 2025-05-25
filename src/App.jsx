// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import "./Layout.scss";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-layout d-flex">
//         <Sidebar />
//         <div className="main-content p-3 flex-grow-1">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/users" element={<Users />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app-layout d-flex">
        <Sidebar />
        <div className="main-content flex-grow-1">
          <Header username="Vishal" />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<div>Overview Page</div>} />
              <Route path="/products" element={<div>Products Page</div>} />
              <Route path="/users" element={<div>Users Page</div>} />
              <Route path="/sales" element={<div>Sales Page</div>} />
              <Route path="/orders" element={<div>Orders Page</div>} />
              <Route path="/analytics" element={<div>Analytics Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
              {/* Nested Example */}
              <Route
                path="/products/details"
                element={<div>Product Details</div>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
