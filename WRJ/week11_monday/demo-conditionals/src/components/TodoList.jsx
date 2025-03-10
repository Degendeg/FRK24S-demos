const TodoList = ({ data }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todo Lista</h2>
      <div className="row">
        {data.map((d) => (
          <div key={d.id} className="col-md-4">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text">
                  Status: {d.completed ? (
                    <span className="badge bg-success">Klar</span>
                  ) : (
                    <span className="badge bg-warning text-dark">Ej klar</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TodoList