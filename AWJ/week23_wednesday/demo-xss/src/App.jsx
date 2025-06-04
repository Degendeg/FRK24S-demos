import { useRef, useState } from 'react'
import DOMPurify from 'dompurify'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(
    "<img src='gdfgdfdgfdgfdgf' onError=alert('Hacked') />"
  )
  const resultRef = useRef(null)

  const resultHandler = () => {
    resultRef.current.innerHTML = inputValue
    // resultRef.current.innerText = inputValue
  }

  return (
    <>
      <h1>Enter something here</h1>
      <textarea
        className="xss-textarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
      <button className="xss-button" onClick={resultHandler}>Send</button>
      {/* <div ref={resultRef}></div> */}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(inputValue) }}></div>
    </>
  )
}

export default App
