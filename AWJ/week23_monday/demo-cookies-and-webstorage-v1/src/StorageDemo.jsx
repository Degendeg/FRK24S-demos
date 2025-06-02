import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

const StorageDemo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['demoCookie'])
  const [localStorageValue, setLocalStorageValue] = useState('')
  const [sessionStorageValue, setSessionStorageValue] = useState('')

  useEffect(() => {
    const localStorageItem = localStorage.getItem('demoLocalStorage')
    if (localStorageItem) {
      setLocalStorageValue(localStorageItem)
    }

    const sessionStorageItem = sessionStorage.getItem('demoSessionStorage')
    if (sessionStorageItem) {
      setSessionStorageValue(sessionStorageItem)
    }
  }, [])

  const handleLocalStorageChange = (e) => {
    const value = e.target.value
    setLocalStorageValue(value)
    localStorage.setItem('demoLocalStorage', value)
  }

  const handleSessionStorageChange = (e) => {
    const value = e.target.value
    setSessionStorageValue(value)
    sessionStorage.setItem('demoSessionStorage', value)
  }

  const handleCookieChange = (e) => {
    setCookie('demoCookie', e.target.value, { path: '/' })
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('demoLocalStorage')
    setLocalStorageValue('')
  }

  const clearSessionStorage = () => {
    sessionStorage.removeItem('demoSessionStorage')
    setSessionStorageValue('')
  }

  const clearCookie = () => {
    removeCookie('demoCookie')
  }

  return (
    <div>
      {/* Cookie */}
      <div className={`box ${cookies.demoCookie ? 'box-bg' : ''}`}>
        <h2>
          <a href="https://www.npmjs.com/package/react-cookie" target="_blank">
            Cookie
          </a>
        </h2>
        <sup onClick={clearCookie}>Clear</sup>
        <input type="text" value={cookies.demoCookie || ''} onChange={handleCookieChange} />
        <p><strong>Value</strong>: {cookies.demoCookie || 'not set'}</p>
      </div>

      {/* LocalStorage */}
      <div className={`box ${localStorageValue ? 'box-bg' : ''}`}>
        <h2>
          <a href="https://www.w3schools.com/jsref/prop_win_localstorage.asp" target="_blank">
            localStorage
          </a>
        </h2>
        <sup onClick={clearLocalStorage}>Clear</sup>
        <input type="text" value={localStorageValue || ''} onChange={handleLocalStorageChange} />
        <p><strong>Value</strong>: {localStorageValue || 'not set'}</p>
      </div>

      {/* SessionStorage */}
      <div className={`box ${sessionStorageValue ? 'box-bg' : ''}`}>
        <h2>
          <a href="https://www.w3schools.com/jsref/prop_win_sessionstorage.asp" target="_blank">
            sessionStorage
          </a>
        </h2>
        <sup onClick={clearSessionStorage}>Clear</sup>
        <input type="text" value={sessionStorageValue || ''} onChange={handleSessionStorageChange} />
        <p><strong>Value</strong>: {sessionStorageValue || 'not set'}</p>
      </div>
    </div>
  )
}
export default StorageDemo