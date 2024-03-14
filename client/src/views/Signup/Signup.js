import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div>
            <div class="bg-img">
                <div class="content">
                    <header>Signup Form</header>
                    <form action="#">
                        <div class="field">
                            <span class="fa fa-user"></span>
                            <input type="text" required placeholder="Full Name" />
                        </div>
                        <div class="field space">
                            <span class="fa fa-user"></span>
                            <input type="text" required placeholder="Email" />
                        </div>
                        <div class="field space">
                            <span class="fa fa-user"></span>
                            <input type="text" required placeholder="Mo.No" />
                        </div>
                         
                        <div class="field space">
                            <span class="fa fa-lock"></span>
                            <input type="password" class="pass-key" required placeholder="Password" />
                            <span class="show">SHOW</span>
                        </div>
                        
                        
                        
                        <div class="field space">
                            <input type="submit" value="LOGIN" />
                        </div>
                    </form>
                    
                    <div class="signup">
                        Already have an account?
                        <a href="login">Login Now</a>
                    </div>
                </div>
            </div>
        </div>
   
  )
}

export default Signup