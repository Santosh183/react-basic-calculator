import ResultArea from './ResultArea';
import Buttons from './Buttons';
import { useState } from 'react';

function Calculator() {
    const [liveinput, setLiveInput] = useState('');
    const [expression, setExpression] = useState('');
    const [latestCahr, setLatestChar] = useState('');
    function handleInput(input) {
        if (latestCahr === '=') {
            setLatestChar('');
            setExpression('');
            input === 'AC' ? setLiveInput('') : setLiveInput(input);
            return;
        }
        if (input === 'AC') {
            setLiveInput(liveinput.slice(0, liveinput.length - 1));
            setLatestChar(liveinput[liveinput.length - 1]);
            return;
        }
        if (input === '=') {
            calculateResult(liveinput);
            setLatestChar(input);
            return;
        }
        setLatestChar(input);
        const operators = ['*', '/', '+', '-', '%'];
        if (operators.includes(latestCahr) && operators.includes(input)) {
            setLiveInput(liveinput.slice(0, liveinput.length - 1));
            input = ' ' + input + ' ';
            return;
        }
        if (operators.includes(input)) {
            input = ' ' + input + ' ';
        }
        const newLiveInput = liveinput + input;
        setLiveInput(newLiveInput);
    }
    function calculateResult(liveinput) {
        try {
            const tempInput = liveinput.replaceAll('%', '/100');
            const ans = eval(tempInput);
            setExpression(liveinput);
            setLiveInput('= ' + ans);
        } catch (e) {
            setExpression('Invalid input');
        }
    }
    return (
        <div className="App" style={{ padding: "20px", border: "1px solid #dadce0", display: "inline-block", margin: "20px" }}>
            <ResultArea liveinput={liveinput} expression={expression} />
            <Buttons handleInput={handleInput} />
        </div>
    );
}

export default Calculator;
