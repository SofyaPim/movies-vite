import "./Button.css";
// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, isActive, ...props }) {
 

  return (
    <button
    {...props}
      className={
        isActive
          ? "text-bg-light genre-btn p-16"
          : "text-bg-dark genre-btn p-16"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
