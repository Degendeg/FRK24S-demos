import { Navigate, Outlet } from "react-router-dom"

const Guard = () => {
  const token = sessionStorage.getItem('jwt')
  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
}
export default Guard