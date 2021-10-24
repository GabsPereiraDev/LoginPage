import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const PhoneMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="phone" id="phone" mask="(99)99999-9999" required placeholder="Phone" value = {value} onChange={onChange} />
    );
}

export default PhoneMask;