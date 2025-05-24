| アーキテクチャ		| バージョン |
| ---							| --- |
| Linux(web)			| 3.14.42-31.38.amzn1.x86_64 (mockbuild@gobi-build-64012) (gcc version 4.8.2 20140120 (Red Hat 4.8.2-16) (GCC)) |
| Linux(pubsub)		| 3.14.35-28.38.amzn1.x86_64 (mockbuild@gobi-build-64012) (gcc version 4.8.2 20140120 (Red Hat 4.8.2-16) (GCC)) |
| Apache					| 2.4.12 |
| Node						| 0.12.2 |
| PHP							| 5.6.9 |
| MySQL						| 5.6.23 |
| jQuery					| 1.11.0 |
## Twitter Following Feed

This sample app displays tweets from accounts you follow using the Twitter API.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set your Twitter API credentials as environment variables:
   - `TWITTER_CONSUMER_KEY`
   - `TWITTER_CONSUMER_SECRET`
   - `TWITTER_ACCESS_TOKEN`
   - `TWITTER_ACCESS_TOKEN_SECRET`
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to see the feed.
