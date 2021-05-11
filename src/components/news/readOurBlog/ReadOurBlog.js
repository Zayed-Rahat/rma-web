import React from 'react';
import Navbar from "../../Navbar";
import "../../Home.css"
import "./css/style.css";
const ReadOurBlog = () => {
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

              <Navbar></Navbar>
              
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
                
                <article>
                    <img src = "images/right-1.jpg" alt=" "/>
                    <div>
                        <h2>Here's how to track your stimulus check with the IRS Get My Payment Portal</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <h5>Date...</h5>
                    </div>
                </article>

                <article>
                    <img src = "images/right-2.jpg" alt=" "/>

                    <div>
                        <h2>The best outdoor games to play with your family</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <h5>Date...</h5>
                    </div>
                </article>

                <article>
                    <img src = "images/right-3.jpg" alt=" "/>
                    <div>
                        <h2>Why walk? Check out the best electric scooters and e-bikes for 2020</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <h5>Date...</h5>

                    </div>
                </article>

                <article>
                    <img src = "images/right-4.jpg" alt=" "/>
                    <div>
                        <h2>Disneyland Paris will stream its Lion King stage show Friday night</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <h5>Date...</h5>

                    </div>
                </article>

                <article>
                    <img src = "images/right-5.jpg"alt=" " />
                    <div>
                        <h2>Looking at a phone's lock screen also requries a warrant, judge rules</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus?</p>

                        <h5>Date...</h5>
                    </div>
                </article>
                   <h4 class="see-more"> See More</h4>
            </section>

          
        </section>
        
        <footer>

            <h2>FOOTER</h2>
        </footer>

  </>
          
        
    );
};

export default ReadOurBlog;