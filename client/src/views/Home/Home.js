import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { currentUser } from '../../util/currentUser'
import { loginRequired } from '../../util/LoginRequired';
import Navbar from '../../component/Navbar/Navbar'
import Swal from 'sweetalert2'
import './Home.css'
import Footer from '../../component/Footer/Footer'

function Home() {

  const [currentBlog, setAllblogs] = useState([])
  async function fetchAllBlogs() {
    const response = await axios.get('allblog')

    setAllblogs(response.data.data)
  }

  useEffect(() => {
    fetchAllBlogs();
  }, [])



  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-12'>
          <span className='heading'>Top Trending Blogs</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='main-blog-container'>
            {
              currentBlog?.map((index, item) => {
                return (
                  <>
                    <div className='blog-container'>
                      <span className='title'>Title : {index.title}</span><br />
                      <span className='blog'>Blog:{index.blog}</span><br />
                      <span className='Author'>Author:{index.author}</span>
                      <span><i class="fa-solid fa-trash delete-icon" onClick={async () => {
                      if(!currentUser){
                        loginRequired()
                      }
                      else{
                      const response = axios.post('/deleteBlog', {
                        title: index.title
                      })
                    
                        await Swal.fire({
                          title: "Success!",
                          text: "Blog Deleted",
                          icon: "success"
                        });

                        window.location.reload();  }}}
                        ></i></span>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home