export default function Button({ children, textOnly, ...props }) {
  const cssClass = textOnly ? "text-button" : "button";
  return (
    <button {...props} className={cssClass}>
      {children}
    </button>
  );
}
