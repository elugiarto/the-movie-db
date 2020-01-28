import moment from 'moment';

export default class MovieBasic {
  constructor({id, title, release_date, poster_path, vote_average}) {
    this.id = id;
    this.title = title;
    this.release_date = moment(release_date).format('MMMM YYYY');
    this.poster_path = poster_path;
    this.user_score = (vote_average * 10);
  }
}
