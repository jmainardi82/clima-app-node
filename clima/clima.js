const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b961d33aeb349e920818c3b61755562b&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}