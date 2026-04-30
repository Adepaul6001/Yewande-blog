import "../Component/Hero.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container">
      <div>
        <div className="first-hero"></div>
        <div className="second-hero">
          <img src="/yewande1.jpeg" alt="" />
        </div>
        <div className="Message-box">
          <p>APRIL 15 , 2026 • FEATURED • COMMENTS</p>
          <div className="divider"></div>
          <Link className="text-link" to="./Blog">
            <h1>
              #1000 On Campus: Where LASU Students Can Still Eat Well On a
              Budget
            </h1>
          </Link>

          <p className="description">
            #1000 used to feel like enough to get a decent meal and go through
            the day without stress. But for many students at Lagos State
            university (LASU), that reality has changed...
          </p>

          <Link className="icon-wrapper" to="./Blog">
            <span>Read More</span>
            <FiArrowRight className="icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
