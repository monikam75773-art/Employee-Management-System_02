import { useState } from "react";

function App() {
  const [page, setPage] = useState("register");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const register = () => {
    if (!registerEmail || !registerPassword) {
      alert("Fill all fields");
      return;
    }

    alert("Registered successfully!");
    setPage("login");
  };

  const login = () => {
    if (!loginEmail || !loginPassword) {
      alert("Fill all fields");
      return;
    }

    setPage("dashboard");
  };

  const addEmployee = () => {
    if (!name || !department || !email || !phone) {
      alert("Fill all fields");
      return;
    }

    const newEmployee = {
      name,
      department,
      email,
      phone,
    };

    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = newEmployee;
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, newEmployee]);
    }

    setName("");
    setDepartment("");
    setEmail("");
    setPhone("");
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter(
      (_, i) => i !== index
    );

    setEmployees(updatedEmployees);
  };

  const editEmployee = (index) => {
    const emp = employees[index];

    setName(emp.name);
    setDepartment(emp.department);
    setEmail(emp.email);
    setPhone(emp.phone);

    setEditIndex(index);
  };

  if (page === "register") {
    return (
      <div style={styles.container}>
        <h1>Register</h1>

        <input
          type="email"
          placeholder="Email"
          value={registerEmail}
          onChange={(e) =>
            setRegisterEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={registerPassword}
          onChange={(e) =>
            setRegisterPassword(e.target.value)
          }
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={register}
          style={{ marginLeft: "10px" }}
        >
          Register
        </button>

        <p>
          Already registered?{" "}
          <a
            href="#"
            onClick={() => setPage("login")}
          >
            Login
          </a>
        </p>
      </div>
    );
  }

  if (page === "login") {
    return (
      <div style={styles.container}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) =>
            setLoginEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) =>
            setLoginPassword(e.target.value)
          }
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={login}
          style={{ marginLeft: "10px" }}
        >
          Login
        </button>

        <p>
          No account?{" "}
          <a
            href="#"
            onClick={() => setPage("register")}
          >
            Register here
          </a>
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Employee Dashboard</h1>

      <button
        onClick={() => setPage("login")}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "5px 10px",
          marginBottom: "20px",
        }}
      >
        Logout
      </button>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
          style={{ marginLeft: "5px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "5px" }}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginLeft: "5px" }}
        />

        <button
          onClick={addEmployee}
          style={{ marginLeft: "5px" }}
        >
          {editIndex !== null
            ? "Update Employee"
            : "Add Employee"}
        </button>
      </div>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>

              <td>
                <button
                  onClick={() => editEmployee(index)}
                >
                  Update
                </button>

                <button
                  onClick={() => deleteEmployee(index)}
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
};

export default App;