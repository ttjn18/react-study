/* 受控组件 */

import React from 'react';

const InputNumber = props => {
    let { value, onChange } = props;
    return (
        <div>
            <input value={value} onChange={onChange} type="number"/>
        </div>
    );
}

export default InputNumber;