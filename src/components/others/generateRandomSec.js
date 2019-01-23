export default function generateRandomSec (from, to) {
  from = from || 2
  to = to || 4
  var sec = Math.floor(from + Math.random() * (to + 1 - from))
  return sec * 1000
}
