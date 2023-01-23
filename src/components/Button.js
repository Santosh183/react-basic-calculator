
function Button({ displayText, handleInput, color, background }) {
    return (
        <button
            onClick={() => { handleInput(displayText) }}
            style={{
                color: color, background: background, borderRadius: "5px", outline: 'none',
                width: '80px', height: '30px', display: 'flex', alignItems: "center", justifyContent: "center"
            }}>
            {displayText}
        </button>
    );
}

export default Button;
