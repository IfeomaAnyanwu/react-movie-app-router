import img from "../images/musician.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <img src={img} alt="" />
      <div id="hero-text">
        <h1>Welcome</h1>
        <h2>
          JustFlicks offers a wide range of streaming movies and Television
          options
        </h2>
        <div id="search">
          <input
            type="text"
            placeholder="Search for a movie, TV Show...."
            id="search-text"
            className="search-text"
          />
          <button id="search-button" className="search-button">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
