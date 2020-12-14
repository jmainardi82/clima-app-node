const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encondedUlr = encodeURI(dir);
    //console.log(encondedUlr);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encondedUlr}&appid=b961d33aeb349e920818c3b61755562b`,

        headers: { 'Default': 'b961d33aeb349e920818c3b61755562b' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    //instance.get()
    //  .then(resp => {
    //    console.log(resp.data);
    //})
    //.catch(err => {
    //  console.log('Errrorrrrr', err);
    //});

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}