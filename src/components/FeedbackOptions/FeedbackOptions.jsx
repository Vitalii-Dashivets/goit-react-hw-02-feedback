import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 
    function toUpperCaseFirstSimbol(options) {
       return options.map(elem =>        
            (elem.split('')[0].toUpperCase()+elem.split('').slice(1).join(''))
        )
       
    }
    const newOptions=toUpperCaseFirstSimbol(options);
    return (
        <div>
            <button type="button" onClick={()=>onLeaveFeedback(options[0])}>{newOptions[0]}</button>
            <button type="button" onClick={()=>onLeaveFeedback(options[1])}>{newOptions[1]}</button>
            <button type="button" onClick={()=>onLeaveFeedback(options[2])}>{newOptions[2]}</button>
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,     
    onLeaveFeedback: PropTypes.func,
    
}