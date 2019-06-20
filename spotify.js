require('dotenv').config();

const Spotify = require('node-spotify-api');

const spotify = new Spotify({
  id: process.env.spotifyId,
  secret: process.env.spotifySecret
});

const getTrack = async query => {
  try {
    const res = await spotify.search({ type: 'track', query });

    const { items } = res.tracks;

    const result = items.map((val, i) => {
      const tmp = val.album;
      const { artists, name, release_date } = tmp;
      const artistNames = artists.map((artist, i) => {
        return artist.name;
      });

      return {
        Name: name,
        Artists: artistNames,
        'Release Date': release_date
      };
    });

    console.info(result);
  } catch (error) {
    console.info(error);
  }
};

module.exports = { getTrack };
