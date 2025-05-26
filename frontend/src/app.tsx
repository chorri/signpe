import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Dashboard, Home, Login, SignUp } from 'pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
