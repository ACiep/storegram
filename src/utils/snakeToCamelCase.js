export const snakeToCamelCaseString = x => x.replace(
  /([_][a-z])/g,
  chunk => chunk.replace('_', '').toUpperCase(),
);

export const snakeToCamelCaseKeys = obj => {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[snakeToCamelCaseString(key)] = val;
  }
  return result;
};
