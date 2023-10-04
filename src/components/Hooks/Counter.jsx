import React, { useState } from 'react'

const Counter = () => {

    const [kholi, Setkholi] = useState(0);
    const [dhoni, setdhoni] = useState(0);
    
    const [count, SetCount] = useState(0);

    const fnc=()=>{
        SetCount(kholi+dhoni);
    }
    return (
        <div className='new'>
            <div className='total'>
                <h1>Total Run</h1>
                <h3 className='tt'>Total Team :- {count}</h3>
            </div>
            <div className='mainrunDiv'>
                <div className='runDiv kk'>
                    <h1>kohli</h1>
                    <div>{kholi}</div>
                    <div className='runBtndiv'>
                        <button onClick={() => { SetCount(count+1); Setkholi(kholi + 1) }}>1</button>
                        <button onClick={() => { SetCount(count+4); Setkholi(kholi + 4) }}>4</button>
                        <button onClick={() => { SetCount(count+6); Setkholi(kholi + 6) }}>6</button>
                    </div>
                </div>
                <div className='runDiv'>
                    <h1>dhoni</h1>
                    <div>{dhoni}</div>
                    <div className='runBtndiv'>
                        <button onClick={() => { SetCount(count+1); setdhoni(dhoni + 1) }}>1</button>
                        <button onClick={() => { SetCount(count+4); setdhoni(dhoni + 4) }}>4</button>
                        <button onClick={() => { SetCount(count+6); setdhoni(dhoni + 6) }}>6</button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Counter