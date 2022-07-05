import styles from "../style/singleStories.module.css";
import Stories from "react-insta-stories";
import { useState } from "react";

const SingleStories = ({ img, username, imgTwo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openStory = () => {
    setIsOpen(true);
  };
  const closeStory = () => {
    setIsOpen(false);
  };
  const story = [
    {
      url: "https://www.giallorossi.net/wp-content/uploads/2022/06/CRISTIANO-RONALDO.jpg",
      duration: 3000,
    }
  ];
  const instaWrite = require("../images/instaWrite.png");
  return (
    <div>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <div className={styles.storyContainer}>
          <img src={instaWrite} alt="" />
          <p onClick={closeStory} style={{ color: "white", cursor: "pointer" }}>
            X
          </p>
          <div className={styles.story}>
            <Stories
              stories={story}
              keyboardNavigation={true}
              defaultInterval={0}
              width={400}
              height={700}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img onClick={openStory} src={img} alt="" />
        </div>
        <p>{username}</p>
      </div>
    </div>
  );
};

export default SingleStories;
