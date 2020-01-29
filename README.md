# The Movie DB

[https://polar-hamlet-59341.herokuapp.com/](https://polar-hamlet-59341.herokuapp.com/)

## Getting Started For Development

Ensure you are using Node v12.

Install required dependencies.

```bash
npm install
```

Define a `.env` file with the API key.

```
JUMBO_TMDB_API_KEY=secretvaluehere123
```

Run the application.

```bash
npm run watch
```

## Releasing

Ensure you have the security key defined in the environment.

```bash
heroku config:set JUMBO_TMDB_API_KEY=secretvaluehere123
```

Push changes to `heroku` remote to deploy changes.

```bash
git push heroku master
```
