import React, { useEffect } from 'react';
import styles from './login.module.css';

const Login = () => {
    useEffect(() => {
        const container = document.getElementById('container');

        const toggle = () => {
            container.classList.toggle(styles.signIn);
            container.classList.toggle(styles.signUp);
        };

        setTimeout(() => {
            container.classList.add(styles.signIn);
        }, 200);
    }, []);

    const toggle = () => {
        const container = document.getElementById('container');
        container.classList.toggle(styles.signIn);
        container.classList.toggle(styles.signUp);
    };

    return (
        <div id="container" className={styles.container}>
            {/* FORM SECTION */}
            <div className={styles.row}>
                {/* SIGN UP */}
                <div className={`${styles.col} ${styles.alignItemsCenter} ${styles.flexCol} ${styles.signUp}`}>
                    <div className={`${styles.formWrapper} ${styles.alignItemsCenter}`}>
                        <form action="submit">
                        <div className={`${styles.form} ${styles.signUp}`}>
                            <div className={styles.inputGroup}>
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className={styles.inputGroup}>
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className={styles.inputGroup}>
                                <i className='bx bxs-lock-alt'></i>
                                <input   type="tel" id="phone" name="phone" pattern="[0-9]{11}" title="Invalid format 03214567890" required placeholder="Phone Number" />
                            </div>
                            <div className={styles.inputGroup}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <button type='submit'>
                                Sign up
                            </button>
                            <p>
                                <span>
                                    Already have an account?
                                </span>
                                <b className={styles.pointer} onClick={toggle}>
                                    Sign in here
                                </b>
                            </p>
                        </div>
                        </form>
                    </div>
                </div>
                {/* END SIGN UP */}
                {/* SIGN IN */}
                <div className={`${styles.col} ${styles.alignItemsCenter} ${styles.flexCol} ${styles.signIn}`}>
                    <div className={`${styles.formWrapper} ${styles.alignItemsCenter}`}>
                        <div className={`${styles.form} ${styles.signIn}`}>
                        <form action="submit">
                            <div className={styles.inputGroup}>
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className={styles.inputGroup}>
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <button type='submit'>
                                Sign in
                            </button>
                        </form>
                            <p>
                                <b style={{fontSize:"12px"}} className={styles.pointer}>
                                    Forgot password?
                                </b>
                            </p>
                            <p>
                                <span style={{fontSize:"12px"}}>
                                    Don't have an account?
                                </span>
                                <b style={{fontSize:"15px"}} className={styles.pointer} onClick={toggle}>
                                    Sign up here
                                </b>
                                <br />
                                <div style={{fontSize:"15px",display:"flex",paddingTop:"13px",gap:"10px",flexDirection: "column",alignItems:" center"}}>
                                    <div>-OR-</div>
                                    <div>Continuous With</div>
                                    <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
                                    <div>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c41b31" class="bi bi-facebook footer-svg-colour1" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
           </div>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c41b31" class="bi bi-twitter footer-svg-colour1" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
           </div>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#c41b31" class="bi bi-instagram footer-svg-colour1" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
           </div>
           <div>
           <svg
            fill="#c41b31"
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            className="icon footer-svg-colour1"
            stroke="#c41b31"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z"></path>
            </g>
        </svg>
           </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                    </div>
                </div>
                {/* END SIGN IN */}
            </div>
            {/* END FORM SECTION */}
            {/* CONTENT SECTION */}
            <div className={`${styles.row} ${styles.contentRow}`}>
                {/* SIGN IN CONTENT */}
                <div className={`${styles.col} ${styles.alignItemsCenter} ${styles.flexCol}`}>
                    <div className={`${styles.text} ${styles.signIn}`}>
                        <h2>
                            Welcome <br />TO <br />FourDevs
                        </h2>
                       
                    </div>
                    <div className={`${styles.img} ${styles.signIn}`}>
                    </div>
                </div>
                {/* END SIGN IN CONTENT */}
                {/* SIGN UP CONTENT */}
                <div className={`${styles.col} ${styles.alignItemsCenter} ${styles.flexCol}`}>
                    <div className={`${styles.img} ${styles.signUp}`}>
                    </div>
                    <div className={`${styles.text} ${styles.signUp}`}>
                        <h2>
                            Join with us
                        </h2>
                    </div>
                </div>
                {/* END SIGN UP CONTENT */}
            </div>
            {/* END CONTENT SECTION */}
        </div>
    );
};

export default Login;
