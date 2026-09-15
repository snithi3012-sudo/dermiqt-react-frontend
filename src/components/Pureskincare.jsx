import "./PureSkincare.css";

function PureSkincare() {
  return (
    <section className="pure-page">

      {/* TOP */}
      <div className="pure-top">

        <h2>Pure Skincare</h2>

        <div className="top-images">
          <img src="/src/assets/pure-image4.jpg" alt="IMAGE4" />
          <img src="/src/assets/pure-image5.jpg" alt="" />

          <span>SEE MORE ↗</span>
        </div>

      </div>


      {/* HEADING */}
      <div className="pure-heading">

        <p>
          Lot your skin naturally never itself,
          <br />
          apply every day for a clear, youthful
          <br />
          face everyday!
        </p>

        <h1>
          Elevated Naturally
        </h1>

      </div>


      {/* CARDS */}
      <div className="pure-cards">

        {/* LEFT */}
        <div className="care-card">

          <h3>
            Ageless starts
            <br />
            with care
          </h3>

          <div className="product-image">
            <img
              src="/src/assets/pure-image.jpg"
              alt="Skincare bottle"
            />
          </div>

          <div className="powered">
            ⚡ POWERED BY
          </div>

          <p className="care-description">
            Daily care keeps your
            <br />
            glow timeless
          </p>

          <div className="pure-badge">
            Pure
            <small>Skin care</small>
          </div>

        </div>


        {/* RIGHT */}
        <div className="everyday-card">

          <h3>
            Everyday care creates
            <br />
            timeless skin
          </h3>

          <div className="signature">
            Lumiere
          </div>

          <div className="bottom-images">

            <img
              src="/src/assets/pure-image2.jpg"
              alt="image2"
            />

            <img
              src="/src/assets/pure-image3.jpg"
              alt="IMAGE3"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default PureSkincare;