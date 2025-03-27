import { useNavigate } from "react-router-dom"
import Draggable from "react-draggable"
import { useRef } from "react"

const Kanban = () => {
  const navigate = useNavigate()
  const nodeRef = useRef()
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
        <h4 className="text-center">Kanban Metod</h4>
        <p>
          Kanban är en metod för att visualisera och optimera arbetsflödet. Använd en Kanban-tavla för att hantera uppgifter.
        </p>
        <div className="d-flex justify-content-center">
          <Draggable bounds="parent" nodeRef={nodeRef}>
            <div className="m-2">
              <h5>Todo</h5>
              <div className="card p-2 shadow-sm">Uppgift 1</div>
              <div className="card p-2 shadow-sm">Uppgift 2</div>
            </div>
          </Draggable>
          <Draggable bounds="parent" nodeRef={nodeRef}>
            <div className="m-2">
              <h5>Doing</h5>
              <div className="card p-2 shadow-sm">Uppgift 3</div>
            </div>
          </Draggable>
          <Draggable bounds="parent" nodeRef={nodeRef}>
            <div className="m-2">
              <h5>Done</h5>
              <div className="card p-2 shadow-sm">Uppgift 4</div>
            </div>
          </Draggable>
        </div>
        <div className="my-4">
          <iframe style={{ borderRadius: '10px' }}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/GM8R15Yc_do?si=P4SdE-IUfv3uiu-s&autoplay=1&mute=1"
            allow="autoplay; encrypted-media"
            title="Kanban Overview"
          ></iframe>
        </div>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Tillbaka</button>
      </div>
    </div>
  )
}

export default Kanban