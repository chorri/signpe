import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from 'contexts'
import { MainLayout, ProtectedRoute, PublicRoute } from 'components'
import { Basic, Dashboard, Home, Login, SetupUser, SignPractice, SignUp } from 'pages'
import { ROUTES } from 'lib/constants'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path={ROUTES.HOME}
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.LOGIN}
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path={ROUTES.SETUP_USER}
              element={
                <ProtectedRoute>
                  <SetupUser />
                </ProtectedRoute>
              }
            />
            <Route element={<MainLayout />}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.BASIC} element={<Basic />} />
              <Route path={`${ROUTES.BASIC}/:signId`} element={<SignPractice />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
