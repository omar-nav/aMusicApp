import config from "./config"

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`

export default function getArtists() {
  return (
    fetch(URL)
      .then(res => res.json())
      // var retornar el array de artistas
      .then(json => json.topartists.artist)
  )
}
