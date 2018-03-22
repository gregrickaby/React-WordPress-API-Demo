// Helper function to (dangerously) display markup.
// https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
export function createDangerousMarkup(props) {
  return { __html: props };
}
