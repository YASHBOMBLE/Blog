import {React,useState,useEffect} from 'react'
import { loginRequired } from '../../util/LoginRequired';
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from '../../component/Navbar/Navbar'
import { currentUser } from '../../util/currentUser';
import Footer from '../../component/Footer/Footer';

function Addblog() {
    useEffect(() => {
        loginRequired();
    }, [])
    const [title, setTitle] = useState();
    const [blog, setBlog] = useState();

    const [author, setAuthor] = useState(currentUser?.name);
    async function addBlog(){
        const response = await axios.post('/addblog',{
           title:title,
           blog:blog,
           author : author
           })
           if (response.data.success) {
        
            await swal({
              title: "Success",
              text: response.data.message,
              icon: "success",
              button: "okk!",
            });

            window.location.reload();
             setTitle('');
             setBlog('');
             setAuthor('');
             window.location.href="/"
          }
    
    else
    {
        await swal({
            title: "Error",
            text: response.data.message,
            icon: "error",
            button: "Try Again!",
          });
        }
        setTitle('');
        setBlog('');
        setAuthor('');
    
    }
    return (

        <div>
          
            <div className='row'>
                <div className='col-12'>
                    <div class="bg-img">
                        <div class="content">
                            <header>Add Blog</header>

                            <div class="field">
                            <span class=""></span>
                                <input type="text" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>

                            <div class="field space">
                                <span class=""></span>
                                <textarea placeholder="Write Blog Here..."value={blog} onChange={(e) => setBlog(e.target.value)}>
                                </textarea>
                            </div>
                            <div class="field space mt-5">
                                <input type="submit" value="AddBlog" onClick={addBlog} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Addblog