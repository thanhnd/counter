import React from 'react';
import Calculator from './Calculator';
import {connect} from 'react-redux'

const Display = (props) => {
    return (
        <div>
            <h1 style={{fontSize:'100px'}}>{props.counter}</h1>
            <Calculator />
        </div>
    );
};

const mapDisplayToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect(mapDisplayToProps, null)(Display);