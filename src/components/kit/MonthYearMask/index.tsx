import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const MonthYearMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="cardExpiration" id="cardExpiration" mask="99/99" required placeholder="MM/AA" value = {value} onChange={onChange} style={{width: "8rem"}}/>
    );
}

export default MonthYearMask;