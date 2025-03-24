import FeatureCard from "../comps/FeatureCard"

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Nyheter i React 19</h1>
      <p className="lead">Här är några av de senaste funktionerna i React 19.</p>
      <div className="row mt-4">
        <FeatureCard title="useOptimistic" desc="Optimistiska UI-uppdateringar" link="/optimistic" />
        <FeatureCard title="useFormStatus" desc="Hantera formulärstatus" link="/formstatus" />
        <FeatureCard title="useDeferredValue" desc="Fördröjd rendering för prestanda" link="/deferred" />
      </div>
    </div>
  )
}

export default Home