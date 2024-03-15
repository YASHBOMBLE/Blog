import {React,useEffect} from 'react'
import './Profile.css'
import Navbar from '../../component/Navbar.js'
import user from './../../images/user.png'
import { loginRequired } from '../../util/LoginRequired';
function Profile() {
    useEffect(()=>{
        loginRequired();
      },[])
    
    function addblog(){
        window.location.href="/addblog"
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
                            <span className='user-info size'>Welcome   </span>
                            <br />
                            <span className='user-info'>Email :  </span>
                            <br />
                            <span className='user-info'>Phone No : </span> <br />
                            <span className='user-info'>Weight : </span> <br />
                            <span className='user-info'>Role : </span>
                            <hr />
                            <span>
                            </span>
                            <div class="d-grid gap-2 logout-btn mt-3">
                                <button type="button" className='btn btn-primary' onClick={addblog}><p className='logOut-text'>Add Blog</p><i class="fa-solid fa-right-from-bracket"></i></button>
                            </div>
                            <div class="d-grid gap-2 logout-btn mt-3">
                                <button type="button" className='btn btn-primary' ><p className='logOut-text'>Logout</p><i class="fa-solid fa-right-from-bracket"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile