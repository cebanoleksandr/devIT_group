export const bulkRun = async (functions) => {
  const results = [];
  
  for (const [func, args] of functions) {
    const resultPromise = new Promise(resolve => {
      func(...args, (result) => {
        resolve(result);
      });
    });
    
    const result = await resultPromise;
    results.push(result);
  }
  
  return results;
}
