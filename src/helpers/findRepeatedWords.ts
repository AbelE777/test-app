type WordCount = {
  value: unknown;
  label: string;
};

export function findMostRepeatedWords(text: string, limit = 30):WordCount[] {
  const words = text.toLowerCase().match(/\b[a-z]+\b/g);
  const wordCounts = words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word]++;
    } else {
      acc[word] = 1;
    }
    return acc;
  }, {});
  const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  const topWords = sortedWords.slice(0, limit);
  
  return topWords.map(([word, total], idx) => ({
    value: total,
    label: word
  }));
}
