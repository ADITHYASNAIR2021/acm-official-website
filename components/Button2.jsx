const Button = ({ message, buttonFunction }) => {
  return (
    <div>
      {buttonFunction != undefined && (
        <button
          className="button2"
          onClick={() => {
            buttonFunction();
          }}
        >
          {message}
        </button>
      )}
      {buttonFunction === undefined && (
        <button className="button2">{message}</button>
      )}
    </div>
  );
};

export default Button;
