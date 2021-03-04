import React from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import poster from '../images/poster.jpeg'
import landscape from '../images/landscape.png'

const stylesByBhavik = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-40%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#22272b',
        border: '2px solid gray',
        textAlign: 'center',
        borderRadius: "20px",
        boxShadow: '2px 2px 8px gray',
    }
}
class Seminar extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            name: '', 
            number: 0,
            subscribedName: '',
            email: '',
            address: ''
        }
    }
    handleChange = (event, valueHandler) => {
        this.setState({
            [valueHandler]: event.target.value
        })
    }
    cross= () => {
        this.setState({
            isModalOpen: false,
        })
    }
    handleClick = () => {
        const {name, number, isModalOpen, email, address} = this.state;
        const newReg = {
            name,
            number,
            email,
            address,
        }
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/register',
            headers: { 'Content-Type': 'application/json' },
            data: newReg
        }).then(result => {
            this.setState({
                isModalOpen: true,
                subscribedName: result.data.name,
                name: '',
                number: '',
                email: '',
                address: ''
            })
            // alert(`Hare Krishna ${result.data.name} prabhuji, Thanks for subscribing. You will be added in our whatsapp group soon.`)
            console.log(result)
        }).catch(err => {
            alert(`There was some problem. Pls try again later`)
            console.log(err)
        })
    }
    render() {
        const { name, number, subscribedName, isModalOpen, email, address} = this.state;
        return (
            <div className="container">
                <Modal isOpen={isModalOpen} style={stylesByBhavik}>
                            <React.Fragment>
                                <p style={{"font-size":"23px", color:'white'}}>Hare Krishna {subscribedName} ji, Thanks for registering yourself for the seminar. You will contacted very soon.</p>
                                <br />
                                <button onClick={this.cross} className="cross" style={{"float": 'right', color:'white', "background-color": '#ffbf43'}}>OK</button>
                            </React.Fragment>
                </Modal>
                <h1 style={{"text-align": "center", "margin-bottom": "50px", "text-decoration": "underline"}}>Bhagavad Gita Seminar</h1>
                <img src={landscape} alt="image" className="p-image"/>
                <p style={{ "text-align": "center", "margin-top": "50px", "margin-bottom": "50px", "font-size": "20px", "line-height":"1.7"}}><span style={{ "font-weight": "bold", color:"orange"}}>The seminar is based on the non-sectarian, non-religious timeless spiritual wisdom of Bhagavad Gita – The Greatest Book on Yoga. The talks are enriched with practical day to day life examples that one can relate to easily. </span> It provides hands on experience for implementing the knowledge acquired, leading to, guaranteed success.
    
                    A perfect platform for those who want to ignite their inner potential and lead a tension-free, healthy, satisfied, successful &amp; holistic life!!!
    
                    <br /><br /><span style={{ "font-weight": "bold", "font-size": "30px"}}>Topics covered:</span> <br />
                        <div className="seminar-flex"style={{"padding-top": "15px", "padding-bottom": "20px", "line-height":"1.7"}}>
                            <div>
                                &bull; Basics of Bhagavad Gita &amp; other vedic texts<br />
                                &bull; Detail study of Sonic meditation for stress free life<br />
                                &bull; Scientific proof of reincarnation<br />
                                &bull; Foods for Holistic Health – Intellectual, Mental, Physical &amp; Spiritual<br />
                            </div>
                            <div>
                                &bull; 5 Themes of Bhagavad gita<br />
                                &bull; Meaning of success through Bhagavad gita<br />
                                &bull; Best yoga for kaliyug<br />
                            </div>
                        </div>
                    <br /><span style={{ "font-weight": "bold", "font-size": "30px"}}>Benefits:</span> <br />
                        <div className="seminar-flex"style={{"padding-top": "15px", "padding-bottom": "20px", "line-height":"1.7"}}>
                            <div>
                            &bull; Better mental health<br />
                            &#8226; Inner peace<br />
                            &#8226; Positive thinking<br />
                            &#8226; Strong decision making<br />
                            </div>
                            <div>
                                &bull; Tension-Free Life<br />
                                &bull; Clarity between action and aspired results<br />
                                &bull; A sense of fulfillment in life
                            </div>
                        </div>
                    </p>
                    <div class="container">
                    <div class="row shadow">
                        <div class="col-md-12">
                            <div class="subscribe-contact wrap-box pdfull">
                                <div class="title-section">
                                    <h1 class="title">Register for the Seminar</h1>
                                    <div class="sub-title">
                                        Please enter the following details, in order to register for the seminar.
                                    </div>
                                </div>
                                {/* <form action="./contact/contact-process.php" method="post" id="formsubscribe" class="formsearch search-course"> */}
                                    <p class="subscribe-email">
                                        {/* <input type="text" id="emailsubscribe" name="name" style={{display: "inline"}} value="" onChange={(event) => setName(event.target.value)} required="required" placeholder="Your name here" /> */}
                                        <input type="text" id={name} style={{display: "inline"}} onChange={(event) => this.handleChange(event, 'name')} placeholder="Your name here" />
                                        <input type="text" id={number} onChange={(event) => this.handleChange(event, 'number')} placeholder="Your mobile number here" />
                                        <input type="text" id={email} onChange={(event) => this.handleChange(event, 'email')} placeholder="Your emal-id here" />
                                        <input type="text" id={address} onChange={(event) => this.handleChange(event, 'address')} placeholder="Your address here" />
                                        {/* <input type="email" id={email} style={{ margin: "10px", border: "none", width: "200px", height: "30px", "box-shadow": "2px 2px 8px grey"}} onChange={(event) => this.handleChange(event, 'email')} /> */}
                                    </p>
                                    <div class="subscribe-btn">
                                        <div class="wrap-btn">
                                            <button class="flat-btn bg-color" onClick={this.handleClick}>Subscribe Now</button> 
                                        </div>
                                    </div>
                                {/* </form> */}
                            </div>{/* subscribe-contact */}
                        </div>{/* Col-md-12 */}
                    </div>{/* row */}
                </div>{/* Container */}
            </div>
        )
    }
}

export default Seminar;