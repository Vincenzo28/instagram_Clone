import { Link } from "react-router-dom";
import styles from "../style/SignUp.module.css";
import DownloadApp from "../components/DownloadApp";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../store/actions/handleSignUp";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  const logo = require("../images/logoFb.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.logInReducer.token);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(email, password));
    setEmail("");
    setPassword("");
  };
  let shouldRedirect = null;
  if (token) {
    shouldRedirect = <Navigate to="/" />;
  }

  return (
    <div className={styles.Container}>
      {shouldRedirect}
      <div className={styles.authContainer}>
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt=""
        />
        <p>Iscriviti per vedere le foto e i video dei tuoi amici.</p>
        <div className={styles.signInFacebook}>
          <img src={logo} alt="" />
          <h6>Accedi con Facebook</h6>
        </div>
        <div className={styles.ulList}>
          <ul>
            <li className={styles.li}></li>
            <li id={styles.o}>o</li>
            <li className={styles.li}></li>
          </ul>
        </div>
        <form action="">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <div className={styles.conditions}>
            <p>
              Le persone che usano i nostri servizi potrebbero aver caricato le
              tue informazioni di contatto su Instagram.
              <span>Scopri di più</span>
            </p>
          </div>
          <div className={styles.conditions}>
            <p>
              Iscrivendoti, accetti le nostre <span>Condizioni</span>. Scopri in
              che modo raccogliamo, usiamo e condividiamo i tuoi dati nella
              nostra <span>Normativa sui dati</span> e in che modo usiamo cookie
              e tecnologie simili nella nostra <span>Normativa sui cookie</span>
              .
            </p>
          </div>
       
            <button onClick={handleSubmit}>Iscriviti</button>
    
        </form>
      </div>

      <div className={styles.signIn}>
        <p>
          Hai un account?
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <span>Accedi</span>
          </Link>
        </p>
      </div>
      <DownloadApp />
      <footer>
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
        <div className={styles.singleContainer} id={styles.lastContainer}>
          <select name="languages" id="">
            <option value="">Italiano</option>
          </select>
          <p>&copy; 2022 Instagram from Meta </p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
