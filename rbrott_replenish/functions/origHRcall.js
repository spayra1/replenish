/**
* A simple "hello world" function
*/
module.exports = async (accessToken = '') => {
  const axios = require('axios');
  return await axios({
    method: 'get',
    url: 'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    responseType: 'json'
  })
  .then(function(response) {
    return response.data;
  });
};


// example "response.data" out:
//   {
//   "activities-heart": [
//     {
//       "dateTime": "2018-11-11",
//       "value": {
//         "customHeartRateZones": [],
//         "heartRateZones": [
//           {
//             "caloriesOut": 550.50384,
//             "max": 101,
//             "min": 30,
//             "minutes": 351,
//             "name": "Out of Range"
//           },
//           {
//             "caloriesOut": 88.98776,
//             "max": 142,
//             "min": 101,
//             "minutes": 16,
//             "name": "Fat Burn"
//           },
//           {
//             "caloriesOut": 0,
//             "max": 172,
//             "min": 142,
//             "minutes": 0,
//             "name": "Cardio"
//           },
//           {
//             "caloriesOut": 0,
//             "max": 220,
//             "min": 172,
//             "minutes": 0,
//             "name": "Peak"
//           }
//         ],
//         "restingHeartRate": 67
//       }
//     }
//   ]
// }