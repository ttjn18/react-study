/* 非受控组件 */

import React, { useRef, useEffect } from 'react';

const InputNumber = props => {
    let { defaultValue, onChange } = props;
    let inputRef = useRef();
    useEffect(() => {
        inputRef.current.value = defaultValue;
    })
    return (
        <div>
            <input ref={inputRef} onChange={onChange} type="number"/>
        </div>
    );
} 

export default InputNumber;