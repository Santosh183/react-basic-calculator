function ResultArea({ liveinput, expression }) {
    return (
        <div className="result-area">
            <div className="expression">{expression}</div>
            <div className="live-input">{liveinput}</div>
        </div>
    );
}

export default ResultArea;
