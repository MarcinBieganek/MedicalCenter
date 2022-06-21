const validatePeselChecksum = (pesel: string) => {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let s = 0;

  for (let i = 0; i < weights.length; i += 1) {
    s += parseInt(pesel[i], 10) * weights[i];
  }

  return ((10 - (s % 10)) % 10) === parseInt(pesel[10], 10);
};

export default validatePeselChecksum;
