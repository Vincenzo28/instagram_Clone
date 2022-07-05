import styles from "../style/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.singleContainer}>
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
      <div className={styles.singleContainer} id={styles.secondContainer}>
        <p>Danza</p>
        <p>Cibo e bevande</p>
        <p>Casa e giardino</p>
        <p>Musica</p>
        <p>Arti Visive</p>
      </div>
      <div className={styles.singleContainer} id={styles.lastContainer}>
        <select name="languages" id="">
            <option  value="">Italiano</option>
        </select>
        <p>&copy; 2022 Instagram from Meta </p>
      </div>
    </div>
  );
};

export default Footer;
