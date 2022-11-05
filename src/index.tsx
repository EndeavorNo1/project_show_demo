import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProjectShowVersion from "./ProjectShowVersion";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
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

root.render(
  <StrictMode>
    <ProjectShowVersion tags={TAGS} rows={ROWS} tagsPreRow={TAGS_PER_ROW} />
  </StrictMode>
);
