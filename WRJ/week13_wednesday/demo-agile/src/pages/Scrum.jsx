import { useNavigate } from "react-router-dom"

const Scrum = () => {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
        <h4 className="text-center">Scrum Metod</h4>
        <p>
          Scrum är en agil metod för projektledning som fokuserar på att leverera produkter i inkrementella sprintar.
        </p>
        <ul>
          <li>Sprint Planering</li>
          <li>Dagliga Standups</li>
          <li>Retrospektiv</li>
        </ul>

        <div className="my-4">
          <iframe style={{ borderRadius: '10px' }}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/9TycLR0TqFA?si=UC0WloB9OLmVmUiU&autoplay=1&mute=1"
            allow="autoplay; encrypted-media"
            title="Scrum Overview"
          ></iframe>
        </div>

        <button className="btn btn-primary" onClick={() => navigate(-1)}>Tillbaka</button>
      </div>
    </div>
  )
}

export default Scrum