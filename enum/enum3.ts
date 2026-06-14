const app = express();


enum ResponseStatusCode {                             /* Let we are using enum here, then it will help to know the status codes in more human-readable form. */

  Success = 200,
  NotFound = 404,
  Error = 500

}

app.get("/", (req, res) => {                          /* Normally we do like this in express, hit the backend with route and get the data with the status code. */

  if(!req.query.userId) {

    res.status(ResponseStatusCode.NotFound).json({}); /* As a beginner a person might get confused if we directly write status code of 404 so it will helpful if we use enum constraints like here "ResponseStatusCode.NotFound". */

  }

});