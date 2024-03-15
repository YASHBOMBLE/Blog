import React from 'react'
import Navbar from '../../component/Navbar'

function Addblog() {
    return (

        <div>
            <div className='row'>
                <div className='col-12'>
                    <div class="bg-img">
                        <div class="content">
                            <header>Add Blog</header>

                            <div class="field">
                                <span class="fa fa-user"></span>
                                <input type="text" required placeholder="Title" />
                            </div>

                            <div class="field space">
                                <span class="fa fa-user"></span>
                                <textarea placeholder="Write Blog Here...">
                                </textarea>
                            </div>
                            <div class="field space">
                                <input type="submit" value="AddBlog" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Addblog