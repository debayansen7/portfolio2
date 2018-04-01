import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Debayansen from  '../assets/debayansen';
import Intro from '../components/intro';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ContactMe from '../components/contactme';


class Home extends Component {
  render(){
    return(
        <section className='wrapper'>
          <Header />
              Home is here. and you need to create the rest of it.
              {Debayansen}
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
