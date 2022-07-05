import styles from "../style/PersonalProfile.module.css";
import style from "../style/SignUp.module.css";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import PostsPersonal from "../components/PostsPersonal";
const PersonalProfile = () => {
  const imgProfile = require("../images/profilePicture.png");
  const settingsLogo = require("../images/settingsLogo.png");
  const savePostIcon = require("../images/savePostIcon.png");
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={imgProfile} alt="" />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.headerRightOne}>
              <p style={{fontWeight:'300'}}>vlahovicdusan</p>
              <button>Modifica profilo</button>
              <img src={settingsLogo} alt="" />
            </div>
            <div className={styles.headerRightTwo}>
              <p>
                Post: <span>12</span>
              </p>
              <p style={{cursor:'pointer'}}>
                <span>1.6M</span> follower
              </p>
              <p style={{cursor:'pointer'}}>
                <span>303</span> profili seguiti
              </p>
            </div>
            <div className={styles.headerRightThree}>
              <p style={{fontWeight:'600'}}>D V</p>
              <p style={{color:'#8e8e8e', fontWeight:'500'}}>Atleta</p>
              <p style={{color:'#00376b', cursor:'pointer'}}>@juventus</p>
            </div>
          </div>
        </div>
        <div className={styles.midContainer}>
          <ul>
            <li>
              <FontAwesomeIcon className={styles.icon} icon={faTableCells} style={{height:'13px'}} />
              <p>POST</p>
            </li>
            <li>
              <img src={savePostIcon} className={styles.icon} style={{width:'14px'}} alt="" />
              <p style={{color:'#8e8e8e'}}>ELEMENTI SALVATI</p>
            </li>
            <li>
              <FontAwesomeIcon className={styles.icon} icon={faIdCardClip} style={{height:'13px'}} />
              <p style={{color:'#8e8e8e'}}>POST IN CUI TI HANNO TAGGATO</p>
            </li>
          </ul>
        </div>
        <div className={styles.postContainer}>
            <div>
                <PostsPersonal />
            </div>
        </div>
      </div>
      <footer>
        <div className={style.singleContainer}>
          <p>Meta</p>
          <p>Informazioni</p>
          <p>Blog</p>
          <p>Lavora con noi</p>
          <p>Assistenza</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Condizioni</p>
          <p>Account più popolari</p>
          <p>Hashtag</p>
          <p>Luoghi</p>
          <p>Instagram Lite</p>
          <p>Caricamento dei contatti e non-utenti</p>
        </div>
        <div className={style.singleContainer} id={style.lastContainer}>
          <select name="languages" id="">
            <option value="">
              Italiano
            </option>
          </select>
          <p>&copy; 2022 Instagram from Meta </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalProfile;
