const program = require('commander');
const { getMovie } = require('./imdb');
const { getTrack } = require('./spotify');

program.version('1.0.0').description('CLI App');

program
  .command('get-movie <title>')
  .alias('g')
  .description('Get Movie details')
  .action(title => {
    getMovie(title);
  });

program
  .command('get-track <query>')
  .description('Get Song details')
  .action(query => {
    getTrack(query);
  });

program.parse(process.argv);
// console.log(movie);
