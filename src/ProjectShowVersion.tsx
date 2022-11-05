import "./styles.less";

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal"
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text, color }) => (
  <div className="tag" style={{ "--color": color }}>
    <span>#</span> {text}
  </div>
);

const ProjectShowVersion = ({ tags, rows, tagsPreRow }) => (
  <div className="app">
    <div className="tag-list">
      {[...new Array(rows)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(33333, 88888)}
          reverse={i % 2}
        >
          {shuffle(tags)
            .slice(0, tagsPreRow)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default ProjectShowVersion;
