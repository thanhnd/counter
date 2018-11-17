import React from 'react';
import AddOne from './calculator/AddOne';
import AddValue from './calculator/AddValue';
import MinusOne from './calculator/MinusOne';
import MinusValue from './calculator/MinusValue';

const Calculator = () => {
    return (
        <div>
            <AddOne />
            <MinusOne />
            {/* <AddValue /><MinusOne /><MinusValue /> */}
        </div>
    );
};

export default Calculator;