
import React,{Component} from 'react'
import Home from './../home/home'
import Portfolio from './../portfolio/portfolio'
import Profile from './../profile/profile'
import Work from './../work/work'
import Socialmedia from './../socialMedia/socialMedia'
import About from './../about/about'
import Footer from './../footer/footer'


class Index extends Component {
  render() {
  return (
    <div > 
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <Socialmedia/>
      <Footer/>
      
    </div>
  );
}
}
export default Index;
