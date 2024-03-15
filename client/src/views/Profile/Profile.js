import { React, useEffect } from 'react'
import './Profile.css'
import Navbar from '../../component/Navbar/Navbar.js'
import user from './../../images/user.png'
import { loginRequired } from '../../util/LoginRequired';
import { currentUser } from '../../util/currentUser.js';
import Footer from '../../component/Footer/Footer.js';
function Profile() {
    useEffect(() => {
        loginRequired();
    }, [])

    function logOut() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login'
      }

    function addblog() {
        window.location.href = "/addblog"
    }
    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-md-12 main-container'>
                    <div className='sub-container'>
                        <div className='profile-container'>
                            <div className='profile-img-conatiner'>
                                <img src={user} className='user-img' />
                            </div>
                            <hr />
                            <span className='user-info size'>Welcome {currentUser?.name}   </span>
                            <br />
                            <span className='user-info'>Email :  {currentUser?.email} </span>
                            <br />
                            <span className='user-info'>Phone No : {currentUser?.phone}</span> <br />


                            <hr />
                            <span>
                            </span>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" onClick={addblog}>Add Blog</button>
                                <button class="btn btn-primary" type="button" onClick={logOut}>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
<Footer />
        </div>
    )
}

export default Profile