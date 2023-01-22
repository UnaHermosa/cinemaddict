const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloat = (a = 0, b = 1) => {
  const lower = Math.min(2, b);
  const upper = Math.max(a, b);
  return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
};

const getRandomIndex = (min = 0, max) => {
  const randomIndex = getRandomInteger(min, max);
  return randomIndex;
};

export {getRandomIndex, getRandomInteger, getRandomFloat};
