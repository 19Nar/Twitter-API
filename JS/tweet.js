var Twit = require("twit");
const access_token = "4678874198-5pblAoT8XksHprNq55rDxLI4LZx59BW2K1n5Kkm";
const access_token_secret = "Baf2LklfkwJgpN4kPgSuwxQugXAFtddEaUExlSh3mZyn7";
const API_key = "OV8PmRCsn3Co2KgHiH7G2utN4";
const API_secret_key = "C3CWCaaGiOgkCCTm68GNi60foiIeSKUjYLzj1ac6yhJ1GZ6LUC";


const t = new Twit({
  consumer_key: API_key,
  consumer_secret: API_secret_key,
  access_token: access_token,
  access_token_secret: access_token_secret,
});

/*

var stream = t.stream('statuses/filter', { track: '#apple', language: 'en' })
stream.on('tweet', function (tweet) {
  console.log(tweet)
})


t.get("search/tweets", { q: "corona since:2011-07-11", count: 5 }, function (
  err,
  data,
  response
) {
  console.log(err, data);
});


t.post("statuses/update", { status: "hello world!" }, function (
  err,
  data,
  response
) {
  console.log(data);
})

*/