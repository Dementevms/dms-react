export default class Helper {
  static random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}
