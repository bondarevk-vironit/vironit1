
// лучше заменить на `generateRandomSec (from = 1, to = 1) {`
export default function generateRandomSec (from, to) {
  from = from || 2 // убрать
  to = to || 4 // убрать
  // можно сразу реторнить выражение (не записывать в var) (лучше использовать const)
  var sec = (from + Math.random() * (to - from)).toFixed(2)
  return sec * 1000 // возвращаем ms а в названии вункции написано sec
}
