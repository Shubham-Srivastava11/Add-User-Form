import styles from './UserForm.module.css';
import React, { useState } from 'react';
import AgeError from './AgeError/AgeError';

const UserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const userNameHandler = (event) => {
        const user = event.target.value;
        setUserName(user);
    }
    const userAgeHandler = (event) => {
        const age = event.target.value;
        setUserAge(age);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userAge.trim().length === 0 || userName.trim().length === 0) {
            setError({
                error: 'Please enter a valid input (Non-Empty values)'
            })
        }

        else if (Number(userAge) <= 0) {
            setError({
                error: 'Please enter a valid age (> 0)'
            })

        } else {
            props.onAddUSer(userName, userAge);
            console.log(userName);
            console.log(userAge);

            setUserName('');
            setUserAge('');
        }
    }
    const close = () => {
        setError();
    }




    return (
        <div onClick={close}>
            {error && <AgeError error={error.error} onClose={close} />}
            <div className={styles.card}>
                <form onSubmit={onSubmitHandler}>
                    <div className={styles.data}>
                        <label>Username :</label>
                        <input type='text'
                            value={userName}
                            onChange={userNameHandler}></input>
                    </div>
                    <div className={styles.data}>
                        <label>Age(Years) :</label>
                        <input type='text'
                            value={userAge}
                            onChange={userAgeHandler}></input>
                    </div>
                    <button type='submit'>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;