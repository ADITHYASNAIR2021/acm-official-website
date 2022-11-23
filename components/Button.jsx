
const Button = ({message}) => {
    return (
        <div className="button-parent">
            <button className="button">
                {message}
            </button>
        </div> 
     );
}
 
export default Button;