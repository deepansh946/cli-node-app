require('dotenv').config();

const Axios = require('axios');

const url = `http://www.omdbapi.com/?apikey=${process.env.omdbApiKey}`;

const getMovie = async (title, year) => {
  try {
    const titleArg = `t=${title ? title : ''}`;
    const yearArg = `y=${year ? year : ''}`;

    const reqUrl = url + '&' + titleArg + '&' + yearArg;

    const res = await Axios({
      url: reqUrl,
      method: 'GET'
    });

    const { Title, Released, Genre, Country, imdbRating, Director } = res.data;

    const response = {
      Title,
      Released,
      Genre,
      Country,
      imdbRating,
      Director
    };
    console.info(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getMovie };
