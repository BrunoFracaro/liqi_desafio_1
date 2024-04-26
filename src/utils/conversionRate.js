export default function conversionRate(value, from, to) {
  const rate = to / from

  const finalValue = value * rate

  return finalValue
}