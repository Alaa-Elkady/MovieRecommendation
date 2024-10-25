import img from "../imgs/Spiderman.png";
export default function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <img src={img} alt="" />
          <div className="cat">Action . Adventure . 2h 28m</div>

          <p className="desc">
            When a spell goes wrong, dangerous foes from other worlds start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man.
          </p>
          <div className="buttons">
            <button className="play-btn"> <i className="fas fa-play"></i> Play</button>
            <button className="btn">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
