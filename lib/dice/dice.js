function rollDie(sides) {
  return Math.floor(Math.random() * (sides - 1) + 1);
}

function dice(number, sides = 6) {
  let totalRoll = 0;

  for (let i = 0; i < number; i++) {
    totalRoll += rollDie(sides);
  }

  return totalRoll;
}

module.exports = dice;
