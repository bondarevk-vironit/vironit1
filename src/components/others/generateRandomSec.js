export default function generateRandomSec (from, to) {
  from = from || 2
  to = to || 4
  var sec = (from + Math.random() * (to - from)).toFixed(2)
  return sec * 1000
}
