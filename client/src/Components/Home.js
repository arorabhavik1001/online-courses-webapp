import React, { useState, useEffect } from 'react';
import '../Styles/animate.css';
import '../Styles/bootstrap.css';
import '../Styles/layers.css';
import '../Styles/responsive.css';
import '../Styles/style.css';
// import '../Styles/settings.css';
import logo from '../images/logo.png';
import Divine from '../images/Divine.png';
import slides1 from '../images/slides/slides1.jpg';
import slides2 from '../images/slides/slides2.jpg';
import slides3 from '../images/slides/slides3.jpg';
import slides4 from '../images/slides/slides4.jpg';
import a from '../images/iconbox/a.png';
import b from '../images/iconbox/a.png';
import c from '../images/iconbox/a.png';
import d from '../images/iconbox/a.png';
import Scroll from './Scrolls';
import cc from '../images/aboutus/cc.jpg';

function Home(){
    return (
        <React.Fragment>
            <Scroll showBelow={250} />
                    {/* Preloader */}
            {/* <section className="loading-overlay">
                <div className="Loading-Page">
                    <h2 className="loader">Loading</h2>
                </div>
            </section>  */}

            {/* Boxed */} 
            <div className="boxed position_form">
               

                <div id="rev_slider_1078_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container slider_styles space-left space-top" data-alias="classNameic4export" data-source="gallery" style={{margin:"0px auto","background-color":"transparent",padding:"0px","margin-top":"0px","margin-bottom":"0px"}}>
                        {/* START REVOLUTION SLIDER 5.3.0.2 auto mode */}
                        <div id="rev_slider_1078_1" className="rev_slider fullwidthabanner" style={{display:"none"}} data-version="5.3.0.2">
                            <div className="slotholder"></div>
                            <ul>{/* SLIDE  */}
                        
                                {/* SLIDE 1 */}
                                <li data-index="rs-3049" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">                        

                                    {/* MAIN IMAGE */}
                                    <img src={slides1}  alt=""  data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}

                                    {/* LAYER NR. 12 */}
                                    <div className="tp-caption title-slide" 
                                        id="slide-3049-layer-1" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" 
                                        data-fontsize="['72','72','45','35']"
                                        data-lineheight="['60','60','45','35']"
                                        data-fontweight="['700','700','700','700']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on"                             

                                        data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[18,18,18,18]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 16, "white-space": "nowrap","text-transform":"left"}}><span>FREE ONLINE COURSES FROM THE WORLD'S BEST</span><br />UNIVERSITIES
                                    </div>

                                    {/* LAYER NR. 13 */}
                                    <div className="tp-caption sub-title" 
                                        id="slide-3049-layer-4" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']"
                                        data-fontsize="['16',16','14','14']" 
                                        data-fontweight="['300','300','300','300']"
                                        data-width="660"
                                        data-height="none"
                                        data-lineheight="['16','16','16','16']"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 17, "white-space": "nowrap","text-transform":"left"}}>Education is the most powerful weapon which you can use to change the world.
                                    </div>

                                    <a href="#" target="_self" className="tp-caption flat-button-slider bg-orange"         

                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                
                                    data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" 
                                    data-width="['auto']"
                                    data-fontsize="['13',13','11','11']" 
                                    data-fontweight="['500','500','500','500']"
                                    data-lineheight="['46','46','38','38']"
                                    data-paddingright="['23','23','23','23']"
                                    data-paddingleft="['26','26','26','26']"
                                    data-height="['auto']">START A COURSE
                                    </a>{/* END LAYER LINK */}
                                </li>

                                {/* SLIDE 2 */}
                                <li data-index="rs-3050" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">                        

                                    {/* MAIN IMAGE */}
                                    <img src={slides2}  alt=""  data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}

                                    {/* LAYER NR. 12 */}
                                    <div className="tp-caption title-slide" 
                                        id="slide-3049-layer-2" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" 
                                        data-fontsize="['72','72','45','35']"
                                        data-lineheight="['60','60','45','35']"
                                        data-fontweight="['700','700','700','700']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on"                             

                                        data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[18,18,18,18]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 16, "white-space": "nowrap","text-transform":"left"}}><span>FREE ONLINE COURSES FROM THE WORLD'S BEST</span><br />UNIVERSITIES
                                    </div>

                                    {/* LAYER NR. 13 */}
                                    <div className="tp-caption sub-title" 
                                        id="slide-3049-layer-5" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']"
                                        data-fontsize="['16',16','14','14']" 
                                        data-fontweight="['300','300','300','300']"
                                        data-width="660"
                                        data-height="none"
                                        data-lineheight="['16','16','16','16']"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 17, "white-space": "nowrap","text-transform":"left"}}>Education is the most powerful weapon which you can use to change the world.
                                    </div>

                                    <a href="#" target="_self" className="tp-caption flat-button-slider bg-orange"         

                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                
                                    data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" 
                                    data-width="['auto']"
                                    data-fontsize="['13',13','11','11']" 
                                    data-fontweight="['500','500','500','500']"
                                    data-lineheight="['46','46','38','38']"
                                    data-paddingright="['23','23','23','23']"
                                    data-paddingleft="['26','26','26','26']"
                                    data-height="['auto']">START A COURSE
                                    </a>{/* END LAYER LINK */}
                                </li>

                                {/* SLIDE 3 */}
                                <li data-index="rs-3046" data-transition="slideremovedown" data-slotamount="7" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="Ken Burns" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">                        

                                    {/* MAIN IMAGE */}
                                    <img src={slides3}  alt=""  data-bgposition="center center" data-kenburns="off" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}

                                    {/* LAYER NR. 12 */}
                                    <div className="tp-caption title-slide" 
                                        id="slide-3047-layer-1" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" 
                                        data-fontsize="['72','72','45','35']"
                                        data-lineheight="['60','60','45','35']"
                                        data-fontweight="['700','700','700','700']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on"                             

                                        data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[18,18,18,18]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 16, "white-space": "nowrap","text-transform":"left"}}><span>FREE ONLINE COURSES FROM THE WORLD'S BEST</span><br />UNIVERSITIES
                                    </div>

                                    {/* LAYER NR. 13 */}
                                    <div className="tp-caption sub-title" 
                                        id="slide-3049-layer-6" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']"
                                        data-fontsize="['16',16','14','14']" 
                                        data-fontweight="['300','300','300','300']"
                                        data-width="660"
                                        data-height="none"
                                        data-lineheight="['16','16','16','16']"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 17, "white-space": "nowrap","text-transform":"left"}}>Education is the most powerful weapon which you can use to change the world.
                                    </div>

                                    <a href="#" target="_self" className="tp-caption flat-button-slider bg-orange"         

                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                
                                    data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" 
                                    data-width="['auto']"
                                    data-fontsize="['13',13','11','11']" 
                                    data-fontweight="['500','500','500','500']"
                                    data-lineheight="['46','46','38','38']"
                                    data-paddingright="['23','23','23','23']"
                                    data-paddingleft="['26','26','26','26']"
                                    data-height="['auto']">START A COURSE
                                    </a>{/* END LAYER LINK */}
                                </li>

                                {/* SLIDE 4 */}
                                <li data-index="rs-3048" data-transition="slideremoveright" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000"    data-rotate="0"  data-saveperformance="off"  data-title="HTML5 Video" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE */}
                                    <img src={slides4}  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                                    
                                    {/* BACKGROUND VIDEO LAYER */}
                                    <div className="rs-background-video-layer" 
                                        data-forcerewind="on" 
                                        data-volume="mute" 
                                        data-vimeoid="202903642" 
                                        data-videoattributes="background=1&title=0&amp;byline=0&amp;portrait=0&amp;api=1" 
                                        data-videowidth="100%" 
                                        data-videoheight="100%" 
                                        data-videocontrols="none" 
                                        data-videostartat="00:00" 
                                        data-videoendat="00:48" 
                                        data-videoloop="loop" 
                                        data-forceCover="1" 
                                        data-aspectratio="4:3" 
                                        data-autoplay="true" 
                                        data-autoplayonlyfirsttime="false" ></div>


                                    {/* LAYER NR. 12 */}
                                    <div className="tp-caption title-slide" 
                                        id="slide-3048-layer-1" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['-77','-77','-77','-77']" 
                                        data-fontsize="['72','72','45','35']"
                                        data-lineheight="['60','60','45','35']"
                                        data-fontweight="['700','700','700','700']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on"                             

                                        data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[18,18,18,18]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 16, "white-space": "nowrap","text-transform":"left"}}><span>FREE ONLINE COURSES FROM THE WORLD'S BEST</span><br />UNIVERSITIES
                                    </div>

                                    {/* LAYER NR. 13 */}
                                    <div className="tp-caption sub-title style_subtitle" 
                                        id="slide-3049-layer-7" 
                                        data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['55','55','0','0']"
                                        data-fontsize="['16',16','14','14']" 
                                        data-fontweight="['300','300','300','300']"
                                        data-width="660"
                                        data-height="none"
                                        data-lineheight="['16','16','16','16']"
                                        data-whitespace="nowrap"
                            
                                        data-type="text" 
                                        data-responsive_offset="on" 

                                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{"z-index": 17, "white-space": "nowrap","text-transform":"left"}}>Education is the most powerful weapon which you can use to change the world.
                                    </div>

                                    <a href="#" target="_self" className="tp-caption flat-button-slider bg-orange"         

                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                
                                    data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['188','188','188','50']" 
                                    data-width="['auto']"
                                    data-fontsize="['13',13','11','11']" 
                                    data-fontweight="['500','500','500','500']"
                                    data-lineheight="['46','46','38','38']"
                                    data-paddingright="['23','23','23','23']"
                                    data-paddingleft="['26','26','26','26']"
                                    data-height="['auto']">START A COURSE
                                    </a>{/* END LAYER LINK */}
                                </li>                         
                            </ul>
                        </div>
                </div>{/* END REVOLUTION SLIDER */}

                {/* Iconbox */}
                <section className="flat-row bg-theme pd-top-152 pd-bottom-97 flat-iconbox">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="f-select">
                                    <form action="./contact/contact-process.php" method="post" id="formsearch-flatcourse" className="formsearch">
                                        <ul className="form-wrap">
                                            <li className="col-md-4 form-select">
                                                <p className="search-form-select">
                                                    <select className="select-field" >
                                                        <option value="">ALL CATEGORIES</option>
                                                        <option value="">BUSSINESS</option>
                                                        <option value="">ENGINEERING</option>
                                                        <option value="">LIFE SCIENCES</option>
                                                        <option value="">MANAGENMENT</option>
                                                </select>
                                                </p>
                                            </li>
                                            <li className="col-md-5 form-key">
                                                <p className="search-form-keyword">
                                                    <input type="text" id="keyword" name="keyword" value="" required="required" placeholder="COURE KEYWORD" />
                                                </p>
                                            </li>
                                            <li className="col-md-3 form-btn">
                                                <div className="search-form-btn">
                                                    <div className="wrap-btn">
                                                        <a className="flat-btn bg-color style3" href="#">SEARCH COURSE</a> 
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>{/* container */}

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section">
                                    <h1 className="title">OFFERING THE BEST <br /> IN EDUCATION TO THE WORLD</h1>
                                    <div className="sub-title">
                                        Sign-up today to join over 6 million learners already on ALISON
                                    </div>
                                </div>
                            </div>{/* col-md-12 */}
                        </div>{/* row */}
                    </div>{/* container */}

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="iconbox style-title">
                                    <div className="box-header">
                                        <div className="box-icon">
                                            <img src={a} alt="image" />
                                        </div>
                                        <div className="box-title">
                                            <a href="#" title="">Best Learning Communities</a>
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <p>The idea is to keep the discussions<br />going after className ends.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="iconbox icon-green style-title">
                                    <div className="box-header">
                                        <div className="box-icon">
                                            <img src={b} alt="image" />
                                        </div>
                                        <div className="box-title">
                                            <a href="#" title="">Online Teaching Jobs</a>
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <p>The idea is to keep the discussions<br />going after className ends.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="iconbox icon-blue style-title">
                                    <div className="box-header">
                                        <div className="box-icon">
                                            <img src={c} alt="image" />
                                        </div>
                                        <div className="box-title">
                                            <a href="#" title="">Learn Courses Online</a>
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <p>The idea is to keep the discussions<br />going after className ends.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="iconbox icon-cyan style-title">
                                    <div className="box-header">
                                        <div className="box-icon">
                                            <img src={d} alt="image" />
                                        </div>
                                        <div className="box-title">
                                            <a href="#" title="">Book Library & Store</a>
                                        </div>
                                    </div>
                                    <div className="box-content">
                                        <p>The idea is to keep the discussions<br />going after className ends.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* container */}
                </section>
                
                {/* Popular-iconbox2 */}
                <section className="flat-row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section">
                                    <h1 className="title">POPULAR COURSE CATEGORIES</h1>
                                    <div className="sub-title">
                                        Having over 10 million students worldwide and more than 50.000 online courses available.
                                    </div>
                                </div>
                            </div>{/* col-md-12 */}
                        </div>{/* row */}
                    </div>{/* container */}

                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/21.png" alt="image" />
                                                </div>
                                                <div className="box-title">
                                                <a href="#" title="">ARTS & HUMANITIES</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style bg-blue ">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/22.png" alt="image" />
                                                </div>
                                                <div className="box-title">
                                                <a href="#" title="">BUSSINESS &amp; MANAGENMENT</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style bg-cyan">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/23.png" alt="image" />
                                                </div>
                                                <div className="box-title">
                                                <a href="#" title="">ENGINEERING<br />&amp; TECHNOLOGY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                    <div className="dividers">   
                                    </div>{/* dividers */}
                                    {/* <div className="row"> */}
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style bg-red">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/24.png" alt="image" />
                                                </div>
                                                <div className="box-title">
                                                <a href="#" title="">LIFE SCIENCES<br />&amp; MEDICINE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style bg-green ">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/25.png" alt="image" />
                                                </div>
                                                <div className="box-title">
                                                <a href="#" title="">NATURAL SCIENCES</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                    <div className="col-md-4 col-sm-6">
                                        <div className="iconbox bg-style bg-violet">
                                            <div className="box-header">
                                                <div className="box-icon">
                                                    <img src="images/iconbox/26.png" alt="image" />
                                                </div>
                                                <div className="box-title style1">
                                                <a href="#" title="">SOCIAL<br />SCIENVES</a>
                                                </div>
                                                <div className="box-title style2">
                                                <a href="#" title="">SOCIAL SCIENVES</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* col-md-4 */}
                                </div>
                            </div>{/* no-paddingright */}
                            <div className="col-md-6">
                                    <div className="about-us wrap-box pdleft">
                                        <h2 className="title-about-us">Arts & Humanities</h2>
                                        <div className="text-about-us">
                                            <p>Artist John Sloan said, “Though a living cannot be made at art,<br />art makes life worth living.” </p>
                                            <p>It is this fact which has driven millions of students to get arts and<br />humanities degrees, focussing their attention on painting, litera-ture or history.</p>
                                        </div>
                                        <div className="course-about-us">
                                            <p>Courses Available:<strong> 500</strong></p>
                                        </div>
                                        <div className="button-style">
                                            <div className="wrap-btn">
                                                <a className="flat-btn" href="#">SEE COURSE</a>
                                            </div>
                                        </div>
                                    </div>{/* About-us */}
                            </div>{/* col-md-6 */}
                        </div>{/* row */}
                    </div>{/* Container */}
                </section>
                
                {/* portfolio-isotope */}
                <section className="flat-row bg-theme wrap-price-post">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                    <div className="title-section title-height46">
                                        <h1 className="title">POPULAR COURSE</h1>
                                        <div className="sub-title">
                                            Join our growing global community of over 7 million learners.
                                        </div>
                                    </div>
                            </div>{/* col.md-12 */}
                        </div>
                    </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="portfolio-filter style1">
                                        <li><a data-filter=".bussiness" href="#">Bussiness</a></li>
                                        <li className="active"><a data-filter=".manage" href="#">Managenment</a></li>
                                        <li><a data-filter=".engin" href="#">Engineering</a></li>
                                        <li><a data-filter=".tech" href="#">Technology</a></li>
                                        <li><a data-filter=".life" href="#">Life sciences</a></li>
                                        <li><a data-filter=".medici" href="#">Medicine</a></li>
                                        <li><a data-filter=".other" href="#">Other</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="portfolio style2">
                                <div className="portfolio-wrap clearfix">
                                    <div className="item manage tech life">
                                        <article className="entry ">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/1.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Building WordPress Themes<br />With Bootstrap</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span className="count"> 100</span>
                                                    </div>
                                                    <div className="entry-price">
                                                        PRICE:<span className="price"> $200</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                    <div className="item medici manage other medici bussiness tech life">
                                        <article className="entry">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/2.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Understanding Persuasive<br />Web Design</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span> 100</span>
                                                    </div>
                                                    <div className="entry-price color-green">
                                                        PRICE:<span> FREE</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                    <div className="item  other life engin manage bussiness">
                                        <article className="entry">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/3.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Building Static Websites<br />With Jekyll</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span className="count"> 100</span>
                                                    </div>
                                                    <div className="entry-price">
                                                        PRICE:<span className="price"> $200</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                    <div className="item life engin manage bussiness">
                                        <article className="entry">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/4.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Building Static Websites<br />With Jekyll</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span className="count"> 100</span>
                                                    </div>
                                                    <div className="entry-price color-green">
                                                        PRICE:<span className="price"> FREE</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                    <div className="item other medici tech life engin manage">
                                        <article className="entry">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/5.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Building WordPress Themes<br />With Bootstrap</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span className="count"> 100</span>
                                                    </div>
                                                    <div className="entry-price">
                                                        PRICE:<span className="price"> $200</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                    <div className="item manage bussiness">
                                        <article className="entry">
                                            <div className="featured-post">
                                                <a href="#"><img src="images/portfolio/6.jpg" alt="image" /></a>
                                            </div>
                                            <div className="entry-post">
                                                <h3 className="entry-title"><a href="#">Understanding Persuasive<br />Web Design</a></h3>
                                                <div className="entry-author">
                                                    <span>With<a href="#"> John Sloan</a></span>
                                                </div>
                                                <div className="entry-number">
                                                    <div className="entry-count">
                                                        TOTAL:<span className="count"> 100</span>
                                                    </div>
                                                    <div className="entry-price color-green">
                                                        PRICE:<span className="price"> FREE</span>
                                                    </div>
                                                </div>
                                            </div>{/* entry-post */}
                                        </article>
                                    </div>{/* item */}
                                </div>{/* portfolio-wrap */}
                            </div>{/* portfolio */} 
                            <div className="row">
                                <div className="dividers h30">
                                    
                                </div>
                            </div>
                        </div>{/* container */}

                        <div className="button-style center mg-left2">
                            <div className="wrap-btn">
                                <a className="flat-btn pdwith57" href="#">VIEW ALL</a>
                            </div>
                        </div>
                </section>
                
                {/* form-register */}
                <section className="flat-row pd-80 flat-register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <form action="./contact/contact-process.php" method="POST" id="form-register" className="form-register">
                                    <div className="form-register-title">
                                    <h3 className="register-title">CREATE YOUR FREE<br /><i className="wrap-box ispace7"></i>ACCOUNT NOW!</h3>
                                    </div>
                                    <div className="info-register">
                                        <p className="wrap-input-name">
                                            <input type="text" id="name" name="name" value="" required="required" placeholder="Your Name *:" />
                                        </p>
                                        <p className="wrap-input-email">
                                            <input type="text" id="email" name="email" value="" required="required" placeholder="Email *:" />
                                        </p>
                                        <p className="wrap-input-phone">
                                            <input type="text" id="phone" name="phone" value="" required="required" placeholder="Phone *:" />
                                        </p>
                                        <div className="wrap-btn">
                                            <a className="flat-btn" href="#">GET IT NOW</a>
                                        </div>
                                    </div> 
                                </form>
                            </div>{/* col-md-5 */}
                            <div className="col-md-7 no-paddingright">
                                <div className="wrap-register-right wrap-box pdtopleft">
                                    <div className="wrap-register-title">
                                        <div className="title-top">
                                        GET 100S OF INLINE COURSES FOR FREE
                                        </div>
                                        <div className="title-register">
                                        REGISTER NOW
                                        </div>
                                        <div className="sub-title-register">
                                        Create your free account now and get immediate access to 100s<br />of online courses.
                                        </div>
                                    </div>{/* wrap-register-title */}

                                    <div id="countdown" className="countdown">
                                    </div>{/* CountDown */}
                            </div>{/* wrap-register-right */}
                                
                        </div>{/* col-md-7 */}
                        </div>
                    </div>
                </section>
                
                {/* Popular-event */}
                <section className="flat-row bg-theme pd-top-94">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                    <div className="title-section">
                                        <h1 className="title">POPULAR EVENT</h1>
                                        <div className="sub-title">
                                            Upcoming Education Events to feed your brain.
                                        </div>
                                    </div>
                            </div>{/* col.md-12 */}
                        </div>
                    </div>{/* container */}

                    <div className="container popular-event">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="wrap-event-times">
                                    <ol className="wrap-times wrap-times-style2 content mCustomScrollbar">
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">08</p>
                                                    <p className="text-mon">AGU</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">Alumni Weekend 2016</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">New Delhi, India</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">23</p>
                                                    <p className="text-mon">MAR</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">Special Events: No Stress Week</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">NewYork, United State</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">10</p>
                                                    <p className="text-mon">AGU</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">October Fest or Spring Fest</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">New Delhi, India</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">16</p>
                                                    <p className="text-mon">MAR</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">October Fest or Spring Fest</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">NewYork, United State</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">08</p>
                                                    <p className="text-mon">AGU</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">Alumni Weekend 2016</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">New Delhi, India</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">23</p>
                                                    <p className="text-mon">MAR</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">Special Events: No Stress Week</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">NewYork, United State</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">10</p>
                                                    <p className="text-mon">AGU</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">October Fest or Spring Fest</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">New Delhi, India</span>
                                                </div>
                                            </article>
                                        </li>
                                        <li>
                                            <article className="times-body">
                                                <div className="time-list">
                                                    <p className="number-mon">16</p>
                                                    <p className="text-mon">MAR</p>
                                                </div>
                                                <div className="times-meta">
                                                    <h6><a href="#" title="">October Fest or Spring Fest</a></h6>
                                                    <span className="hour">8:00 AM - 5:00 PM</span>
                                                    <span className="adress">NewYork, United State</span>
                                                </div>
                                            </article>
                                        </li>
                                    </ol>
                                </div>{/* wrap-event-times */}
                            </div>{/* col-md-6 */}
                            {/* copied code will come here */}
                        </div>{/* row */}
                    </div>{/* container */}
                </section>
                
                {/* latest-news */}
                <section className="flat-row pd-top-93">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                    <div className="title-section">
                                        <h1 className="title">LATEST NEWS</h1>
                                        <div className="sub-title">
                                            Education news all over the world.
                                        </div>
                                    </div>
                            </div>{/* col.md-12 */}
                        </div>
                    </div>{/* container */}

                    <div className="container">
                        <div className="blog-list2 lates-new wrap-box pdbottom">
                            <div className="row">
                                <div className="col-md-6 wrap-grid">
                                    <article className="entry">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 left">
                                                <div className="entry-post">
                                                    <div className="entry-meta">
                                                        <span>march 14, 2016</span>
                                                    </div>
                                                    <h3 className="entry-title"><a href="#">The Global Student<br />Challenge</a></h3>
                                                    <div className="entry-author">
                                                        <span>by <a href="#">Kiwhi Leonard</a></span>
                                                    </div>
                                                    <div className="entry-content">
                                                        <p>The Education Report: A New Report Says Americans Less Happy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 right">
                                                <div className="feature-post">
                                                    <a href="#"><img src="images/blog/list2/1.jpg" alt="image" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>{/* col-md-6 */}
                                <div className="col-md-6 wrap-grid">
                                    <article className="entry">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="entry-post">
                                                        <div className="entry-meta">
                                                            <span>AUGUST 13, 2016</span>
                                                        </div>
                                                        <h3 className="entry-title"><a href="#">I Hope My Graduating<br />Soon</a></h3>
                                                        <div className="entry-author">
                                                            <span>by <a href="#">Kiwhi Leonard</a></span>
                                                        </div>
                                                        <div className="entry-content">
                                                            <p>The Education Report: A New Report Says Americans Less Happy.</p>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="feature-post">
                                                    <a href="#"><img src="images/blog/list2/2.jpg" alt="image" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>{/* col-md-6 */}
                                <div className="col-md-6 wrap-grid">
                                    <article className="entry">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                    <div className="entry-post">
                                                        <div className="entry-meta">
                                                            <span>AUGUST 13, 2016</span>
                                                        </div>
                                                        <h3 className="entry-title"><a href="#">Student Action For<br />Refugees</a></h3>
                                                        <div className="entry-author">
                                                            <span>by <a href="#">Kiwhi Leonard</a></span>
                                                        </div>
                                                        <div className="entry-content">
                                                            <p>The Education Report: A New Report Says Americans Less Happy.</p>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="feature-post">
                                                    <a href="#"><img src="images/blog/list2/3.jpg" alt="image" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>{/* col-md-6 */}
                                <div className="col-md-6 wrap-grid">
                                    <article className="entry">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <div className="entry-post">
                                                    <div className="entry-meta">
                                                        <span>march 14, 2016</span>
                                                    </div>
                                                    <h3 className="entry-title"><a href="#">Charity Challenge For<br />Speedy Students</a></h3>
                                                    <div className="entry-author">
                                                        <span>by <a href="#">Kiwhi Leonard</a></span>
                                                    </div>
                                                    <div className="entry-content">
                                                        <p>The Education Report: A New Report Says Americans Less Happy.</p>
                                                    </div>
                                                </div>{/* entry-post */}
                                            </div>{/* col-md-6 */}
                                            <div className="col-md-6 col-sm-6">
                                                <div className="feature-post">
                                                    <a href="#"><img src="images/blog/list2/4.jpg" alt="image" /></a>
                                                </div>
                                            </div>{/* col-md-6 */}
                                        </div>{/* row */}
                                    </article>
                                </div>{/* col-md-6 */}
                            </div>{/* row */}
                        </div>
                    </div>{/* container */}

                    <div className="button-style center mg-left2">
                        <div className="wrap-btn">
                            <a className="flat-btn pdwith57 no-bg" href="#">VIEW ALL</a>
                        </div>
                    </div>
                </section> 

                {/* flat-contact */}
                <section className="flat-row bg-theme flat-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="title-section left color-sub">
                                        <h1 className="title">EDUCATION THEMES</h1>
                                        <div className="sub-title">
                                            Eduharvart is an education platform that partners with top universities and organizations <br /> worldwide,<span className="color-gray"> Absolutely FREE.</span>
                                        </div>
                                    </div>
                            </div>{/* col.md-8 */}
                            <div className="col-md-4 right-contact">
                                <div className="wrap-btn">
                                    <a className="flat-btn bg-color" href="#">ENROLL NOW</a> 
                                </div>
                            </div>{/* col.md-4 */}
                        </div>{/* row */}
                    </div>{/* Container */}
                    

                    <div class="container"> 
                <div class="row">
                    <div class="col-md-12">
                        <div class="center-contact">
                            <img src={cc} alt="image" />
                        </div>
                    </div>
                </div>
            </div>{/* Container */}
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="subscribe-contact wrap-box pdfull">
                            <div class="title-section">
                                <h1 class="title">SUBSCRIBE TO JOIN OUR WHATSAPP GROUP</h1>
                                <div class="sub-title">
                                    Subscribe now and receive all notification for any new upcoming event, interesting posts and much more!
                                </div>
                            </div>
                            <form action="./contact/contact-process.php" method="post" id="formsubscribe" class="formsearch search-course">
                                <p class="subscribe-email">
                                    <input type="text" id="emailsubscribe" name="email" value="" required="required" placeholder="Your mobile number here" />
                                </p>
                                <div class="subscribe-btn">
                                    <div class="wrap-btn">
                                        <a class="flat-btn bg-color" href="#">ENROLL NOW</a> 
                                    </div>
                                </div>
                            </form>
                        </div>{/* subscribe-contact */}
                    </div>{/* Col-md-12 */}
                </div>{/* row */}
            </div>{/* Container */}
                </section>

                {/* Footer */}
               
                

                {/* <a className="go-top show">
                    <i class="fa fa-chevron-up" />
                </a> */}
            </div>{/* Boxed */}

            {/* Javascript */}
            <script type="text/javascript" src="javascript/jquery.min.js"></script>
            <script type="text/javascript" src="javascript/bootstrap.min.js"></script>
            <script type="text/javascript" src="javascript/main.js"></script>
            <script type="text/javascript" src="javascript/countdown.js"></script>
            <script type="text/javascript" src="javascript/imagesloaded.min.js"></script>
            <script type="text/javascript" src="javascript/jquery.isotope.min.js"></script>
            <script type="text/javascript" src="javascript/jquery.mCustomScrollbar.concat.min.js"></script>
            <script type="text/javascript" src="javascript/owl.carousel.js"></script>
            <script type="text/javascript" src="javascript/jquery.easing.js"></script>
            <script type="text/javascript" src="javascript/jquery.flexslider.js"></script>

            {/* Revolution Slider */}
            <script type="text/javascript" src="revolution/js/jquery.themepunch.tools.min.js"></script>
            <script type="text/javascript" src="revolution/js/jquery.themepunch.revolution.min.js"></script>
            <script type="text/javascript" src="revolution/js/slider.js"></script>

            {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}    
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.actions.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.carousel.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.migration.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.navigation.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.parallax.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
            <script type="text/javascript" src="revolution/js/extensions/revolution.extension.video.min.js"></script>
        </React.Fragment>
    )
}

export default Home;