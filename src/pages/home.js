import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Intro from '../components/intro';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactMe from '../components/contactme';
import SideMenu from '../components/sideMenu';

// import Debayansen from  '../assets/debayansen';
import * as debayansen from  '../assets/debayansen';

class Home extends Component {
  render(){
    return(
        <section className='wrapper homeWrapper'>
          <Header />
            <SideMenu/>
              Home is here. and you need to create the rest of it.
              {debayansen.professional_summary}
              <Intro />
              <AboutMe />
              <Skills />
              <Projects />
              <ContactMe />
          <Footer />
        </section>
    );
  }
}

export default Home;
