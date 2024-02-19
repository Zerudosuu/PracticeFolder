import { surpriseMePrompts } from "../constants";
import Filesaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPropmt = surpriseMePrompts[randomIndex];

  if (randomPropmt === prompt) return getRandomPrompt(prompt);

  return randomPropmt;
}

export async function downloadImage(_id, photo) {
  Filesaver.saveAs(photo, `download-${_id}.jpg`);
}
