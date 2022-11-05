import "./styles.scss";

const TAGS = [
  "V6.0.1",
  "V6.0.2",
  "V6.0.3",
  "V6.0.4",
  "V6.0.5",
  "V6.0.6",
  "V6.0.7",
  "V6.0.8",
  "V6.0.9",
  "V6.0.10",
  "V6.0.11",
  "V6.0.12"
];
const ROWS = 5;
const TAGS_PER_ROW = 5;

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

const App = () => (
  <div className="app">
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(33333, 88888)}
          reverse={i % 2}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default App;
