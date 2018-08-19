import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Nourriture means "food" in French, but to me it represents so much more. Food is meant to nourish the body and nurture the soul. Sharing a meal should be one of the most precious and enjoyable acts you can experience with your family and friends. ​​
          <a href="#work">awesome work</a>.</p>
          <p>Looking to incorporate the joy of food into your next Seattle-area event or get together? Let Nourriture cater your happening or bring personalized, delicious meals straight to your door.</p>
          {close}
        </article>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Services</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>I offer a wide scope of culinary services, covering everything from private cooking lessons, full service catering, or an intimate tasting menu for two.</p>
          <p>Here are just a few ideas of what nourriture can do for you:</p>
          <ul>
            <li>Event catering</li>
            <li>Dinner parties</li>
            <li>Business luncheons</li>
            <li>Meal planning and preparation</li>
            <li>Weekly prepared, ready-to-heat meals</li>
            <li>Individual/group cooking demonstrations</li>
          </ul>
          <p>Whether you want to impress your clients with a private five-course meal, learn how to eat healthier, or need your daughter&#39;s graduation catered, look no further! I would be thrilled to work with you to personalize your perfect event, menu, or meal plan.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>I&#39;m Eric Teachout, the Chef behind Nourriture.</p>
          <p>My passion for the culinary arts started at a very young age. Growing up, I would watch cooking shows instead of cartoons, and always enjoyed going shopping with my mom to select ingredients for that night&#39;s dinner. I enrolled in every cooking class I could throughout middle school and high school, and proceeded to graduate Culinary School at age 20.</p>
          <p>After graduating, I traveled overseas to further hone my craft. I trained in notable kitchens in France and Italy, absorbing classical and modern technique. Here in Washington, I have worked my  way up in the kitchens of Seattle&#39;s upscale dining scene and have years of experience catering private events both large and small.</p>
          <p>While I love all styles of cooking, I find my greatest satisfaction in creating healthy, internationally inspired cuisine. I find a deep satisfaction in utilizing ingredients from all around the globe, and finding unique ways to combine them into delicious, intensely satisfying dishes. My expansive knowledge of food preparation and nutrition can benefit anyone looking to improve upon their own culinary knowledge or nutrition plan... and if you&#39;re just looking for a delicious meal for your next party or event, I can provide that too!</p>
          <p>Whatever your personal culinary wishes entail, I am confident I have the skill and experience to fulfill and exceed your expectations.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
