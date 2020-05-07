//const tweetsInput = document.querySelector("#tweetSearch");
//const searchTweetButton = document.querySelector("#search");

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


const searchTweets = (searchQuery) => new Promise((resolve, reject) => {
  tweet.get("search/tweets", { q: "mobile since:2019-07-11", count: 5 }, (err, data, response) => {
    if (err) return reject(err)
    resolve([data, response])
    console.log(searchQuery)
  })
});

search.onclick = async () => {
  const [data, response] = await searchTweets()
  console.log(data, response)
  showTweetsResults(data.statuses)
};

const showTweetsResults = (allResults) => {

  results.innerHTML = "";
  let html = ""

  allResults.forEach(function (item, i) {

    html +=
      `
      <div class="container">
<div class="row bg-muted">
 <div class="col-sm-2 p-2 text-primary text-center">
   <span id="text-center">Name: ${item.user.name}</span>
 </div>
 <div class="col-sm-2 p-2 text-center">
   <span id="text-center">Location: ${item.user.location}</span>
 </div>
 <div class="col-sm-2 p-2 text-primary text-center">
   <span id="text-center">Friends: ${item.user.friends_count}</span>
   </div>
   <div class="col-sm-2 p-2  text-center ">
   <span id="text-center">Followers: ${item.user.followers_count}</span>
   </div>
   <div class="col-sm-4 p-2 text-primary text-center">
   <span id="text-center">Profile: ${item.user.profile_background_image_url_https} </span>
 </div>
 </div>
 </div>

      `
  })
  results.innerHTML = html;
};

