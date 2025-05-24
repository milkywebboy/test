const express = require('express');
const Twit = require('twit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const twitterConfig = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

const T = new Twit(twitterConfig);

app.get('/', (req, res) => {
  // fetch home timeline tweets (from followings)
  T.get('statuses/home_timeline', { count: 20, tweet_mode: 'extended' }, (err, data, response) => {
    if (err) {
      console.error(err);
      return res.render('index', { tweets: [], error: 'Error fetching tweets' });
    }
    res.render('index', { tweets: data, error: null });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
