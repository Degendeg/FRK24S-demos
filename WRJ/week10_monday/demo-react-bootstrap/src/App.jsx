import './App.css'
import { Alert } from 'react-bootstrap';
import TopNav from './TopNav';

function App() {

  return (
    <>
      <TopNav />
      <div className="alert alert-success">
        <strong>Success!</strong> Indicates a successful or positive action.
      </div>
      <br />
      <Alert variant="success">
        This is an alert—check it out!
      </Alert>
    </>
  )
}

export default App
