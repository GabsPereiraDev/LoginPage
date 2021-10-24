import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const CpfMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="document" id="document" mask="999.999.999-99" required placeholder="CPF" value = {value} onChange={onChange} />
    );
}

export default CpfMask;