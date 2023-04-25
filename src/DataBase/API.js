const apiKey = 'jcBNWt6DEm4ZB8o7E3b0kocw4VTingUd';
const endpoint = 'https://api.tomorrow.io/v4/timelines';

const params = {
  location: 'LATITUDE,LONGITUDE',
  fields: ['temperature', 'humidity'],
  units: 'imperial',
  timesteps: ['1d'],
  apikey: apiKey,
};

axios.get(endpoint, { params })
  .then(response => {
    console.log(response.data);
    // Do something with the API data
  })
  .catch(error => {
    console.log(error);
  });
