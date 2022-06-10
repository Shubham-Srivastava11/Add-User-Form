import styles from './DisplayUser.module.css';

const DisplayUser = (props) => {

    console.log(props.showUser);
    return (
        <ul className={styles['card-control']}>
            {props.showUser.map(user => (
                <li key={user.id}>{user.text}</li>
            ))}
        </ul>


    );
}

export default DisplayUser;