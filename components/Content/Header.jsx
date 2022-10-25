import { TbRefresh } from "react-icons/tb";
import { IoImageOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule, AiOutlineFileGif } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

import toast from "react-hot-toast";
import styles from "../../styles/Content.module.css";

function Header({ refresh }) {
  const [postValue, setPostValue] = useState("");
  const [isImgFormOpen, setIsImgFormOpen] = useState(false);
  const [imgURL, setImgURL] = useState(null);
  const [isImgSuccess, setIsImgSuccess] = useState(false);
  const [imgInput, setImgInput] = useState("");
  const { data } = useSession();

  const imgError = () => {
    toast.error("Failed to upload image, Please change the URL.");
    setImgURL(null);
  };

  const imgSuccess = () => {
    toast.success("Upload the image successfly.");
    setIsImgSuccess(true);
  };

  const submitTweet = async (e) => {
    e.preventDefault();

    if (!data) {
      return toast.error(() => (
        <span style={{ textAlign: "center" }}>
          You must be
          <b style={{ color: "#f009" }}>logged in</b>
          to post a Tweet.
          <button className={styles.signBtn} onClick={signIn} type="submit">
            SignIn
          </button>
        </span>
      ));
    }
    const tweetInfo = {
      text: postValue,
      username: data?.user?.name || "Undefined",
      profileImg: data?.user?.image || "https://links.papareact.com/gll",
      image: imgURL || "",
    };
    const result = await fetch("/api/addTweet", {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });

    const json = result.json();
    await refresh("Loading... ", "Tweet posted");

    setPostValue("");
    setImgURL(null);
    setIsImgSuccess(false);
    setIsImgFormOpen(false);

    return json;
  };

  return (
    <>
      <div className={styles.refresh_section}>
        <h2 className={styles.title}>Home</h2>
        <h2
          className={styles.refresh_icon}
          onClick={() => refresh("Refreshing... ", "Home page updated")}
        >
          <TbRefresh />
        </h2>
      </div>
      <div className={styles.header}>
        <div className={styles.tweet_box}>
          <picture>
            <img
              src={data?.user?.image || "https://links.papareact.com/gll"}
              alt="img"
            />
          </picture>
          <form onSubmit={submitTweet}>
            <input
              type="text"
              value={postValue}
              onChange={(e) => setPostValue(e.target.value)}
              placeholder="Wat's happening"
            />

            {imgURL && (
              <div className={styles.show_img_box}>
                <picture>
                  <img
                    onLoad={imgSuccess}
                    onError={imgError}
                    className={styles.img_url}
                    src={imgURL}
                    alt="img"
                  />
                </picture>
                <div
                  className={styles.cancel_img_btn}
                  onClick={() => {
                    setImgURL(null);
                    setIsImgSuccess(false);
                  }}
                >
                  X
                </div>
              </div>
            )}

            <div className={styles.options}>
              <div className={styles.icons}>
                <IoImageOutline
                  onClick={() => setIsImgFormOpen(!isImgFormOpen)}
                  className={styles.icon}
                />
                <AiOutlineFileGif className={styles.icon} />
                <BiPoll className={styles.icon} />
                <BsEmojiSmile className={styles.icon} />
                <AiOutlineSchedule className={styles.icon} />
                <HiOutlineLocationMarker className={styles.icon} />
              </div>
              <button
                type="submit"
                className={`${styles.btn_submit} ${
                  (postValue || isImgSuccess) && styles.btn_submit_after
                }`}
                disabled={!postValue && !isImgSuccess}
              >
                Tweet
              </button>
            </div>

            {isImgFormOpen && (
              <div className={styles.add_img_box}>
                <input
                  onChange={(e) => setImgInput(e.target.value)}
                  type="text"
                  value={imgInput}
                  placeholder="Enter img URL..."
                />
                <div
                  onClick={() => {
                    imgInput && setImgURL(imgInput);
                    setIsImgFormOpen(false);
                    setImgInput("");
                  }}
                  className={styles.add_img_btn}
                >
                  Add img
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
