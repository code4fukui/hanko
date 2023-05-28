import * as sec from "https://code4fukui.github.io/sec.js/sec.js";
import { coder } from "./coder.js";

export const parseSign = () => {
  const data = location.hash.substring(1);
  console.log(data);
  if (!data) {
    return;
  }
  const len = coder.encode(new Uint8Array(32), false).length;
  const len2 = coder.encode(new Uint8Array(64), false).length;
  const p = data.length - len - len2;
  const text = coder.decode(data.substring(0, p));
  const pubkey = coder.decode(data.substring(p, p + len));
  const sign = coder.decode(data.substring(p + len));
  console.log(pubkey, sign, text, new TextDecoder().decode(text));
  const b = sec.verify(sign, pubkey, text);
  return { did: coder.encode(pubkey), text: new TextDecoder().decode(text), verified: b };
};
