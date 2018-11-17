import React from 'react';
import * as actions from '../../actions/Index'
import {connect} from 'react-redux'

const AddOne = (props) => {
    return (
        <div>
            <button onClick={props.addOne}>Add One</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: () => {
            dispatch(actions.addOne())
        }
    }
}
export default connect(null, mapDispatchToProps)(AddOne);