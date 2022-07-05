import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import styles from "../style/Home.module.css";
import { useState } from "react";
const Home = () => {
  const pictureProfile = require("../images/profilePicture.png");
  const [isOpen, setIsOpen] = useState(false);
  const footerHome = require("../images/footerHome.png");
  return (
    <div style={{ overflow: isOpen ? "hidden" : "scroll" }}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>
            <Stories />
            <Posts />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.myInformation}>
            <Link to={"/PersonalProfile"}>
              <img src={pictureProfile} alt="" />
            </Link>
            <div className={styles.information}>
              <Link
                to={"/PersonalProfile"}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p className={styles.userName}>vlahovicdusan</p>
              </Link>
              <p className={styles.name}>D V</p>
            </div>
            <p className={styles.passTo}>Passa a</p>
          </div>
          <div className={styles.tips}>
            <h6>Suggerimenti per te</h6>
            <h5>Mostra tutti</h5>
          </div>
          <div className={styles.peopleSuggested}>
            <img src="https://pbs.twimg.com/media/FTRTXFsXEAEc4JU.jpg" alt="" />
            <div className={styles.Information}>
              <p className={styles.userName}>paulpogba</p>
              <p className={styles.Name}>Followed by cristiano +30 more</p>
            </div>
            <p className={styles.PassTo}>Segui</p>
          </div>
          <div className={styles.peopleSuggested}>
            <img
              src="https://www.sportphotogallery.com/content/images/cmsfiles/product/32432/33111-list.jpg"
              alt=""
            />
            <div className={styles.Information}>
              <p className={styles.userName}>leomessi</p>
              <p className={styles.Name}>Followed by neymarjr +50 more</p>
            </div>
            <p className={styles.PassTo}>Segui</p>
          </div>
          <div className={styles.peopleSuggested}>
            <img
              src="https://media.gettyimages.com/photos/paulo-dybala-of-juventus-celebrates-after-scoring-the-opening-goal-picture-id1334142811?s=612x612"
              alt=""
            />
            <div className={styles.Information}>
              <p className={styles.userName}>paulodybala</p>
              <p className={styles.Name}>Followed by neymarjr +18 more</p>
            </div>
            <p className={styles.PassTo}>Segui</p>
          </div>
          <div className={styles.peopleSuggested}>
            <img
              src="https://www.imago-images.com/bild/sp/0048056199/s.jpg"
              alt=""
            />
            <div className={styles.Information}>
              <p className={styles.userName}>toni.kr8s</p>
              <p className={styles.Name}>Followed by cristiano +30 more</p>
            </div>
            <p className={styles.PassTo}>Segui</p>
          </div>
          <div className={styles.peopleSuggested}>
            <img
              src="https://www.spazionapoli.it/wp-content/uploads/2022/04/fbl-ita-seriea-napoli-sassuolo-15-600x400.jpg"
              alt=""
            />
            <div className={styles.Information}>
              <p className={styles.userName}>kkoulibaly26</p>
              <p className={styles.Name}>Followed by osimehn +30 more</p>
            </div>
            <p className={styles.PassTo}>Segui</p>
          </div>
          <div>
            <img style={{ width: "300px" }} src={footerHome} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
