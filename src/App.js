import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import UserFront from "@userfront/react"
import Dashboard from "./components/Dashboard"

UserFront.init("demo1234")
const SignupForm = UserFront.build({
  toolId: "nkmbbm",
})

const LoginForm = UserFront.build({
  toolId: "alnkkd"
})

const PasswordResetForm = UserFront.build({
  toolId: "dkbmmo"
})



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />}>

          </Route>
          <Route path="/reset" element={<PasswordReset />}>

          </Route>
          <Route path="/dashboard" element={<Dashboard />}>

          </Route>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SignupForm />
    </div>
  )
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  )
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  )
}

