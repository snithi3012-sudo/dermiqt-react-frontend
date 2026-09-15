import "./RadiancePage.css";

function RadiancePage() {
  return (
    <section className="radiance-page">

      {/* =================================
          TOP SECTION
      ================================= */}

      <div className="radiance-top">

        {/* LEFT CONTENT */}

        <div className="radiance-left">

          <h1>
            Powerful skin
            <br />
            solutions visible
            <br />
            radiance
          </h1>

          <button className="stories-btn">
            ● WATCH OUR STORIES
          </button>

          <div className="science-box">

            <h3>
              Science-backed
              <br />
              hydration and
              <br />
              radiance
            </h3>

            <div className="science-product">
              <img
                src="/src/assets/rad-image2.jpg "
                alt="Science skincare" 
              />
            </div>

          </div>

          <p className="science-text">
            From skin that doesn't need. Feel a few
            <br />
            fresh eyes and modern glow.
          </p>

        </div>


        {/* RIGHT COLLAGE */}

        <div className="radiance-collage">

          <div className="collage-image image-one">
            <img
              src="/src/assets/rad-image4.jpg"
              alt=""
            />
          </div>

          <div className="collage-text text-one">
            <h4>Smart care</h4>
            <p>
              for thirsty
              <br />
              skin
            </p>
          </div>

          <div className="collage-image image-two">
            <img
              src="/src/assets/rad-image3.jpg"
              alt=""
            />
          </div>

          <div className="collage-text text-two">
            <h4>
              Daily skin
              <br />
              essentials
            </h4>
          </div>

          <div className="collage-image image-three">
            <img
              src="/src/assets/rad-image1.jpg"
              alt=""
            />
          </div>

          <div className="collage-text text-three">
            <h4>
              Your skin
              <br />
              deserves
            </h4>
          </div>

        </div>

      </div>


      {/* =================================
          BOTTOM SECTION
      ================================= */}

      <div className="radiance-bottom">

        {/* LEFT TEXT */}

        <div className="bottom-intro">

          <p className="intro-small">
            Original Skincare | Ethics
          </p>

          <h2>
            For Healthy, Glowing Skin
          </h2>

          <p className="intro-description">
            Skincare is Not Optional
          </p>

        </div>


        {/* CENTER IMAGE */}

        <div className="bottom-model">

          <img
            src="/src/assets/rad-image5.jpeg"
            alt="Glowing skin"
          />

        </div>


        {/* RIGHT CONTENT */}

        <div className="routine-content">

          <p className="routine-small">
            ✦ Glow the natural way
          </p>

          <h1>
            Routine is
            <br />
            the root of
            <br />
            radiance
          </h1>

          <p className="routine-description">
            Healthy skin begins with
            <br />
            consistent daily care.
          </p>

        </div>


        {/* BOTTOM CARDS */}

        <div className="healthy-card">

          <h3>
            Healthy Glowing Skin
          </h3>

          <strong>75%</strong>

        </div>


        <div className="wellness-card">

          <h3>
            Wellness in Mind
            <br />
            and Body
          </h3>

          <img
            src="/src/assets/rad-image6.jpg"
            alt=""
          />

        </div>


        <div className="natural-card">

          <h3>
            Natural Essence
          </h3>

          <img
            src="/src/assets/rad-image7.jpg"
            alt=""
          />

        </div>

      </div>

    </section>
  );
}

export default RadiancePage;