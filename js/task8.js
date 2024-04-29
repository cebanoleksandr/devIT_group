String.prototype.removeDuplicate = () => {
  const words = this.split(' ');
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(' ');
};
