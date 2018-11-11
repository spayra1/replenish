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
    let HRinfo = response.data;
    return(HRinfo);
  });
  
  
module.exports = async (accessToken = '') => {
  /**
  * out of range (resting heart rate) means you just need to be on track for baseline water consumption
  * which is 2/3 of your body weight, in fluid ounces. 
  * if you're in 'fat burn' mode, you should get 6 extra ounces per 30 minutes activity
  * if you're in 'cardio' mode, you should get 12 extra ounces per 30 minutes activity
  */
  let waterNeed = (OutOfRange-minutes)/(24*60)*(bodyWeight*2/3)+(fatBurn-minutes)/30*6+(cardio-minutes)/30*12;
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