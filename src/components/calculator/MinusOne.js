import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/Index'
const MinusOne = (props) => {
    return (
        <div>
            <button onClick={props.minusOne}>Minus One</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        minusOne: () => {
            dispatch(actions.minusOne())
        }
    }
}

export default connect(null, mapDispatchToProps)(MinusOne);