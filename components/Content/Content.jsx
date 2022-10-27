import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Tweets } from "../../functions/fetchData";
import Loader from "../Loader";
// import styles from "../../styles/Content.module.css";
import Header from "./Header";
import Tweet from "./tweet";

function Content() {
  const [tweets, setTweets] = useState([]);
  const arr = [0, 0, 0, 0];
  const fetchData = async () => {
    const tweets = await Tweets();
    setTweets(tweets);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = async (loadinMsg, successMsg) => {
    const refreshing = toast.loading(loadinMsg);
    await fetchData();
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
