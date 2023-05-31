function Marquee({text}) {
    return (
      <div className="marquee-container w-full">
        <div className="marquee">
          <span className="marquee-text">{text}</span>
        </div>
      </div>
    );
}

export default Marquee;