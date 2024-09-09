function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <h1>Sanrio Shop Mart</h1>
            <div>
              <button className="icon-btn">
                <span>&#129293;</span>
                <span className="badge">3</span>
              </button>
              <button className="icon-btn">
                <span>&#128722;</span>
                <span className="badge">1</span>
              </button>
            </div>

            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All products</button>
                <button>Wishlist</button>
              </nav>
              <form>
                <input type="search" placeholder="Search..." />
                <button type="button">Go</button>
              </form>
            </div>
          </header>
          <main>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/9mUAAOSwYpJiqT1Y/s-l1200.jpg" alt="cinnamoroll" />
              <p className="pr-name">Cinnamoroll Ice Cream Plush</p>
              <p className="pr-price">$35</p>
            </div>

            <div className="product">
              <img src="https://m.media-amazon.com/images/I/418EjUduBQL._AC_UF894,1000_QL80_.jpg" alt="kuromi" />
              <p className="pr-name">Kuromi Plush</p>
              <p className="pr-price">$35</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/9PcAAOSwztpiqYyQ/s-l1200.jpg" alt="hellokitty" />
              <p className="pr-name">Hello Kitty Plush</p>
              <p className="pr-price">$30</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/MaoAAOSwFQ5kxR8h/s-l1200.jpg" alt="keroppi" />
              <p className="pr-name">Keroppi Plush</p>
              <p className="pr-price">$30</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/snQAAOSwYmVgFQ3e/s-l1200.jpg" alt="mymelody" />
              <p className="pr-name">My Melody Plush</p>
              <p className="pr-price">$25</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/4SwAAOSwRslkESxu/s-l1200.jpg" alt="pompompurin" />
              <p className="pr-name">Pompompurin Plush</p>
              <p className="pr-price">$25</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/-YcAAOSw59NkjIBg/s-l1200.jpg" alt="pochacco" />
              <p className="pr-name">Pochacco Plush</p>
              <p className="pr-price">$25</p>
            </div>

            <div className="product">
              <img src="https://i.ebayimg.com/images/g/Pz0AAOSwt~5kfthD/s-l1200.jpg" alt="chococat" />
              <p className="pr-name">Chococat Plush</p>
              <p className="pr-price">$25</p>
            </div>

          </main>
        </section>
        <footer>

          <div>
            <h3>Who we are</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3>Our policies</h3>
            <ul>
              <li><a href="">Return policies</a></li>
              <li><a href="">Shipping policy</a></li>
              <li><a href="">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our products</h3>
            <ul>
              <li><a href="">Home page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
