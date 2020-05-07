var Twit = require("twit");
const access_token = "Your_Token";
const access_token_secret = "You_Secret_Token";
const API_key = "Your_Api_Key";
const API_secret_key = "Your_Secret_API_Key";


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
