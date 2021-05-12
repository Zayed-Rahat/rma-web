import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import './NewsSingle.css';

function MoreNews() {

  return (

  <>
     {/*    <!-- Header and Navbar section -->  */}
     <section>

     <div class="morenews img-fluid">
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

            
          </div>
        </div>
        </section>

{/* new paaart start here */}


 {/*    Details Area start Here*/}
    
    <section class="blog-details-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-details">
                        <h2>Lorem</h2>
                        <h3>gdfgjdklgjdfklgj</h3>
                        <img src="/ast/img/md.png" alt="piccc"/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex aspernatur quibusdam et mollitia iure in, fugiat non tempore sapiente dolore cumque a eaque consequatur asperiores vel! Eius, nemo corrupti.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex aspernatur quibusdam et mollitia iure in, fugiat non tempore sapiente dolore cumque a eaque consequatur asperiores vel! Eius, nemo corrupti.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex aspernatur quibusdam et mollitia iure in, fugiat non tempore sapiente dolore cumque a eaque consequatur asperiores vel! Eius, nemo corrupti.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex aspernatur quibusdam et mollitia iure in, fugiat non tempore sapiente dolore cumque a eaque consequatur asperiores vel! Eius, nemo corrupti.</p>
                    </div>
                    
                    <div class="comments">
                        <h5>leave a reply</h5>
                        <form>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Subject"/>
                            <input type="text" placeholder="Email"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" class="button button1" value="Send"/>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <h5>latest post</h5>
                        <div class="sidebar-post">
                            <h6><a href="">Lorem ipsum dolor sit amet.</a></h6>
                            <a href="">10 april 2021</a> / <a href="">admin</a>
                        </div>
                        <div class="sidebar-post">
                            <h6><a href="">Lorem ipsum dolor sit amet.</a></h6>
                            <a href="">10 april 2021</a> / <a href="">admin</a>
                        </div>
                        <div class="sidebar-post">
                            <h6><a href="">Lorem ipsum dolor sit amet.</a></h6>
                            <a href="">10 april 2021</a> / <a href="">admin</a>
                        </div>
                        <div class="sidebar-post">
                            <h6><a href="">Lorem ipsum dolor sit amet.</a></h6>
                            <a href="">10 april 2021</a> / <a href="">admin</a>
                        </div>
                        <div class="sidebar-post">
                            <h6><a href="">Lorem ipsum dolor sit amet.</a></h6>
                            <a href="">10 april 2021</a> / <a href="">admin</a>
                        </div>
                    </div>
                    <div class="sidebar">
                        <h5>category</h5>
                        <ul>
                            <li><a href="">web design</a></li>
                            <li><a href="">web development</a></li>
                            <li><a href="">software development</a></li>
                            <li><a href="">digital mrketing</a></li>
                            <li><a href="">graphics design</a></li>
                        </ul>
                    </div>
                    <div class="sidebar">
                        <h5>latest comments</h5>
                        <ul>
                            <li><a href="">admin</a> on  <a href="">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="">david</a> on  <a href="">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="">john</a> on  <a href="">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="">wick</a> on  <a href="">Lorem ipsum dolor sit amet.</a></li>
                            <li><a href="">mick</a> on  <a href="">Lorem ipsum dolor sit amet.</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* footer part*/}
<section>

      <div class="last_page2 img-fluid">
          <Footer></Footer>
        </div>
        </section>

   </>



  )
}

export default MoreNews;
