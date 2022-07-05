import styles from "../style/SinglePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SinglePost = ({
  img,
  username,
  location,
  randomHours,
  phrase,
  profilePhoto,
  likePhoto,
  randomComment,
  likeUsername,
}) => {
  const commentIcon = require("../images/commentIcon.png");
  const planeIcon = require("../images/planeIcon.png");
  const savePostIcon = require("../images/savePostIcon.png");
  const emojiIcon = require("../images/emojiIcon.png");
  let randomNum = Math.floor(Math.random() * 1000) + 1;
  const [isUsed, setIsUsed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [likeButton, setLikeButton] = useState(randomNum);

  // console.log(randomNum)
  const changeColor = () => {
    setIsUsed(true);
    setIsClicked(true);
    setLikeButton(likeButton + 1);
    if (isClicked) {
      setIsUsed(false);
      setIsClicked(false);
      setLikeButton(likeButton - 1);
    } else if (!isClicked) {
      setIsUsed(true);
      setIsClicked(true);
      setLikeButton(likeButton + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoAccount}>
        <img src={profilePhoto} alt="" />
        <div className={styles.usernLocat}>
          <h4>{username}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className={styles.imgPost}>
        <img src={img} alt="" />
      </div>
      <div className={styles.fontAwesomeContainer}>
        <div className={styles.fontAwesomeContainerLeft}>
          <ul>
            <li style={{ color: isUsed ? "red" : "" }}>
              <FontAwesomeIcon
                id={styles.heartPost}
                onClick={changeColor}
                icon={faHeart}
                size="lg"
              />
            </li>
            <li>
              <img src={commentIcon} id={styles.commentPost} alt="" />
            </li>
            <li>
              <img src={planeIcon} id={styles.planePost} alt="" />
            </li>
          </ul>
        </div>
        <div className={styles.fontAwesomeContainerRight}>
          <img src={savePostIcon} id={styles.savePost} alt="" />
        </div>
      </div>
      <div className={styles.likeContainer}>
        <img src={likePhoto} alt="" />
        <p>
          Piace a <span>{likeUsername}</span> e <span>altri {likeButton}</span>
        </p>
      </div>
      <p id={styles.description}>
        <span>{username}</span> {phrase}
      </p>
      <p id={styles.showComments}>
        Mostra tutti e <span>{randomComment}</span> commenti
      </p>
      <p
        style={{
          marginLeft: "10px",
          color: "#999999",
          marginTop: "-2px",
          fontSize: "10px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        <span>{randomHours}</span> ORE FA
      </p>
      <div className={styles.addComments}>
        <div className={styles.addCommentsLeft}>
          <img src={emojiIcon} alt="" />
          <p>Aggiungi un commento...</p>
        </div>

        <div className={styles.addCommentsRight}>
          <p>Pubblica</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
