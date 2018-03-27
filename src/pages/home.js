import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Debayansen from  '../assets/debayansen';

class Home extends Component {
  render(){
    return(

        <section>
        <Header />
            Home is here. and you need to create the rest of it.
            {Debayansen}
        <Footer />
        </section>


    );
  }
}

export default Home;
