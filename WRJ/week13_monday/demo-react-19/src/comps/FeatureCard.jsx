import { Link } from "react-router-dom"

const FeatureCard = ({ title, desc, link }) => (
  <div className="col-md-4">
    <div className="card shadow-sm p-3">
      <h4><a href={title.includes('useFormStatus') ? "https://react.dev/reference/react-dom/hooks/useFormStatus" : `https://react.dev/reference/react/${title}`}
        target="_blank">{title}</a></h4>
      <p>{desc}</p>
      <Link to={link} className="btn btn-primary">Läs mer</Link>
    </div>
  </div>
)

export default FeatureCard