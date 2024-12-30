import React, { useState } from "react";
import "./App.css";

// Dummy course data
const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn full-stack web development with HTML, CSS, JavaScript, and React.",
    instructor: "John Doe",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    duration: "6 months",
    status: "Enrolled"
  },
  {
    id: 2,
    title: "Data Science",
    description: "Learn data analysis, machine learning, and AI techniques.",
    instructor: "Jane Smith",
    startDate: "2024-02-01",
    endDate: "2024-07-01",
    duration: "5 months",
    status: "Not Enrolled"
  }
  // Add more courses here
];

const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (selectedRole === "HR" || selectedRole === "Instructor") {
      onLogin(); // Allow login if role is HR or Instructor
    } else {
      alert("Invalid role. Only HR and Instructor can access this portal.");
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="branding-block">
          <h1>UPSKILL VISION</h1>
          <p>Empowering You to Achieve More!</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-form">
          <h2>Login</h2>
          <p>Select Your Role to Access the Portal</p>
          <form onSubmit={handleLogin}>
            <select
              className="input-field"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="HR">HR</option>
              <option value="Instructor">Instructor</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-btn">Login</button>
          </form>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <p>
            Don’t have an account?{" "}
            <a href="#" className="create-account">
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = ({ onViewCourses, onAddNewCourse }) => {
  return (
    <div className="dashboard-page">
      <h1>Admin Dashboard</h1>
      <div className="icons-container">
        <div className="icon-card" onClick={onViewCourses}>
          <h3>View All Courses</h3>
        </div>
        <div className="icon-card" onClick={onAddNewCourse}>
          <h3>Add New Courses</h3>
        </div>
        <div className="icon-card">
          <h3>View Admin Suite</h3>
        </div>
      </div>
    </div>
  );
};

const AddCourseForm = ({ onAddCourse, onBackToDashboard }) => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    instructor: "",
    startDate: "",
    endDate: "",
    duration: "",
    status: "Not Enrolled"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(course);
    onBackToDashboard();
  };

  return (
    <div className="add-course-form">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={course.instructor}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="startDate"
          value={course.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          value={course.endDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={course.duration}
          onChange={handleInputChange}
        />
        <button type="submit">Add Course</button>
        <button type="button" onClick={onBackToDashboard}>Back to Dashboard</button>
      </form>
    </div>
  );
};
const EditCourseForm = ({ course, onUpdateCourse, onBackToDashboard }) => {
  const [updatedCourse, setUpdatedCourse] = useState(course);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse({ ...updatedCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCourse(updatedCourse);
    onBackToDashboard();
  };

  return (
    <div className="edit-course-form">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={updatedCourse.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={updatedCourse.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={updatedCourse.instructor}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="startDate"
          value={updatedCourse.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          value={updatedCourse.endDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={updatedCourse.duration}
          onChange={handleInputChange}
        />
        <button type="submit">Update Course</button>
        <button type="button" onClick={onBackToDashboard}>Back to Dashboard</button>
      </form>
    </div>
  );
};


// const CourseDetailsPage = ({ selectedCourse, onBackToDashboard }) => {
//   return (
//     <div className="course-details-page">
//       <h1>Course Details</h1>
//       <div>
//         <h2>{selectedCourse.title}</h2>
//         <p><strong>Description:</strong> {selectedCourse.description}</p>
//         <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
//         <p><strong>Start Date:</strong> {selectedCourse.startDate}</p>
//         <p><strong>End Date:</strong> {selectedCourse.endDate}</p>
//         <p><strong>Duration:</strong> {selectedCourse.duration}</p>
//         <p><strong>Status:</strong> {selectedCourse.status}</p>
//       </div>
//       <button onClick={onBackToDashboard}>Back to Dashboard</button>
//     </div>
//   );
// };
// const CourseDetailsPage = ({ selectedCourse, onBackToDashboard, onEditCourse }) => {
//   return (
//     <div className="course-details-page">
//       <h1>Course Details</h1>
//       <div>
//         <h2>{selectedCourse.title}</h2>
//         <p><strong>Description:</strong> {selectedCourse.description}</p>
//         <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
//         <p><strong>Start Date:</strong> {selectedCourse.startDate}</p>
//         <p><strong>End Date:</strong> {selectedCourse.endDate}</p>
//         <p><strong>Duration:</strong> {selectedCourse.duration}</p>
//         <p><strong>Status:</strong> {selectedCourse.status}</p>
//       </div>
//       <div className="course-actions">
//         <button onClick={() => onEditCourse(selectedCourse.id)} className="edit-btn">
//           Edit
//         </button>
//         <button onClick={onBackToDashboard} className="back-btn">
//           Back to Courses
//         </button>
//       </div>
//     </div>
//   );
// };
const CourseDetailsPage = ({ selectedCourse, onBackToDashboard, onEditCourse }) => {
  return (
    <div className="course-details-page">
      <h1>Course Details</h1>
      <div>
        <h2>{selectedCourse.title}</h2>
        <p><strong>Description:</strong> {selectedCourse.description}</p>
        <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
        <p><strong>Start Date:</strong> {selectedCourse.startDate}</p>
        <p><strong>End Date:</strong> {selectedCourse.endDate}</p>
        <p><strong>Duration:</strong> {selectedCourse.duration}</p>
        <p><strong>Status:</strong> {selectedCourse.status}</p>
      </div>
      <div className="course-actions">
        <button onClick={() => onEditCourse(selectedCourse.id)} className="edit-btn">
          Edit
        </button>
        <button onClick={onBackToDashboard} className="back-btn">
          Back to Courses
        </button>
      </div>
    </div>
  );
};

const CoursesListPage = ({ courses, onCourseSelect }) => {
  return (
    <div className="courses-list-page">
      <h1>All Courses</h1>
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>
                <button
                  className="view-details-btn"
                  onClick={() => onCourseSelect(course.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState("login");
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [courses, setCourses] = useState(coursesData);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setCurrentPage("dashboard");
//   };

//   const handleViewCourses = () => {
//     setCurrentPage("courses-list");
//   };

//   const handleCourseDetails = (courseId) => {
//     const course = courses.find((course) => course.id === courseId);
//     setSelectedCourse(course);
//     setCurrentPage("course-details");
//   };

//   const handleAddNewCourse = () => {
//     setCurrentPage("add-course");
//   };

//   const handleAddCourse = (newCourse) => {
//     setCourses((prevCourses) => [
//       ...prevCourses,
//       { ...newCourse, id: prevCourses.length + 1 }
//     ]);
//   };

//   const handleBackToDashboard = () => {
//     setCurrentPage("dashboard");
//   };

//   return (
//     <div className="app">
//       {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
//       {currentPage === "dashboard" && (
//         <AdminDashboard
//           onViewCourses={handleViewCourses}
//           onAddNewCourse={handleAddNewCourse}
//         />
//       )}
//       {currentPage === "courses-list" && (
//         <CoursesListPage courses={courses} onCourseSelect={handleCourseDetails} />
//       )}
//       {currentPage === "add-course" && (
//         <AddCourseForm onAddCourse={handleAddCourse} onBackToDashboard={handleBackToDashboard} />
//       )}
//       {currentPage === "course-details" && selectedCourse && (
//         <CourseDetailsPage
//           selectedCourse={selectedCourse}
//           onBackToDashboard={handleBackToDashboard}
//         />
//       )}
//     </div>
//   );
// };
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState(coursesData);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
  };

  const handleViewCourses = () => {
    setCurrentPage("courses-list");
  };

  const handleCourseDetails = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    setSelectedCourse(course);
    setCurrentPage("course-details");
  };

  const handleAddNewCourse = () => {
    setCurrentPage("add-course");
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prevCourses) => [
      ...prevCourses,
      { ...newCourse, id: prevCourses.length + 1 }
    ]);
  };

  const handleEditCourse = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    setSelectedCourse(course);
    setCurrentPage("edit-course");
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard");
  };

  return (
    <div className="app">
      {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
      {currentPage === "dashboard" && (
        <AdminDashboard
          onViewCourses={handleViewCourses}
          onAddNewCourse={handleAddNewCourse}
        />
      )}
      {currentPage === "courses-list" && (
        <CoursesListPage courses={courses} onCourseSelect={handleCourseDetails} />
      )}
      {currentPage === "add-course" && (
        <AddCourseForm onAddCourse={handleAddCourse} onBackToDashboard={handleBackToDashboard} />
      )}
      {currentPage === "course-details" && selectedCourse && (
        <CourseDetailsPage
          selectedCourse={selectedCourse}
          onBackToDashboard={handleBackToDashboard}
          onEditCourse={handleEditCourse}
        />
      )}
      {currentPage === "edit-course" && selectedCourse && (
        <EditCourseForm
          course={selectedCourse}
          onUpdateCourse={handleUpdateCourse}
          onBackToDashboard={handleBackToDashboard}
        />
      )}
    </div>
  );
};

export default App;
