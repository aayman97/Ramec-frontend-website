import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree ,faImage,faTractor,faBroom,faChevronLeft,faChevronRight,faHome,faPhoneAlt,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faGoogle,faInstagram,faPinterest,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import imageOne from './1.jpg'
import imageTwo from './2.jpg'
import imageThree from './3.jpg'
import imageFour from './4.jpg'
import imageFive from './5.jpg'

function App() {

  const [activeIndex,setActiveIndex] = React.useState(0) 
 

  return (
    <div className="App">
      <div className="backgroundImage">
        <nav className="navigationBar">
        <h1 className="logo">RA<span>ME</span>C</h1>
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Pages">Pages</a></li>
            <li><a href="Services">Services</a></li>
          </ul>
          <div className="Buttons">
            <button>Sign Up</button>
            <button>Log In</button>
          </div>
        </nav>


        <div className="TitleAndDesicription">
            <h1>First Impression Matters</h1>
            <h6>Trust The Ground Guys professionals to take care of your commercial or residential grounds</h6>
           
            <button>Read More</button>
        </div>

        <div className='gridContainer'>
            <section className='services'>
               <FontAwesomeIcon icon={faTree} size="4x" color="white"/>
                <h1>Tree Plantation</h1>
            </section>

            <section className='services'>
                <FontAwesomeIcon icon={faImage} size="4x" color="white"/>
                <h1>Landscape</h1>
            </section>

            <section className='services'>
                <FontAwesomeIcon icon={faTractor} size="4x" color="white"/>
                <h1>Irrigation</h1>
            </section>

            <section className='services'>
                <FontAwesomeIcon icon={faBroom} size="4x" color="white"/>
                <h1>Fall Clean up</h1>
            </section>
        </div>
      </div>

      <div className="backgroundImage2">
          <h2>Project <span>Galleries</span></h2>
          <h4>With so many years of experience in the business, our company is your source for the highest quality and landscaping service.</h4>

          <div className="galleryContainer">
            <div className="scrollTransition" id="scrollableContainer">
            <div className="imageContainer" >
                <img src={imageOne} className="one"/>
                <div className="viewGallery">
                      <button className="viewGalleryButton">View Project</button>
                </div>
                    
              </div>

              <div className="imageContainer" >
                      <img src={imageTwo} className="one"/>
                      <div className="viewGallery">
                         <button className="viewGalleryButton">View Project</button>
                      </div>
              </div>

              <div className="imageContainer" >
                   <img src={imageThree} className="one"/>
                   <div className="viewGallery">
                      <button className="viewGalleryButton">View Project</button>
                  </div>
              </div>

              <div className="imageContainer" >
                  <img src={imageFour} className="one"/>
                  <div className="viewGallery">
                  <   button className="viewGalleryButton">View Project</button>
                  </div>
              </div>

              <div className="imageContainer" >
                 <img src={imageFive} className="one"/>
                 <div className="viewGallery">
                     <button className="viewGalleryButton">View Project</button>
                </div>
             </div>
             </div>
          </div>

          <div className="arrowContainer">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color="yellow" onClick = {() => {
          
           if(activeIndex-1 < 0){
             setActiveIndex(0)
           }
           else{
            const index = activeIndex-1
            var scrollableContainer = document.getElementById('scrollableContainer')
            scrollableContainer.style.transform =`translateX(${index*-320}px)`;
           setActiveIndex(index)
           }
         
          }}/>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="yellow"  onClick = {() => {
          if(activeIndex+1 >= 2){
            setActiveIndex(1)
          }else{
            const index = activeIndex+1
            var scrollableContainer = document.getElementById('scrollableContainer')
            scrollableContainer.style.transform =`translateX(${index*-320}px)`;
            setActiveIndex(index)
          }

      }}/>
          </div>
          
      </div>

      <div className="aboutContainer">
          <div className="aboutCell">
              <h1>About us</h1>
              <h5 className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum, elit ut facilisis mattis, neque mi venenatis arcu, at commodo dolor dolor non ipsum. Nunc ut est mi. Sed sapien libero, maximus vel nisl vel, euismod ornare ligula. Fusce porttitor neque nisi, quis commodo sapien rutrum at. Suspendisse vestibulum, lectus quis accumsan laoreet, lorem purus bibendum massa, vitae porttitor purus enim sit amet ante. Proin suscipit vitae lacus porta viverra. Nulla cursus suscipit ante nec malesuada. Etiam lobortis eros semper turpis vulputate vehicula. Ut blandit lorem eu nibh condimentum, sed volutpat metus molestie. Praesent vehicula maximus risus, at aliquam metus congue at. Vestibulum ut ligula non sapien scelerisque placerat quis eu lectus. Nullam sit amet accumsan arcu. Proin euismod aliquam nunc, vitae hendrerit dui finibus non.</h5>
          </div>
          
          <div className="aboutCell">
             <h1>Contact us</h1>
             <h5 className='details'>Thank you for your interest in RAMEC. Please contact us using the information below. </h5>
              <h5  className= "firstIcon"><FontAwesomeIcon icon={faHome} size="1x" color="white"/><span>94 El-Mostafa St, Kebaa, Industrial Zone – Gesr El Suez, Cairo, Egypt</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faPhoneAlt} size="1x" color="white"/><span>(+20) 2698 9511</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faPhoneAlt} size="1x" color="white"/><span>(+20) 102 204 7188</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faPhoneAlt} size="1x" color="white"/><span>(+20) 100 539 6718</span></h5>
          </div>

          <div className="aboutCell">
              <h1>Socials</h1>
              <h5  className= "firstIcon"><FontAwesomeIcon icon={faFacebook} size="1x" color="white"/><span>Facebook</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faTwitter} size="1x" color="white"/><span>Twitter</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faGoogle} size="1x" color="white"/><span>Google</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faInstagram} size="1x" color="white"/><span>Instagram</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faPinterest} size="1x" color="white"/><span>Pintrest</span></h5>
              <h5  className= "icons"><FontAwesomeIcon icon={faLinkedin} size="1x" color="white"/><span>Linkedin</span></h5>
          </div>
      </div>
    </div>
  );
}

export default App;
