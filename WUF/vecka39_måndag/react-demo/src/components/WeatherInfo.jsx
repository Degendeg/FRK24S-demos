import weatherInfoStyles from '../styles/info.module.css'

const WeatherInfo = () => {
  const fakeInfo = {
    temp: '17 C°',
    type: 'Sunny ☀️',
    location: 'Stockholm'
  }
  return (
    <div>
      <h3>Weather Info:</h3>
      <ul style={weatherInfoStyles}>
        <li>{fakeInfo.temp}</li>
        <li>{fakeInfo.type}</li>
        <li>{fakeInfo.location}</li>
      </ul>
    </div>
  )
}
export default WeatherInfo