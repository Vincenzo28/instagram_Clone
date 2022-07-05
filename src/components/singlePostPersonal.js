import styles from '../style/singlePostPersonal.module.css'
const SinglePostPersonal = ({image}) =>{
    return(
        <div className={styles.container}>
            <img src={image} alt="" />
        </div>
    )
}

export default SinglePostPersonal