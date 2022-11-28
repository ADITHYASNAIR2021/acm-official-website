/*
    When passing functions make sure they are in this form:
    const functionName = ()=>{
        function content
    }
 */
const Button = ({message, buttonFunction}) => {
        
    return (
        <div className="button-parent">
            {
                buttonFunction !=undefined &&
                <button className="button" onClick={()=>{buttonFunction()}}>
                    {message}
                </button>
            }
            {
                buttonFunction === undefined &&
                <button className="button">
                    {message}
                </button>
            }
        </div> 
     );
}
 
export default Button;