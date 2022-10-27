import { useState } from "react";
import toast from "react-hot-toast";
import { Tweets } from "../../functions/fetchData";
import Loader from "../Loader";
// import styles from "../../styles/Content.module.css";
import Header from "./Header";
import Tweet from "./tweet";

function Content({ tweets: tweetsProps }) {
  const [tweets, setTweets] = useState(tweetsProps);
  const arr = [0, 0, 0, 0];

  const refresh = async (loadinMsg, successMsg) => {
    const refreshing = toast.loading(loadinMsg);
    const tweets = await Tweets();
    setTweets(tweets);
    toast.success(successMsg, {
      id: refreshing,
    });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header refresh={refresh} />
      {tweets.length > 0
        ? tweets.map((tweet, id) => (
            <Tweet refresh={refresh} tweets={tweets} details={tweet} key={id} />
          ))
        : arr.map(() => <Loader />)}
    </div>
  );
}

export default Content;
