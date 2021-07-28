import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import './NewsSingle.css';
import { Link } from 'react-router-dom';

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

              <NavBar/>

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
                            <h6><Link>Lorem ipsum dolor sit amet.</Link></h6>
                            <Link href="">10 april 2021</Link> / <Link href="">admin</Link>
                        </div>
                        <div class="sidebar-post">
                            <h6><Link>Lorem ipsum dolor sit amet.</Link></h6>
                            <Link href="">10 april 2021</Link> / <Link href="">admin</Link>
                        </div>
                        <div class="sidebar-post">
                            <h6><Link>Lorem ipsum dolor sit amet.</Link></h6>
                            <Link href="">10 april 2021</Link> / <Link href="">admin</Link>
                        </div>
                        <div class="sidebar-post">
                            <h6><Link>Lorem ipsum dolor sit amet.</Link></h6>
                            <Link href="">10 april 2021</Link> / <Link href="">admin</Link>
                        </div>
                        <div class="sidebar-post">
                            <h6><Link>Lorem ipsum dolor sit amet.</Link></h6>
                            <Link href="">10 april 2021</Link> / <Link href="">admin</Link>
                        </div>
                    </div>
                    <div class="sidebar">
                        <h5>category</h5>
                        <ul>
                            <li><Link href="">web design</Link></li>
                            <li><Link href="">web development</Link></li>
                            <li><Link href="">software development</Link></li>
                            <li><Link href="">digital mrketing</Link></li>
                            <li><Link href="">graphics design</Link></li>
                        </ul>
                    </div>
                    <div class="sidebar">
                        <h5>latest comments</h5>
                        <ul>
                            <li><Link href="">admin</Link> on  <Link href="">Lorem ipsum dolor sit amet.</Link></li>
                            <li><Link href="">david</Link> on  <Link href="">Lorem ipsum dolor sit amet.</Link></li>
                            <li><Link href="">john</Link> on  <Link href="">Lorem ipsum dolor sit amet.</Link></li>
                            <li><Link href="">wick</Link> on  <Link href="">Lorem ipsum dolor sit amet.</Link></li>
                            <li><Link href="">mick</Link> on  <Link href="">Lorem ipsum dolor sit amet.</Link></li>
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
