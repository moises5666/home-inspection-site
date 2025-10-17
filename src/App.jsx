import React from 'react';

/**
 * The main application component renders the content for the home inspection
 * business. It is organised into sections: a hero banner, a list of
 * services, an explanation of why to choose the company, a quote request
 * form, and a footer. The visual design uses simple CSS classes defined in
 * index.css to provide spacing, typography and layout. Feel free to
 * customise the business name, contact details and service areas as needed.
 */
function App() {
  return (
    <div>
      {/* Hero section with a bold introduction and call to action */}
      <header className="hero">
        <h1>Florida's Most Trusted Home Inspection Company</h1>
        <p className="tagline">Don't wish you knew — get the Avila view.</p>
        <a href="#quote" className="btn primary">Book a Home Inspection</a>
        {/* List multiple contact numbers for various regions */}
        <p className="hero-contact">
          Miami-Dade (305) 908-3835 | Broward (954) 406-0096 | Palm Beach (561) 515-0113 |
          Treasure Coast (772) 925-8888 | Central FL (407) 613-2700
        </p>
      </header>

      {/* Promises / Guarantees section inspired by Truview */}
      <section className="trust-section">
        <h2>Our Promises</h2>
        <div className="trust-badges">
          {[
            'Immediate report delivery',
            '360° images & HD videos',
            '200% money back guarantee',
            'Free insurance inspection with full home inspections',
            'Free moving concierge',
            'Buyer protection guarantee'
          ].map((promise) => (
            <div key={promise} className="badge">{promise}</div>
          ))}
        </div>
      </section>

      {/* Home inspectors you can trust section */}
      <section className="why-us-section">
        <h2>Home Inspectors You Can Trust</h2>
        <p>
          We maintain a strong reputation and a high standard of customer service from start to finish. Same-day
          inspections are available, and your report is delivered immediately after completion.
        </p>
        <ul className="reasons-list">
          <li>Licensed & insured inspectors</li>
          <li>Evening & weekend appointments available</li>
          <li>Clear, easy-to-understand reports</li>
        </ul>
      </section>

      {/* Services grid */}
      <section className="services-section">
        <h2>Our Inspection Services</h2>
        <div className="service-grid">
          {[
            'Full Home Inspection',
            'Condo/Townhouse Inspection',
            'Wind Mitigation Inspection',
            'Four Point Inspection',
            'Roof Inspection',
            'Commercial Inspection',
            'Thermal Imaging',
            'New Construction Inspection',
            'Mold Inspection',
            'Luxury Property Inspection',
            'Radon Inspection'
          ].map((service) => (
            <div key={service} className="service-card">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Service areas section */}
      <section className="why-us-section">
        <h2>Cities We Serve</h2>
        <p>
          Serving all of South Florida including Miami-Dade, Broward, Palm Beach, the Treasure Coast and Central
          Florida. We travel anywhere in the region to ensure your peace of mind.
        </p>
      </section>

      {/* Quote form */}
      <section id="quote" className="quote-section">
        <h2>Get a Quick Quote</h2>
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
        <p>Serving Miami-Dade, Broward, Palm Beach, Treasure Coast & Central Florida</p>
        <p>&copy; {new Date().getFullYear()} Avila Home Inspections. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
