// import React from 'react'
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import JobList from './components/Job/JobList';
// import JobDetail from './components/Job/JobDetail';
// import ApplyForm from './components/Apply/ApplyForm';
// import SuccessPage from './components/Apply/SuccessPage';


// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={Login} />
//           <Route path="/signup" element={Signup} />
//           <Route path="/jobs" exact element={JobList} />
//           <Route path="/jobs/:id" element={JobDetail} />
//           <Route path="/apply/:id" element={ApplyForm} />
//           <Route path="/success" element={SuccessPage} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }








import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter here
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import JobList from './components/Job/JobList';
import JobDetail from './components/Job/JobDetail';
import ApplyForm from './components/Apply/ApplyForm';
import SuccessPage from './components/Apply/SuccessPage';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes> {/* Use 'Routes' for routing */}
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply/:id" element={<ApplyForm />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
