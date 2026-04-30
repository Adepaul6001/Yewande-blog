import React from "react";
import "../Component/BlogHero.css";
import SpendingChart from "./SpendingChart.jsx";

const BlogHero = () => {
  return (
    <section className="blog-container">
      <div className="blog-content">
        <h2 className="blog-title">
          #1000 On Campus: Where LASU Students <br />
          Can Still Eat Well On a Budget
        </h2>
        <p className="Meta">Written by Adekunle Yewande. April 15th, 2026</p>
        {/* TOP SECTION */}
        <div className="top-section">
          <p className="notes">
            ₦1,000 used to feel like enough at least enough to get a decent meal
            and go through the day without stress. But for many students at
            Lagos State University (LASU), that reality has changed. Now, ₦1,000
            feels like a test of survival. From skipping meals to settling for
            less, students are constantly making tough choices just to stay fed.
            But in the middle of rising food prices and daily struggles, one
            question remains:
            <strong> Can You Still Eat Well On Campus With Just ₦1,000?</strong>
          </p>
          <img className="intro-img" src="./Food-label.png" alt="food image" />
        </div>

        <div className="divider line"></div>
        <h3> The Reality </h3>
        <p className="notes1">
          Food prices across Nigeria have increased significantly in recent
          times, and students are among those feeling the pressure the most.
          From basic staples like rice to everyday meals sold on campus, prices
          have gone up, while student income has remained the same. Many LASU
          students now struggle to maintain a balanced diet, often having to
          sacrifice quality for affordability. “Sometimes ₦1,000 is all I have
          for the whole day,” Pelumi AFOLABI a 100 level LASU student shared.
          For students who depend on allowances from home or small side hustles,
          feeding has become a daily challenge that requires careful budgeting.
        </p>

        <div className="divider line"></div>
        <h3> Where Students Actually Eat </h3>
        <p className="notes1">
          Despite the situation, there are still places around LASU where
          students can manage to eat with ₦1,000 if they spend wisely. From
          personal experience and conversations with other students, these spots
          have become regular survival points.
        </p>
        <h3 className="notes2"> Iya Quadri Ewa Goyin</h3>
        <div className="top-section">
          <img className="intro-img intro-img1" src="./Ewa-goyin.png" alt="" />
          <p className="notes1">
            Located around the back of eco market , this food vendor is popular
            among students for her affordable and satisfying meals. She sells
            yam and beans, ewa goyin, plantain and rice. Her beans and bread
            (ewa goyin) the main banger !! I remember one afternoon when I was
            really hungry but only had ₦1,000 left. I decided to try her beans
            and bread , and honestly, it was more filling than I expected. The
            portion was generous, and it lasted me almost the entire day. It’s
            no surprise many students keep going back.
          </p>
        </div>
        <h3 className="notes2"> Iya Dayo Amala Spot</h3>
        <div className="top-section">
          <img className="intro-img intro-img1" src="./Iya-dayo.png" alt="" />
          <p className="notes1">
            Iya Dayo is widely recognized for serving one of the best swallow
            meals inside LASU campus !! She offers options like semo, amala,
            eba, and pounded yam (iyan), with rich soups like ewedu ,Efo riro
            and egusi. She has two branches one at the Eco Market and another
            inside the Student Arcade making her food easily accessible. With
            ₦1,000, students can still enjoy a decent portion of swallow,
            especially if they budget carefully.
          </p>
        </div>
        <h3 className="notes2"> Eco Market Food Bites</h3>
        <div className="top-section">
          <img className="intro-img intro-img1" src="./ECO-MARKET.png" alt="" />
          <p className="notes1">
            This spot is well known for its quick and affordable meals,
            especially for students on the move. They sell well-prepared toast
            bread with egg, often paired with a cold drink to “step it down.”
            There are days when lectures are tight, and there’s no time for a
            full meal. On one of those days, I grabbed toast and a drink here,
            and it was just enough to keep me going till evening. It may look
            simple, but it really helps when you’re trying to manage your money.
          </p>
        </div>
        <h3 className="notes2"> Bro Maleek Fss Canteen</h3>
        <div className="top-section">
          <img
            className="intro-img intro-img1"
            src="./Fss-canteen.png"
            alt=""
          />
          <p className="notes1">
            Located within the Faculty of Social Sciences, Bro Maleek’s canteen
            is a favorite for many students. He serves rice, spaghetti,
            plantain, and wanke, and his jollof rice is one of the best around.
            I’ve personally tried his jollof rice, and I understand why students
            hype it so much. Even with ₦1,000, you can still get a decent plate
            if you go for simple options. It’s one of those places where you
            feel like you’re getting value for your money.
          </p>
        </div>
        <div className="divider line"></div>
        <h3> Smart Student Hack </h3>
        <p className="notes1">
          To survive on a tight feeding budget, students have developed
          different strategies:
        </p>
        <ul className="list-item">
          <li>
            <strong>Sharing meals:</strong> Two friends contribute money to buy
            one large meal
          </li>
          <li>
            <strong>Skipping protein:</strong> Many students avoid meat or fish
            to save money
          </li>
          <li>
            <strong>Buying in bulk:</strong> Foods like garri, noodles, and
            bread are cheaper and last longer
          </li>
          <li>
            <strong>Drinking water instead of buying drinks:</strong> Helps
            reduce extra spending
          </li>
          <li>
            <strong>Eating once or twice a day:</strong> Some students reduce
            meal frequency to cut costs
          </li>
        </ul>
        <div className="divider line"></div>
        <h3> ₦1,000 Spending Breakdown </h3>
        <div className="top-section">
          <p className="notes1">
            A closer look at student spending shows that most of the budget goes
            into a single main meal, leaving little room for extras. Students
            often rely on affordable add-ons and minimize spending on drinks to
            stay within budget.
          </p>
          <SpendingChart />
        </div>

        <small>Estimated spending pattern among LASU students</small>
        <div className="divider line"></div>
        <h3> What ₦1,000 Really Feels Like as a LASU Student </h3>
        <p className="notes1">
          On paper, ₦1,000 might still sound manageable. But on campus, it
          rarely goes as far as expected. For most students, it’s not just about
          what you can buy it’s about what you have to give up. A proper meal
          might mean skipping something later. Adding protein could mean going
          over budget. Every choice comes with a trade-off. Over time, these
          small decisions add up, shaping how students eat and live day to day.
          But beyond the numbers and assumptions, the reality is best understood
          from the students themselves:
        </p>
        <div className="top-section">
          <p className="video">
            <em>
              Listen to how a LASU student describes what ₦1,000 really feels
              like:
            </em>
          </p>
          <audio className="vendors" controls>
            <source src="./student-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="divider line"></div>
        <h3> Vendor Perspective </h3>
        <p className="notes1">
          Food vendors around LASU also face their own challenges. The rising
          cost of ingredients like rice, oil, and gas has forced many of them to
          increase prices or reduce portion sizes. According to one vendor, “We
          don’t want to increase prices too much because students are our main
          customers, but things are expensive for us too.” This shows that both
          students and vendors are trying to cope with the same economic
          reality.
        </p>
        <div className="top-section">
          <p className="video">
            <em>
              Watch the video below to hear directly from campus food vendors as
              they share their struggles and how they are adapting to rising
              costs.
            </em>
          </p>
          <video
            controls
            muted
            loop
            src="./vendors-video.mp4"
            className="vendor"
          ></video>
        </div>
        <div className="divider line"></div>
        <h3> Conclusion </h3>
        <p className="notes1">
          ₦1,000 may not carry students as far as it used to, but on the LASU
          campus, it still tells a story of resilience. Every plate of food,
          every shared meal, and every smart choice reflects how students are
          learning to survive and adapt in tough times. From Igbo Elerin to Eco
          Market and the Arcade, one thing is clear students are not just
          finding ways to eat, they are finding ways to keep going. And even in
          the face of rising costs, that determination remains stronger than any
          price increase.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
