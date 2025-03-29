'use client';
import "./style.css";
// import Image from 'next/image';
// import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Add any client-side animations or interactions here
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-grid">
            <div className="logo">
              <a href="#">
                {" "}
                <img src="images/logo.svg" alt="Stacklens Logo" />
              </a>
            </div>
            <div className="nav-menu">
              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Find your stack</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="auth">
              <a href="#" className="btn btn-secondary">
                <span className="btn-bound">
                  <span className="btn-title" data-text="Login">
                    Login
                  </span>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="home-hero" id="hero">
          <div className="container">
            <div className="hero-content" >
              <span>Explore, Compare &amp; Build Smarter</span>
              <h1>Discover the Right Techstack - Fast &amp; Easy!</h1>
              <p>
                Your all-in-one platform to find trending technologies, compare
                stacks, and make better development choices – all in one place!
              </p>
              <a href="#" className="btn btn-primary">
                <span className="btn-bound">
                  <span className="btn-title" data-text="Find Your TechStack!">
                    Find Your TechStack!
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="home-hero-banner-img" >
          <div className="container">
            <img src="images/hero-banner-img.png" alt="" />
          </div>
        </div>

        <div className="language-logos-marquee">
          <div className="marquee-container" >
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/atom.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/gitlab.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/ionic.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/jira 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/js 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/sublime.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/laravel 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/atom.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/gitlab.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/ionic.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/jira 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/js 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/sublime.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/laravel 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/atom.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/gitlab.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/ionic.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/jira 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/js 1.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/sublime.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/angular.png" alt="" />
            </div>
            <div className="logo-card">
              <img src="images/laravel1.png" alt="" />
            </div>
          </div>
        </div>

        <section className="our-features">
          <div className="container">
            <div className="section-head" >
              <span>Discover a better ways to work!</span>
              <h2>
                The World’s #1 Platform to Discover, Compare &amp; Choose the Best
                Tech Stacks
              </h2>
            </div>
            <div className="features-row" >
              <div className="feature-card">
                <img src="images/link-circle-icon.svg" alt="" />
                <h4>All-in-One Platform</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  minus.
                </p>
              </div>
              <div className="feature-card">
                <img src="images/check-circle-icon.svg" alt="" />
                <h4>Simple &amp; Easy to Use</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  minus.
                </p>
              </div>
              <div className="feature-card">
                <img src="images/target-circle-icon.svg" alt="" />
                <h4>Smarter Tech Choices</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  minus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-slider-wrapper" id="direction" >
          <div
            className="marquee-slider">
            <img
              src="images/logo-u-circle-primary.svg"
              className="img-liquid"
              alt=""
            />
            <div>
              <p>Innovation</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Technology</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Explore</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Compare</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Frameworks</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Libraries</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Decisions</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Smarter</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Trending</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Effortless</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Efficiency</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Optimization</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Insights</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Development</p>
            </div>
            <div className="circle-dot" />
            <div>
              <p>Future-Ready</p>
            </div>
          </div>
        </div>
        <section className="why-us">
          <div className="container">

            <div className="whyus-rows-wrapper">
              <div className="whyus-row">
                <div className="image-col">
                  <img src="images/explore-stack-cover.png" alt="" />
                </div>
                <div className="content-col">
                  <h3>Explore Trending Stacks</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    delectus a sit quisquam mollitia voluptate quis at fugiat
                    deserunt quas laudantium, accusamus autem natus quod, doloremque
                    fugit perferendis quam neque.
                  </p>
                  {/* Button */}
                  <a href="#" className="btn btn-primary">
                    <span className="btn-bound">
                      <span className="btn-title" data-text="Explore now">
                        Explore now
                      </span>
                    </span>
                  </a>
                  {/* / */}
                </div>
              </div>
              <div className="whyus-row">
                <div className="content-col">
                  <h3>Browse Public Stacks</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    delectus a sit quisquam mollitia voluptate quis at fugiat
                    deserunt quas laudantium, accusamus autem natus quod, doloremque
                    fugit perferendis quam neque.
                  </p>
                  {/* Button */}
                  <a href="#" className="btn btn-primary">
                    <span className="btn-bound">
                      <span className="btn-title" data-text="Browse now">
                        Browse now
                      </span>
                    </span>
                  </a>
                  {/* / */}
                </div>
                <div className="image-col">
                  <img src="images/browse-public-stacks.png" alt="" />
                </div>
              </div>
              <div className="whyus-row">
                <div className="image-col">
                  <img src="images/compare-stacks-cover.png" alt="" />
                </div>
                <div className="content-col">
                  <h3>Compare Stacks</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    delectus a sit quisquam mollitia voluptate quis at fugiat
                    deserunt quas laudantium, accusamus autem natus quod, doloremque
                    fugit perferendis quam neque.
                  </p>
                  {/* Button */}
                  <a href="#" className="btn btn-primary">
                    <span className="btn-bound">
                      <span className="btn-title" data-text="Compare now">
                        Compare now
                      </span>
                    </span>
                  </a>
                  {/* / */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="get-started-cta">
          <div className="container">
            <div className="cta-row">
              <div className="content-col">
                <span>For every tech enthusiast</span>
                <h2>
                  Join a Global Community of Creatives, Designers &amp; Developers
                  today!{" "}
                </h2>
                {/* Button */}
                <a href="#" className="btn btn-secondary">
                  <span className="btn-bound">
                    <span className="btn-title" data-text="Get Started Now">
                      Get Started Now
                    </span>
                  </span>
                </a>
                {/* / */}
              </div>
              <div className="image-col">
                <img src="images/globe-glowing-vector.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}
