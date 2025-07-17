/*
No existe la API en línea, entonces hice una "simualación" de esa
API.
*/

export function fetchAPI(date) {
  const result = [];
  const seed = date.getDate();

  for (let i = 17; i <= 21; i++) {
    if (Math.random(seed) < 0.5) {
      result.push(i + ":00");
    }
    if (Math.random(seed + 1) < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
