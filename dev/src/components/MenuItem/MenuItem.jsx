/* eslint-disable react/prop-types */
import "./MenuItem.css";

export default function MenuItem({ children, onClick, isActive }) {
  return (
    <div
      className={
        isActive ? "text-white-100 text-bg-dark menuItem" : "text-bg-dark menuItem text-white-50"
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
}
