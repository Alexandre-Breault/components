import { Transform } from "../types/text";

const textTransform: Record<Transform, string> = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normal: "normal-case",
};

export { textTransform };
