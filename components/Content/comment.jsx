import TimeAgo from "react-timeago";
import styles from "../../styles/Content.module.css";

function Comment({ details }) {
  const { _updatedAt, comment, profileImg, username } = details;
  return (
    <div className={styles.comment_box}>
      <img src={profileImg} alt="img" />
      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.name}>{username} </div>
          <div className={styles.username}>
            @{username.replace(/\s+/g, "").toLowerCase()}
          </div>
          <div className={styles.date}>
            . <TimeAgo date={_updatedAt} />
          </div>
        </div>
        <div className={styles.comment}>{comment}</div>
      </div>
      {/* <div className={styles.title}></div> */}
    </div>
  );
}

export default Comment;
