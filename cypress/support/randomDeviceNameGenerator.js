function generateRandomDeviceName() {
  const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Silver', 'Gold'];
  const nouns = ['Phone', 'Tablet', 'Laptop', 'Smartwatch', 'Camera', 'Game Console', 'Headphones', 'Speaker'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  const randomDeviceName = `${randomAdjective} ${randomNoun}`;
  return randomDeviceName;
}

module.exports = { generateRandomDeviceName };
