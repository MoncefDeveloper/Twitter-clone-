import { RiMoreFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import TimeAgo from "react-timeago";
import { useState, useEffect } from "react";

import { useSession, signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Comment from "./comment";
import { Comments } from "../../functions/fetchData";
import styles from "../../styles/Content.module.css";

function Tweet({ details, refresh, tweets }) {
  const [comments, setComments] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [numbers, setNumbers] = useState({
    one: Math.ceil(Math.random() * 10),
    two: Math.ceil(Math.random() * 100),
  });
  const [input, setInput] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const { username, _id, _updatedAt, text, profileImg, image } = details;
  const { data } = useSession();
  const getComments = () => {
    Comments(_id).then((data) => setComments(data));
  };

  useEffect(() => {
    getComments();
  }, [tweets]);

  // eslint-disable-next-line consistent-return
  const submitComment = async (e) => {
    e.preventDefault();

    if (!data) {
      return toast.error(() => (
        <span style={{ textAlign: "center" }}>
          You must be <b style={{ color: "#f009" }}>logged in</b> to post a
          comment.
          <button className={styles.signBtn} onClick={signIn} type="submit">
            SignIn
          </button>
        </span>
      ));
    }

    const tweetInfo = {
      comment: input,
      username: data?.user?.name || "Undefined",
      profileImg: data?.user?.image || "https://links.papareact.com/gll",
      tweet_id: _id,
    };
    await fetch("/api/addComment", {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    }).then(() => {
      getComments();
      setInput("");
    });

    await refresh("Loading... ", "Comment posted");
  };

  const [hideComment, setHideComment] = useState(true);
  return (
    <div className={styles.tweet_post_box}>
      <img className={styles.profile_img} src={profileImg} alt="img" />
      <div className={styles.post}>
        <div className={styles.top}>
          <div className={styles.title}>
            <div className={styles.name}>{username}</div>
            <div className={styles.username}>
              @{username.replace(/\s+/g, "").toLowerCase()}
            </div>
            <div className={styles.date}>
              . <TimeAgo date={_updatedAt} />
            </div>
            {/* <div className={styles.date}>. </div> */}
          </div>
          <div className={styles.option}>
            <RiMoreFill />
          </div>
        </div>
        {text && <div className={styles.descrption}>{text}</div>}
        {details?.image && (
          <img className={styles.post_img} src={image} alt="img" />
        )}
        <div className={styles.options}>
          <div
            onClick={() => {
              setHideComment(!hideComment);
              setShowCommentForm(!showCommentForm);
            }}
            className={`${styles.icon} ${styles.sym_1}`}
          >
            <div className={styles.sym}>
              <BiComment />
            </div>
            <div className={styles.count}>{comments.length}</div>
          </div>
          <div className={`${styles.icon} ${styles.sym_2}`}>
            <div className={styles.sym}>
              <IoReload />
            </div>
            <div className={styles.count}>{numbers.one}</div>
          </div>

          <div className={`${styles.icon} ${styles.sym_3}`}>
            <div className={styles.sym}>
              <AiOutlineHeart />
            </div>
            <div className={styles.count}>{numbers.two}</div>
          </div>
          <div className={`${styles.icon} ${styles.sym_4}`}>
            <div className={styles.sym}>
              <FiUpload />
            </div>
          </div>
        </div>

        {!hideComment &&
          comments.length > 0 &&
          comments.map((comment, id) => <Comment details={comment} key={id} />)}

        {showCommentForm && (
          <form className={styles.add_comment_box} onSubmit={submitComment}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tweet your reply"
            />
            <button
              type="submit"
              disabled={!input}
              className={`${styles.add_comment_btn} ${
                !input && styles.add_comment_btn_no_effect
              }`}
            >
              Post
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Tweet;
