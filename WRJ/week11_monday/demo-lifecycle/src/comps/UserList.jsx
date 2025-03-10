import { useEffect, useState } from "react"

const UserList = () => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log("🔵 Komponent har mountats eller uppdaterats")
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${count}`)
      .then(res => res.json())
      .then(data => setUsers(data))
    return () => {
      console.log("🔴 Komponenten har unmountats")
    }
  }, [count]) // Körs vid första rendering + när count ändras

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Användarlista ({count})</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={() => setCount(count + 1)}>
        Uppdatera lista 👤
      </button>
    </div>
  )
}
export default UserList