import { useState } from "react";
import toast from "react-hot-toast";
import { Tweets } from "../../functions/fetchData";
// import styles from "../../styles/Content.module.css";
import Header from "./Header";
import Tweet from "./tweet";

function Content({ tweets: tweetsProps }) {
  const [tweets, setTweets] = useState(tweetsProps);

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
      {/* {tweets.map((tweet, id) => (
        <Tweet refresh={refresh} tweets={tweets} details={tweet} key={id} />
      ))} */}
    </div>
  );
}

export default Content;
