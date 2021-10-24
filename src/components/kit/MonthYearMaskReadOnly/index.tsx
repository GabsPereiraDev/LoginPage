import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
}

const MonthYearMaskReadOnly:React.FC<MaskProps> = ({value}) => {
    return (
        <InputMask name="cardExpiration" id="cardExpiration" mask="99/99" required placeholder="MM/AA" value = {value} style={{width: "9rem"}} readOnly />
    );
}

export default MonthYearMaskReadOnly;