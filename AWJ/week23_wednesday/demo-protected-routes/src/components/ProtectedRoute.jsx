import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const isAuthenticated = () => {
    // dummy auth logic, this should be compared on the server!!!!!!!!!!!
    return sessionStorage.getItem('token') === 'frk24s_token_here'
  }
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
  )
}
export default ProtectedRoute