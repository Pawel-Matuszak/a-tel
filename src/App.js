import React, {useRef} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Map from "./Components/Map"
import Button from "./Components/Button"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About"
import References from "./Components/References";
import Equipment from "./Components/Equipment";
import Gallery from "./Components/Gallery";
import { useIntersection } from "react-use"
import gsap from "gsap"

function App() {

  const hero = useRef(null)
  const about = useRef(null)
  const references = useRef(null)
  const equipment = useRef(null)
  const contact = useRef(null)

  const bgNotActive = element =>{
    gsap.fromTo(element, {}, {
      backgroundColor: "#073A7D"
    })
  }

  const bgActive = element => {
    gsap.fromTo(element, {}, {
      backgroundColor: "#062E63"
    })
  }

  const heroIntersection = useIntersection(hero, {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  })

  const aboutIntersection = useIntersection(about, {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  })

  const referencesIntersection = useIntersection(references, {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  })

  const equipmentIntersection = useIntersection(equipment, {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  })

  const contactIntersection = useIntersection(contact, {
    root: null,
    rootMargin: "50%",
    threshold: 1,
  })
  

  heroIntersection && heroIntersection.intersectionRatio < 1 
    ? bgNotActive(hero.current)
    : bgActive(hero.current)

  aboutIntersection && aboutIntersection.intersectionRatio < 1 
    ? bgNotActive(about.current)
    : bgActive(about.current)

  referencesIntersection && referencesIntersection.intersectionRatio < 1 
    ? bgNotActive(references.current)
    : bgActive(references.current)

  equipmentIntersection && equipmentIntersection.intersectionRatio < 1 
    ? bgNotActive(equipment.current)
    : bgActive(equipment.current)

    contactIntersection && contactIntersection.intersectionRatio < 1 
    ? bgNotActive(contact.current)
    : bgActive(contact.current)

  return (
    <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
          <Route path="/gallery">
            <Gallery/>
          </Route>

          <Route path="/">
            <Hero passRef={hero}/>
            <About passRef={about}/>
            <References passRef={references}/>
            <Equipment passRef={equipment}/>
            <Contact passRef={contact}/>
            <Map/>
          </Route>

        </Switch>
        <Footer/>
    </Router>
    
  );
}
export default App;
