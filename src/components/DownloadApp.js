import styles from "../style/DownloadApp.module.css";
const DownloadApp = () => {
  const googlePlay = require("../images/googlePlay.png");
  const appStore = require("../images/appStore.png");
  return (
    <div className={styles.Container}>
      <p>Scarica l'applicazione.</p>
      <div className={styles.storeApp}>
        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
          <img src={appStore} alt="" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE5927039-E467-46D3-A9B6-FAADBECC04E9%26utm_content%3Dlo%26utm_medium%3Dbadge">
          <img id={styles.img2} src={googlePlay} alt="" />
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
