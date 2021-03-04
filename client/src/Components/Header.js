import React from 'react'
import { useHistory  } from 'react-router-dom';
import Divine from '../images/Divine.png';

function Header(){
    const history = useHistory()
    function contact(){
        history.push(`contact`)
    }
    return (
        <React.Fragment>
            {/* Boxed */} 
            
                <div className="wrap-header clearfix">
                    <div className="top top-style3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <ul className="flat-information">
                                        <li><span>Phone:</span><a href=""> +91-9929-3698-44</a></li>
                                        <li><span>E-mail:</span><a href="mailto:atulyanimaaidas@gmail.com"> atulyanimaaidas@gmail.com</a></li>
                                    </ul>
                                </div>{/* col-md-8 */}
                                <div className="col-md-4">
                                    <div className="wrap-flat">
                                        <ul className="flat-socials">
                                            <li><a href="https://www.facebook.com/Divine-Shiksha-102200091486191/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.youtube.com/c/AtulyaNimaaiDas/" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                            <li><a href="https://www.instagram.com/divine_shiksha/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>{/* wrap-flat */}
                                </div>{/* col-md-4 */}
                            </div>{/* row */}
                        </div>{/* container */}
                    </div>{/* top */}
                    <header id="header" className="header header-style3 styleheader">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo">
                                        <a href="http://localhost:3000/" style={{"margin-top": "10px"}}><img src={Divine} alt="image" /></a>
                                    </div>{/* /logo */}
                                    
                                    <div className="wrap-nav">
                                        <nav id="mainnav" className="mainnav">
                                            <ul className="menu">
                                                <li className="active"><a href="http://localhost:3000/" title="">HOME</a>
                                                </li>
                                                <li className="has-mega-menu"><a href="http://localhost:3000/courses" title="" className="has-mega">COURSES</a>
                                                </li>
                                                <li><a href="http://localhost:3000/about/speaker" title="">THE SPEAKER</a>
                                                </li>
                                                {/* <li><a href="http://localhost:3000/gallery" title="">GALLERY</a> */}
                                                {/* </li> */}
                                                <li><a href="http://localhost:3000/donate" title="">DONATE</a>
                                                </li>
                                                <li><a href="http://localhost:3000/seminar" title="">SEMINAR</a>
                                                </li>
                                                <li><a href="http://localhost:3000/contact" title="">CONTACT</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        
                                        <div className="top-search">                        
                                            <form action="#" id="searchform-all" method="get">
                                                <div>
                                                    <input type="text" id="s" className="sss" placeholder="Search..." />
                                                    <input type="submit" value="" id="searchsubmit" />
                                                </div>
                                            </form>
                                        </div>{/* /top-search */}
                                    </div>{/* /wrap-nav */}
                                </div>{/* /col-md-12 */}
                            </div>{/* /row */}
                        </div>{/* /container */}
                    </header>{/* /header */}
                </div>{/* /header3 */}
        </React.Fragment>
    )
}

export default Header;