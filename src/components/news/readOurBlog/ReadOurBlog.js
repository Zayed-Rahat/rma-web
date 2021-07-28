import React, {useState, useEffect } from 'react';
import "../../Home.css"
import "./css/style.css";
import Pagination from './Pagination';
import DataLoadReadBlog from './DataLoadReadBlog';
import NavBar from '../../NavBar';
function ReadOurBlog () {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
   const [ read , setRead] = useState([]);

  useEffect( ()=>{

    fetch('http://api.rmabd.org/latestnews')
    .then(response => response.json())
    .then(newS => setRead(newS))
  console.log(read);
  
  }, [read])



     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = read.slice(indexOfFirstPost, indexOfLastPost);

  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
             <div class="robot_page img-fluid">
              <div class="fix">
            <div class="header">
              {/* <!-- logo section --> */}

              <header class="float-left">
                <div class="logo img-fluid">
                  <p class="logo_p">Robo Mechatronics Association Bangladesh</p>
                </div>
              </header>

              {/*<!-- Navbar section -->  */}

              <NavBar/>
              
              <div class="clearfix"></div>
            </div>

            {/*  <!-- Content Section --> */}
            <div class="first_page_para">
              <div class="container fix first_page_para_div">
                <p class="news_f_header">Explore New Ideas</p>
                <p class="news_f_para">Read and share ideas from  <br/>
                    independent voices, World-class <br/>
                    publications and experts from <br/>
                    around the glode .Everyone's  <br/>
                    welcome for Our Country & World.</p>
                <button type="button" class="btn btn-sm btn-primary btn1"><a href=" ">Learn More</a></button>
                </div>
             </div>

             </div>
             </div>

        
           <section className="banner">
           <div class = "banner-main-content">
                <div class = "search">
               <form>
                <input type="text" placeholder="Search.." name="search" />
                <input type="submit"  value="Go" />

               </form>
                    
                </div>

                <h2> &#x1F525; TRENDING TOPICS</h2>
                <article>

                    <h3>01</h3>
                    <div>
                        <h5>Here's how to track your stimulus check with the IRS Get My Payment Portal</h5>

                        <p>Date...</p>
                    </div>
                </article>

                <article>

                    <h3>02</h3>
                    <div>
                        <h5>Here's how to track your stimulus check with the IRS Get My Payment Portal</h5>

                        <p>Date...</p>
                    </div>
                </article>   <article>

                    <h3>03</h3>
                    <div>
                        <h5>Here's how to track your stimulus check with the IRS Get My Payment Portal</h5>

                        <p>Date...</p>
                    </div>
                </article>

               
                <h2>You May also Concern</h2>

                <div class = "current-news-head">
                    <h3> &rArr; Self</h3>
                    <h3> &rArr; Relationships</h3>
                    <h3> &rArr; Data Science</h3>
                    <h3> &rArr; Programming</h3>
                    <h3> &rArr; Javascript</h3>
                    <h3> &rArr; Health</h3>
                    <h3> &rArr;Machine Learning</h3>

                <h3 class="see-more"> See All Topics</h3>

                    
                </div>

            </div>

            <section class = "main-container-right">
            <h2>Whats New?</h2>

                <DataLoadReadBlog read={currentPosts}/>

                <Pagination  postsPerPage={postsPerPage}
                     totalPosts={read.length}
                   paginate={paginate}
                       />


            </section>

          
        </section>
        
        <footer>

<h2>FOOTER</h2>
</footer>

  </>
          
        
    );
};

export default ReadOurBlog;