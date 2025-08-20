import { useEffect } from "react"
import { useGeolocated } from "react-geolocated"

const Geo = ({ mapCoords, setMapCoords }) => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 15000,
  })

  useEffect(() => {
    if (coords) {
      setMapCoords({ lat: coords.latitude, lng: coords.longitude })
    }
  }, [coords])

  return !isGeolocationAvailable ? (
    <div>Your browser does not support GeoLocation API.</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled, please check your browser settings.</div>
  ) : mapCoords ? (
    <center>
      <table>
        <tbody>
          <tr>
            <td><strong>Latitude</strong></td>
            <td>{mapCoords.lat}</td>
          </tr>
          <tr>
            <td><strong>Longitude</strong></td>
            <td>{mapCoords.lng}</td>
          </tr>
        </tbody>
      </table>
    </center>
  ) : (<div>Getting location data...</div>)
}
export default Geo