import moment from 'moment';

export default class MovieDetails {
  constructor({id, title, release_date, poster_path, backdrop_path, vote_average, runtime, overview}) {
    this.id = id;
    this.title = title;
    this.release_date = moment(release_date).format('YYYY');
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.user_score = (vote_average * 10);
    this.runtime = this.convertRuntime(runtime);
    this.overview = overview;
  }

  /* Break minutes to hours and minutes */
  convertRuntime(runtime) {
    let hours = runtime / 60;
    const minutes = runtime % 60;
    hours = hours.toString().split(".")[0];

    return `${hours}h ${minutes}min`;
  }
}
