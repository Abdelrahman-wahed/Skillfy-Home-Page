const Btn = ({ style, children }) => {
  return (
    <button
      className={` ${style} cursor-pointer  btn bg-mainColor hover:bg-[#692ffe] `}
    > 
      {children}
    </button>
  );
};

export default Btn;
