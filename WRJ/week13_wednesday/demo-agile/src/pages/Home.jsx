import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="card p-4 shadow-lg" style={{ width: '700px' }}>
        <h4 className="text-center">Agila Metoder</h4>
        <p className="text-center">Utforska Scrum och Kanban genom att klicka på länkarna nedan.</p>
        <div className="d-flex justify-content-center">
          <Link to="/scrum" className="btn btn-primary m-2">
            Scrum
          </Link>
          <Link to="/kanban" className="btn btn-success m-2">
            Kanban
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home