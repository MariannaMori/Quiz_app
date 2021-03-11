  //shufflees right answrs so it appears at fifferent place in question
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
