import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

export const Base16U = {
  encode: (bin) => Base16.encode(bin).toUpperCase(),
  decode: (s) => Base16.decode(s),
};
