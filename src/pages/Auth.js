import styles from "../style/Auth.module.css";
import { Link } from "react-router-dom";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../store/actions/handleLogIn";
import { Navigate } from "react-router-dom";
const Auth = () => {
  const logo = require("../images/phones.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

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
    dispatch(logIn(email, password));
    setEmail("");
    setPassword("");
  };

  let shouldRedirect = null;
  if (token) {
    shouldRedirect = <Navigate to="/Home" />;
  }

  const showButton = () => {
    if (email.length === 0 && password.length === 0) {
      return <button style={{background:'#c0dffd'}} disabled>Accedi</button>
    }else {
      return <button style={{ background: '#0095f6'}} onClick={handleSubmit}>Accedi</button>
    }
  };
  return (
    <div className={styles.allContainer}>
      {shouldRedirect}
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.phones}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.phoneImages}>
            <img
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
              alt=""
              className={styles.image}
              id={styles.image4}
            />

            <img
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
              alt=""
              className={styles.image}
              id={styles.image3}
            />
            <img
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
              alt=""
              className={styles.image}
              id={styles.image2}
            />
            <img
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
              alt=""
              className={styles.image}
              id={styles.image1}
            />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.authContainer}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt=""
            />
            <form action="">
              <input
                type="email"
                placeholder="Numero di telefono, nome utente o e-mail"
                value={email}
                onChange={handleEmail}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              {showButton()}
            </form>
            <div className={styles.ulList}>
              <ul>
                <li className={styles.li}></li>
                <li id={styles.o}>o</li>
                <li className={styles.li}></li>
              </ul>
            </div>
            <div className={styles.logFacebook}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png"
                alt=""
              />
              <p>Accedi con Facebook</p>
            </div>
            <p id={styles.forgotPass}>Hai dimenticato la password?</p>
          </div>

          <div className={styles.signUp}>
            <p>
              Non hai un account?{" "}
              <Link style={{ textDecoration: "none" }} to={"/SignUp"}>
                <span>Iscriviti</span>
              </Link>
            </p>
          </div>
          <DownloadApp />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
