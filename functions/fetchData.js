export async function Tweets() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/getTweets");
  const data = await res.json();

  return data.tweets;
}

export async function Comments(tweetId) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/getComments?tweet_id=" + tweetId
  );
  const data = await res.json();

  return data.comments;
}
