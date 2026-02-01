export default function Home() {
  return (
    <main className="container">
      <div className="nav">
        <span className="badge">🎵 Personalized kids songs • Delivered by email</span>
        <span className="badge">💿 Album option available</span>
      </div>

      <section className="card hero">
        <img className="heroLogo" src="/logo.png" alt="Tiny Tunes" />

        <p className="lede">
          Sing-along songs made just for your child — with their name, favorites, and family.
        </p>

        <div className="row" style={{ marginTop: 10 }}>
          <a className="btn" href="/create">
            Create a Song
          </a>
        </div>

        {/* Pricing UNDER the button (separated & clean) */}
        <div className="row" style={{ marginTop: 12 }}>
          <span className="badge">
            <b>Single Song</b> $5.99
          </span>
          <span className="badge">
            ⭐ <b>Album (10 Songs)</b> $49.99
          </span>
        </div>

        <div className="small" style={{ marginTop: 8, textAlign: "center" }}>
          Optional sharable link add-ons available
        </div>

        <div className="grid2" style={{ textAlign: "left" }}>
          <div className="card">
            <h3 className="sectionTitle">How it works</h3>

            <div className="steps">
              <div className="step">
                <div className="icon">🎁</div>
                <div>
                  <b>Pick a package</b>
                  <div className="small">Single song or a 10-song album.</div>
                </div>
              </div>

              <div className="step">
                <div className="icon">✨</div>
                <div>
                  <b>Add fun details</b>
                  <div className="small">
                    Names to include, favorites, genre, performer voice, and “sound like…”
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="icon">📩</div>
                <div>
                  <b>Get it by email</b>
                  <div className="small">We send an MP3 link you can save and replay.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="sectionTitle">Perfect for</h3>
            <div className="small">
              🚗 Car rides • 🌙 Bedtime • 🎂 Birthdays • 🎁 Gifts • 👵 Grandparents
            </div>

            <div className="hr" />

            <h3 className="sectionTitle">What you get</h3>
            <div className="small">
              ✅ Original lyrics <br />
              ✅ MP3 delivery link <br />
              ✅ Album bundles available <br />
              ✅ Optional private sharable link <br />
            </div>

            <div className="hr" />

            <div className="small">
              <b>Tip:</b> The more details you share (favorite animals, foods, places, family names), the
              cuter the song.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
