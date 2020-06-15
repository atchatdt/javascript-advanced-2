const url = 'quiz.duthaho.com';
const { length: ln, [ln - 1]: domain = 'quiz' } = url
  .split('.')
  .filter(Boolean);
console.log(domain);