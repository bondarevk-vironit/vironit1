export default function generateRandomSec (from, to) {
  var sec = Math.floor(from + Math.random() * (to + 1 - from))
  return sec * 1000
}
