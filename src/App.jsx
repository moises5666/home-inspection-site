import React from 'react';

function App() {
  return (
    <div>
      {/* Hero section with a short introduction and call to action */}
      <header className="hero">
        <h1>Avila Home Inspections</h1>
        <p className="tagline">
          Your premier partner for thorough and reliable home inspections in
          South Florida.
        </p>
        <a href="#quote" className="btn primary">Get a Quote</a>
        <p className="hero-contact">Call us: (786) 368-2614</p>
      </header>

      {/* Trust badges and guarantees */}
      <section className="trust-section">
        <h2>Our Guarantees</h2>
        <div className="trust-badges">
          <div className="badge">Immediate report delivery</div>
          <div className="badge">200% satisfaction guarantee</div>
          <div className="badge">Free insurance forms</div>
        </div>
      </section>

      {/* Services grid */}
      <section className="services-section">
        <h2>Services</h2>
        <div className="service-grid">
          {[
            'Full Home Inspection',
            'Condo/Townhouse Inspection',
            '4-Point Inspection',
            'Wind Mitigation',
            'New Construction',
            'Thermal Imaging',
            'Mold Inspection',
            'Radon Testing'
          ].map((service) => (
            <div key={service} className="service-card">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us section */}
      <section className="why-us-section">
        <h2>Why Choose Us</h2>
        <ul className="reasons-list">
          <li>High-definition pictures &amp; videos for every inspection</li>
          <li>Plain-English reports that are easy to understand</li>
          <li>Immediate digital report delivery after the inspection</li>
        </ul>
      </section>

      {/* Quote form */}
      <section id="quote" className="quote-section">
        <h2>Request a Free Quote</h2>
        <p>Fill in your details and we'll get back to you promptly.</p>
        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your full name" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="(555) 123-4567" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Property Address
            <input type="text" name="address" placeholder="Property address" required />
          </label>
          <label>
            Additional Details
            <textarea name="details" rows="4" placeholder="Tell us about the property..." />
          </label>
          <button type="submit" className="btn secondary">Submit</button>
        </form>
      </section>

      {/* Footer with license and contact info */}
      <footer className="footer">
        <p>FL Home Inspector License #HI12345</p>
        <p>Serving Miami-Dade, Broward, Palm Beach &amp; Monroe counties</p>
        <p>&copy; {new Date().getFullYear()} Avila Home Inspections. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
