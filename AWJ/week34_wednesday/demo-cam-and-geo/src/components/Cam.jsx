import { useEffect, useCallback, useRef, useState } from 'react'
import Webcam, { getScreenShot } from 'react-webcam'

const Cam = () => {
  const webcamRef = useRef(null)
  const [permissionGranted, setPermissionGranted] = useState(null)
  const [capturedImage, setCapturedImage] = useState(null)

  const checkPermissions = () => {
    navigator.permissions.query({ name: 'camera' }).then((permission) => {
      if (permission.state === 'granted') {
        setPermissionGranted(true)
      } else if (permission.state === 'denied') {
        setPermissionGranted(false)
      } else {
        // Fråga efter permission
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(() => setPermissionGranted(true))
          .catch(() => setPermissionGranted(false))
      }
    })
  }

  useEffect(() => {
    checkPermissions()
  }, []) // när komponenten laddas in

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    // TODO: fetch to image hosting so we get URL from there
    setCapturedImage(imageSrc)
  }, [webcamRef])

  if (permissionGranted === null) {
    return <div>Controlling access...</div>
  }

  if (!permissionGranted) {
    return <div>🚫 Camera access denied, please allow it by changing your browser privacy settings.</div>
  }

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
      />
      <br />
      <button onClick={capture}>Capture photo</button>
      {capturedImage && (
        <div>
          <h3>Captured photo:</h3>
          <img src={capturedImage} alt="Captured photo" />
        </div>
      )}
    </div>
  )
}
export default Cam