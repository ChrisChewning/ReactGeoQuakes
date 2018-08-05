import axios from 'axios'

const usgsQuakeByWeek = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

class QuakeModel {

	static all() {
	const request = axios.get(usgsQuakeByWeek)
	return request
	}
}


export default QuakeModel
