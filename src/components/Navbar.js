import styles from "../style/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const paperPlane = require("../images/paperPlane.png");
  const compass = require("../images/compass.png");
  const profilePicture = require("../images/profilePicture.png");
  const squarePlus = require("../images/squarePlus.png");
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState(null);

  const openBox = () => {
    setIsOpen(true);
    setIsClicked(true);
    if (isClicked) {
      setIsOpen(false);
      setIsClicked(false);
    } else if (!isClicked) {
      setIsOpen(true);
      setIsClicked(true);
    }
  };

  const handleImageCHange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    console.log(image);
  };
    const handleSubmit = () => {
      const imageRef = ref(storage, "images");
      uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          setUrl(url);
        });
      });
    };


  return (
    <div>
      <div className={styles.container}>
        <Link to="/Home">
          <div className={styles.logoInsta}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt=""
            />
          </div>
        </Link>

        <div className={styles.searchBar}>
          <form action="">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ paddingLeft: "8px", color: "#8e8e8e" }}
              size="1x"
            />
            <input type="text" placeholder="Cerca" />
          </form>
        </div>
        <div className={styles.listIcons}>
          <ul>
            <Link to="/Home" style={{ color: "inherit" }}>
              <li id={styles.iconHouse}>
                <FontAwesomeIcon id={styles.house} icon={faHouse} size="lg" />
              </li>
            </Link>

            <li id={styles.iconPlane}>
              <img src={paperPlane} alt="" />
            </li>
            <li id={styles.iconSquarePlus}>
              <input
                type="file"
                name=""
                style={{ display: "none" }}
                id="file-input"
                onChange={handleImageCHange}
                onClick={handleSubmit}
              />
              <label style={{ cursor: "pointer" }} htmlFor="file-input">
                <img src={squarePlus} alt="" />
              </label>
            </li>
            <li id={styles.iconCompass}>
              <img src={compass} alt="" />
            </li>

            <li id={styles.iconHeart}>
              <FontAwesomeIcon id={styles.heart} icon={faHeart} size="lg" />
            </li>
            <li id={styles.iconPicture} onClick={openBox}>
              <img src={profilePicture} alt="" />
            </li>
          </ul>
        </div>
        <div
          className={styles.box}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className={styles.arrow}>
            <h6 style={{ color: "white" }}>^</h6>
          </div>
          <Link
            to="/PersonalProfile"
            style={{ color: "inherit", textDecoration: " none" }}
          >
            <div className={styles.linkProfile}>
              <p>
                <FontAwesomeIcon icon={faCircleUser} /> <span>Profilo</span>
              </p>
            </div>
          </Link>
          <Link
            to="/logout"
            style={{ color: "inherit", textDecoration: " none" }}
          >
            <div className={styles.linkLogOut}>
              <p>Esci</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
