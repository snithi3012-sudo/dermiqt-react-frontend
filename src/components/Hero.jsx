function Hero() {
  return (
    <section className="hero">

      {/* =========================
          LEFT CONTENT
      ========================= */}

      <div className="hero-content">

        <p className="small-text">
          ♡ Care your skin naturally
        </p>

        <h1>
          Care 
          <br />
          Beyond
          <br />
          Boundaries
        </h1>

        <button className="hero-button">
          Shop
          <br />
          Now
        </button>

        <div className="organic">

          <span>100%</span>

          <p>
            Organic
            <br />
            <small>
              your skin the natural way
            </small>
          </p>

        </div>

      </div>


      {/* =========================
          CENTER IMAGE
      ========================= */}

      <div className="hero-image-area">

        <div className="model-image">

          <img
            src="/src/assets/hero-model.jpg"
            alt="Skincare model"
          />

        </div>

      </div>


      {/* =========================
          RIGHT CONTENT
      ========================= */}

      <div className="hero-text">

        <p>
          Natural Growth
        </p>

        <h2>
          Bold Skin
          <br />
          Begins with
          <br />
          Balance
        </h2>

        <p className="bottom-text">
          🌱 Natural facial skincare must
          <br />
          be in every beauty
        </p>

      </div>

    </section>
  );
}

export default Hero;