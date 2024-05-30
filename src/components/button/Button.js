function Button({ onClick, text, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="inline-flex rounded-md bg-orange-standard px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}

export default Button;
