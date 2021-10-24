import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const CnpjMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="document" id="document" mask="99.999.999/9999-99" required placeholder="CNPJ" value = {value} onChange={onChange} />
    );
}

export default CnpjMask;