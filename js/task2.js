export function* chunkArray(array, chunkSize) {
  let index = 0;
  
  while (index < array.length) {
    yield array.slice(index, index + chunkSize);
    index += chunkSize;
  }
}
