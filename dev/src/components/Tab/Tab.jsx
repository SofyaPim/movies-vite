// eslint-disable-next-line react/prop-types
export default function Tab({ children, onClick, isActive }) {
  //  let classes = 'btn';
  //  if(isActive){
  //     classes += ' active'
  //  }

  return (
    <h3
      className={isActive ? "text-bg-secondary p-3" : "text-bg-dark p-3"}
      onClick={onClick}
    >
      {children}
    </h3>
  );
}
