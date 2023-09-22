import Link from "next/link";
import HomeNotes from "./blog/(components)/homePageNote/homeNotes";
import HomeCards from "./blog/(components)/homeCards/homeCards";
import Facilities from "./(components)/facilities/facilities";
import TestCard from "./(components)/testCard/testCard";

export default function Home() {
  return (
    <>
      <section class="header">
        <nav>
          <a href="index.html" class="logo">
            Xplore
            <i class="fab fa-staylinked"></i>kill
          </a>
          <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Course</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>

        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" class="hero_btn">
            Visit Us To Know More
          </a>
        </div>
      </section>

      <section class="course">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>
          EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <HomeNotes
            title="Undergraduate Programs"
            para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor
        corporis, commodi nihil quas soluta labore quisquam impedi distinctio
        explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
          />
          <HomeNotes
            title="Graduate Programs"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
          />
          <HomeNotes
            title="Adult Learning & Degree Completion"
            para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor
        corporis, commodi nihil quas soluta labore quisquam impedi distinctio
        explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
          />
        </div>
      </section>

      <section class="campus">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">

            <HomeCards title="Lahore" src="/Campus1.png"/>
            <HomeCards title="Karachi" src="/Campus2.png"/>
            <HomeCards title="Faisalabad" src="/Campus3.png"/>
            
        </div>
    </section>

    <section class="facilities">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <Facilities title="Best Libary" src="/libary.png"/>
            <Facilities title="Athletics" src="/playground.png"/>
            <Facilities title="Tasty and Healthy Food" src="/food.png"/>
            
        </div>
    </section>

    <section class="testimonials">
        <div class="PageBlock">
            <div class="verticalLine"></div>
            <div class="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">   
        <TestCard src="/user.png"/>
        <TestCard src="/user.png"/>
     </div>
    </section>

    <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" class="hero_btn">CONTACT US</Link>
        {/* <a href="contact.html" class="hero_btn">CONTACT US</a> */}
    </section>


    </>
  );
}
