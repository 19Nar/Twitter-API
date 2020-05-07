var Twit = require("twit");
const access_token = "Your_Token";
const access_token_secret = "You_Secret_Token";
const API_key = "Your_Api_Key";
const API_secret_key = "Your_Secret_API_Key";


const tweet = new Twit({
  consumer_key: API_key,
  consumer_secret: API_secret_key,
  access_token: access_token,
  access_token_secret: access_token_secret,
});
console.log(tweet)

let tweets = Object.values(tweet.config).join("/");
console.log(tweets);

var stream = tweet.stream("user");

stream.on("follow", streamFollowed);

const streamFollowed = (e) => {
  console.log("Follow")
  var name = e.source.name;
  var screenName = e.source.screen_name
  justTweetIt(".@" = screenName + "Follow my account")
}

const justTweetIt = (text) => {

  myTweet = {
    status: text
  }
  tweet.post("statuses/update", myTweet, postTweets)

  const postTweets = (err, data, response) => {
    if (err) return reject(err)
    resolve([data, response])
      (console.log(data))
  }
}