export function range(start, end) {
  try {
    [start, end] = [+start, +end];
    const range = [...Array(end - start + 1).keys()].map((x) => x + start);
    return range;
  } catch (e) {
    return [];
  }
}
