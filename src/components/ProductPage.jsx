import "./ProductPage.css";

function ProductPage() {
  return (
    <section className="product-page">

      {/* =========================
          TOP
      ========================= */}

      <div className="product-header">

        <div className="product-heading">
          Your next favorite
          <br />
          right here
        </div>

        <div className="brand-text">
          BEAUTYCARE
          <span>Skincare</span>
          <span>Wellness</span>
        </div>

      </div>


      {/* =========================
          PRODUCTS
      ========================= */}

      <div className="product-grid">

        {/* PRODUCT 1 */}

        <div className="product-card">

          <div className="product-photo">
            <img
              src="/src/assets/pro-image1.jpg"
              alt="Bun Beauty Oil"
            />
          </div>

          <div className="product-info">
            <span>Bun Beauty Oil</span>
            <small>$18.00</small>
          </div>

        </div>


        {/* PRODUCT 2 */}

        <div className="product-card">

          <div className="product-photo">
            <img
              src="/src/assets/pro-image2.jpg"
              alt="Exfoliator Gel"
            />
          </div>

          <div className="product-info">
            <span>Exfoliator Gel</span>
            <small>$24.00</small>
          </div>

        </div>


        {/* PRODUCT 3 */}

        <div className="product-card">

          <div className="product-photo">
            <img
              src="/src/assets/pro-image3.jpg"
              alt="Moose Serum"
            />
          </div>

          <div className="product-info">
            <span>Moose Serum</span>
            <small>$28.00</small>
          </div>

        </div>

      </div>


      {/* =========================
          BOTTOM FEATURE
      ========================= */}

      <div className="skin-feature">

        {/* LEFT IMAGE */}

        <div className="feature-image">
          <img
            src="/src/assets/pro-image4.jpg"
            alt="Skin glow"
          />
        </div>


        {/* RIGHT CONTENT */}

        <div className="feature-content">

          <p className="feature-small">
            ✦ What we do best
          </p>

          <h2>
            Skin glows when
            <br />
            the soul does
          </h2>

          <p className="feature-description">
            Great skin starts with better habits.
            <br />
            Give your skin the care it deserves.
          </p>

          <div className="feature-stats">

            <div>
              <strong>96%</strong>
              <span>Natural Ingredients</span>
            </div>

            <div>
              <strong>29%</strong>
              <span>Better Skin</span>
            </div>

          </div>

          <div className="feature-buttons">
            <button>GET STARTED</button>
            <span>LEARN MORE →</span>
          </div>

          <div className="sun-icon">
            ✺
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductPage;