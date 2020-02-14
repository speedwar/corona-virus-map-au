// Helpers
export const formatLatlng = (latitude, longitude) => {
  let lat = latitude, lng = longitude
  if (typeof latitude || longitude !== 'number') {
    lat = parseFloat(latitude)
    lng = parseFloat(longitude)
  }
  const latlngObj = { lat: lat, lng: lng }
  return latlngObj
}