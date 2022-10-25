import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "../../styles/News.module.css";

function Trends() {
  return (
    <div className={styles.trends}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="vercel"
        options={{ height: 600 }}
      />
    </div>
  );
}

export default Trends;
