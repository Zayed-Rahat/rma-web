import React from "react";
import AboutUs from "./AboutUs";
import Activities from "./Activities";
import Contact from "./Contact";
import Content from "./Content";
import Footer from "./Footer";
import Location from "./Location";
import MembersCounter from "./MembersCounter";
import Message from "./Message";
import Navbar from "./Navbar";
import News from "./News";
import Services from "./Services";
import WhatWeDo from "./WhatWeDo";
import "./Home.css";
import "./css/responsive_mobile_sm.css";
import "./css/responsive_mobile.css";
import "./css/responsive_notebook.css";
import "./css/responsive_semi_tab.css";
import "./css/responsive_tablet.css";

class Home extends React.Component {
  render() {
    return (
      <>
        {/*    <!-- Header and Navbar section -->  */}

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
            <Content></Content>
          </div>
        </div>

        {/* <!-- Second Page --> */}

        <div class="second img-fluid">
          <WhatWeDo></WhatWeDo>
        </div>

        <hr />

        <div style={{ height: "100px" }}></div>

        {/*<!-- second page second  part -->*/}

        <div class="second_second">
          <Activities></Activities>
        </div>

        <div style={{ height: "100px" }}></div>

        {/*<!-- Second Page Footer -->  */}

        <div class="second_footer">
          <MembersCounter></MembersCounter>
        </div>

        {/*<!-- Third Page --> */}

        <div class="third_page" id="third_page_connector">
          <AboutUs></AboutUs>
        </div>

        {/* <!-- Fourth Page --> */}

        <div class="fourth_page">
          <Services></Services>
        </div>

        {/*<!-- Fifth Page -->  */}
        <div class="fifth_page">
          <div class="fix container">
            <News></News>
          </div>
        </div>


        <div style={{ height: "70px" }}></div>
 
        {/* <!-- sixth page --> */}

        <div class="sixth_page">
          <div class="fix container">
            <Location></Location>
            <Message></Message>
            <Contact></Contact>
          </div>
        </div>

        {/* <!-- last page --> */}

        <div class="last_page img-fluid">
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default Home;
