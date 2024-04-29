const mapper = (rules) => {
  return (item) => {
    const newItem = {};

    rules.forEach(rule => {
      const [sourceField, destField, transformFunc] = rule;
      let value = item[sourceField];

      if (typeof transformFunc === 'function') {
        value = transformFunc(value);
      }

      newItem[destField] = value;
    });

    return newItem;
  };
}
