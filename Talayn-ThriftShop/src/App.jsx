import { useState } from 'react';
import './App.css';

import { FaInstagram, FaEbay, FaShopify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import TagHolder1 from './assets/TalaynImages/TagHolder/handleOne.png';
import street01 from './assets/TalaynImages/Jackets/Jacket01First.png';
import street02 from './assets/TalaynImages/Jackets/Jacket01BrandAndSize.png';
import street03 from './assets/TalaynImages/Jackets/TigerSkullJacket.webp';
import Flannels01 from './assets/TalaynImages/Flannels/black&GrayFlannel.webp';
import Flannels02 from './assets/TalaynImages/Flannels/BlueJeanFlannel01.webp';
import Flannels03 from './assets/TalaynImages/Flannels/BlueJeanFlannel.webp';
import Flannels04 from './assets/TalaynImages/Flannels/blueFlannelWithRedStripes.webp';
import Jerseys01 from './assets/TalaynImages/Jerseys/GastonCollege.webp';
import Jerseys02 from './assets/TalaynImages/Jerseys/NCStateSweatShirt.webp';
import Jerseys03 from './assets/TalaynImages/Jerseys/StealersJersey.webp';
import Jerseys04 from './assets/TalaynImages/Jerseys/WinsconsinJersey.webp';
import Shirt01 from './assets/TalaynImages/Shirts/ChapelHillSweatShirt.webp';
import Shirt02 from './assets/TalaynImages/Shirts/DanTyminskiBandShirt.webp';
import Shirt03 from './assets/TalaynImages/Shirts/PurpleSweatShirt.webp';
import Shirt04 from './assets/TalaynImages/Shirts/TanSweater.webp';
import Shirt05 from './assets/TalaynImages/Shirts/YeezusShirt.webp';
import OwnerPhoto from './assets/TalaynImages/TagHolder/handleTwo.png';
import Shorts01 from './assets/TalaynImages/Shorts/GrayJorts.webp';
import Shorts02 from './assets/TalaynImages/Shorts/GreyShorts.webp';
import Pants01 from './assets/TalaynImages/Pants/BlackSkinnyJeans.webp';
import Pants02 from './assets/TalaynImages/Pants/BlueJeansRippedJeans.webp';
import Pants03 from './assets/TalaynImages/Pants/BlueJeansWithEagleOnBack.webp';
import Pants04 from './assets/TalaynImages/Pants/BrownSkinnyJeans.webp';
import Pants05 from './assets/TalaynImages/Pants/GrayJoggers.webp';
import Pants06 from './assets/TalaynImages/Pants/GreySkinnyJeans.webp';
import Pants07 from './assets/TalaynImages/Pants/LegendPants.webp';
import Pants08 from './assets/TalaynImages/Pants/LightBrownPants02.webp';
import Pants09 from './assets/TalaynImages/Pants/Pants01First.png';
import Pants10 from './assets/TalaynImages/Pants/StrippedWhiteLineBlueJoggers.webp';


function ImageCarousel({ title, images}) {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };


  return (
    <div className="carousel-card">
      <h3>{title}</h3>

      <div className="carousel">
        <button className="arrow-Left" onClick={prev}>
          ‹
        </button>

        <img
          className="carousel-image"
          src={images[index]}
          alt={title}
        />

        <button className="arrow-Right" onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
}

function FullscreenGallery({ title, images, onClose }) {
  const [selectedImage, setSselectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  return (
    <div className= "modal">
      <button className="modal-close" onClick={onClose}> X </button>
     
     {selectedImage ? (
      <>
      <button className = "modal-back"
      onClick={() => {setSselectedImage(null);
        setZoom(1);
      }}

      >
       Back
      </button>

      <div className="zoom-controls">
        <button onClick={() => setZoom((z) => Math.max(1, z - 0.25))}>
          -
        </button>

        <button onClick ={() => setZoom((z) => Math.min(5, z + 0.25))}>
          +
        </button>


        <button onClick={() => setZoom(1)}> 
          Reset
        </button>
      </div>

      <div className = "single-image-view">
        <img src={selectedImage} alt={`${title} enlarged`}
        style={{
          transform: `scale(${zoom})`,
          transition: "transform 0.25s ease"
        }}
        />
      </div>
      </>
      ) : (
        <>
     
     
      <h2> {title} </h2>
    
      <div className="modal-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} ${index + 1}`} 
          onClick={() => {
          setSselectedImage(image);
          setZoom(1);
          }}
          />
        ))}
      </div>
      </>
      )}
      </div>
  );
}

function AboutPage({ onBack }){
  return(
    <section className="about-page">
      <div className="about-page-card">
        <div className="about-page-image">
          <img
          src="https://placehold.co/600x750?text=Owner+Photo"
          alt="Owner palceholder"
          />
        </div>
          <div className="about-page-text">
            <h1>About <span>Talayn Thrift Shop </span> </h1>

            <p>
              This is a placeholder about section. Later, the owner can replace this
              text with their real story, brand, mission, and what makes their thrift 
              shop different.
            </p>
            <p>
              Add details like how the pieces are found, cleaned, styled, and 
              prepared before being posted for customers.
            </p>
          </div>
        </div>

        <button className="back-to-main" onClick={onBack}>
          Back To Main Site
        </button>
    </section>
  );
}

function App() {
  const streetwearImages= [street01, street02];
  const flannelImages = [Flannels01, Flannels02, Flannels03, Flannels04];
  const jerseysImages = [Jerseys01, Jerseys02, Jerseys03, Jerseys04];
  const shirtsImages = [Shirt01, Shirt02, Shirt03, Shirt04, Shirt05];
  const ShortsImages = [Shorts01, Shorts02];
  const PantsImages = [Pants01, Pants02, Pants03, Pants04, Pants05, Pants06, Pants07, Pants08, Pants09, Pants10];

  //for our about page
  const [showAboutPage, SetShowAboutPage] = useState(false);

  // Add this right here
  const [openGallery, setOpenGallery] = useState(null);
//   This creates the variable openGallery and the function setOpenGallery(), which you're already trying to use here:
// Without that state, React doesn't know what setOpenGallery is.


  const galleries = {
    Jackets: streetwearImages,
    Flannels: flannelImages,
    Jerseys: jerseysImages,
    Shirts: shirtsImages,
    Shorts: ShortsImages,
    Pants: PantsImages
  };

  if(showAboutPage) {
    return<AboutPage onBack={() => SetShowAboutPage(false)} />
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <section id="center">
        <div className="hero-overlay">
          <h1 className="hero-title">TALAYN <span>THRIFT SHOP</span></h1>

          <p className="small-tag">RARE FINDS | STREETWEAR | VINTAGE</p>

          <h1 className="hero-slogan">HUNTED
          <span>CLEANED</span> 
          <span>CURATED</span>
          </h1>

          <p className="hero-description">
            Rare pieces, vintage heat, and second-life fashion drops.
            Every item is hand-picked, cleaned, and ready to wear.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection('portfolio')}>
              SHOP DROPS
            </button>

            <button onClick={() => scrollToSection('about')}>
              OUR STORY
            </button>
          </div>
        </div>
      </section>

      <section id="next-steps">
        <div id="docs">
          <h2 id="portfolio">LATEST DROPS</h2>
          <p>One-of-one finds you won’t see everywhere.</p>

          <div className="gallery-carousels">
            <ImageCarousel title="Jackets" images={streetwearImages} />
            <ImageCarousel title="Jerseys" images={ jerseysImages } />
             <ImageCarousel title="Flannels" images={ flannelImages} /> 
             <ImageCarousel title="Shirts" images={ shirtsImages } />
             <ImageCarousel title="Shorts" images={ ShortsImages } />
             <ImageCarousel title="Pants" images={ PantsImages } />
    
          </div>

        </div>
      </section>

      <section id="categories">
        <h2>CATEGORIES</h2>
        <h3> click on a category to view inventory on a bigger scale</h3>

        <div className="category-grid">

          {/* 
          //before we had the full screen gallery, we had these category
          //  cards that just scrolled through the images.
          //  I kept them in the code because they are a good backup
          //  if we want to go back to that style.
          <div className="category-card"> Jackets</div>
          <div className="category-card"> Jerseys</div>
          <div className="category-card"> Flannels</div>
          <div className="category-card"> Shirts</div> */}
          {Object.keys(galleries).map((category) => (
            <button 
            key={category}
            className="category-card"
            onClick={() => setOpenGallery(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </section>

      <section id="about">
        <div className="about-container">
          <div className="about-image">
            <img
            //this was our placeholder image for the owner photo, but we can replace it with an actual photo of the owner when we get one.
              src={OwnerPhoto}
              alt="owner"
              // src="https://placehold.co/500x600?text=Owner+Photo"
              // alt="owner"
            />
          </div>

          <div className="about-text">
            <h2>OUR STORY</h2>

            <p>
              We hunt thrift stores, hidden gems, and rare second-hand pieces
              to give quality fashion a second life.
            </p>

            {/* <button>LEARN MORE</button> */}
            <button onClick={() => SetShowAboutPage(true)}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="social">
        <h2>CONNECT</h2>

        <p>Email us about an item, sizing, or upcoming drops.</p>

        <p>Follow us on social media for the latest updates!</p>

        <div className="social-links">
         {/* Replace the # with the client's real Instagram URL */}
         <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          Instagram
         </a>

          {/* Replace the # with the client's real Shopify URL */}
         <a href="#" target="_blank" rel="noopener noreferrer">
          <FaShopify />
          Shopify
         </a>
         
         {/* Replace the # with the client's real Email URL */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <MdEmail />
            Email
          </a>
        </div>
      </section>

      {openGallery && (
        <FullscreenGallery
        title={openGallery}
        images={galleries[openGallery]}
        onClose={() => setOpenGallery(null)}
        />
      )}

    </>
  );
}

export default App;