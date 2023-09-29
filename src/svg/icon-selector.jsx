import IconReaction from "./icon-reaction";
import IconMemory from "./icon-memory";
import IconVerbal from "./icon-verbal";
import IconVisual from "./icon-visual";

export default function IconSelector({ path }) {
  if (path.includes("reaction")) {
    return IconReaction();
  } else if (path.includes("memory")) {
    return IconMemory();
  } else if (path.includes("verbal")) {
    return IconVerbal();
  } else if (path.includes("visual")) {
    return IconVisual();
  }
}
