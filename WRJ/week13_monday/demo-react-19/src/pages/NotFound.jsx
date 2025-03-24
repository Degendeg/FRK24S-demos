import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center mt-5">
      <div style={{ marginTop: '20vh' }}>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-2 fw-medium text-danger mt-4">Oops! Page not found</p>
        <p className="mt-4 mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <button className="btn btn-danger rounded-pill px-4 py-2" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  )
}

export default NotFound