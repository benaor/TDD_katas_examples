const alphabet = [
  { letter: "I", value: 1 },
  { letter: "IV", value: 4 },
  { letter: "V", value: 5 },
  { letter: "IX", value: 9 },
  { letter: "X", value: 10 },
  { letter: "XL", value: 40 },
  { letter: "L", value: 50 },
  { letter: "XC", value: 90 },
  { letter: "C", value: 100 },
  { letter: "CD", value: 400 },
  { letter: "D", value: 500 },
  { letter: "CM", value: 900 },
  { letter: "M", value: 1000 },
];

export function romanNumerals(number: number): string {
  for (const { letter, value } of alphabet.sort((a, b) => b.value - a.value)) {
    if (number >= value) return letter + romanNumerals(number - value);
  }

  return "";
}
