import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const ZipCodeMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="document" id="document" mask="99999-999" required placeholder="CEP" value = {value} onChange={onChange} />
    );
}

export default ZipCodeMask;