import React from 'react';
import { Link } from 'react-router-dom';


function Services() {
    return (


    <div class="fix container">
        <div class="our_services_div">
            <h2 class="our_services text-center d-inline-block">OUR SERVICES</h2>
        </div>
        <div class="row our_services_footer_four_images">
            <div class="col-md-6 cc">
              <Link> <img src="/ast/img/cc.png" class="img_cc img-fluid" alt=""/></Link> 
                <div class="cc_wraper">
                    <h4 class="creat">Creative</h4>
                    <h2 class="consult">Counsultancy</h2>
                </div>
            </div>
            <div class="col-md-3 pm_div">
                <div class="pm_wrapper">
                   <Link> <img src="/ast/img/pm.png" class="img_pm img_pm1 img-fluid" alt=""/>
                   </Link> 
                    <div class="pm">
                        <h5 class="pm_h pm_h1">Project <br/> Making</h5>
                    </div>
                </div>
                <div class="pm_wrapper dd">
                   <Link><img src="/ast/img/dd.png" class="img_pm img_dd img-fluid" alt=""/> </Link> 
                    <div class="pm">
                        <h5 class="pm_h pm_dd h5">DIGITAL</h5>
                        <h4 class="pm_h pm_dd h4">DESIGNING</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-3 rd-wrapper">
              <Link>
              <img src="/ast/img/rd.png" class="img_rd img-fluid" alt=""/>
              </Link>  
                <div class="rd">
                    <h5 class="rd_h5">Research &</h5>
                    <h4 class="rd_h4">Development</h4>
                </div>
            </div>
        </div>
    </div>
            
    )
}

export default Services;
