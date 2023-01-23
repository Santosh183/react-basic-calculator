import Button from './Button';

function Buttons({ handleInput }) {
    return (
        <div className="button-container" style={{
            display: 'grid',
            gridTemplateColumns: "auto auto auto auto", gap: '10px'
        }}>
            <Button displayText={'('} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={')'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'%'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'AC'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'7'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'8'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'9'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'/'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'4'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'5'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'6'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'*'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'1'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'2'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'3'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'-'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
            <Button displayText={'0'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'.'} handleInput={handleInput} color={'#202124'} background={'#f1f3f4'} />
            <Button displayText={'='} handleInput={handleInput} color={'#ffffff'} background={'#4285f4'} />
            <Button displayText={'+'} handleInput={handleInput} color={'#202124'} background={'#dadce0'} />
        </div>
    );
}

export default Buttons;
