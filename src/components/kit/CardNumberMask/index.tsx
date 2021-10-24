import React, { useCallback } from 'react';
import InputMask from 'react-input-mask';

interface MaskProps {
    value:string;
    onChange: (event) => void;
}

const CardNumberMask:React.FC<MaskProps> = ({value, onChange}) => {
    return (
        <InputMask name="cardNumber" id="cardNumber" mask="9999 9999 9999 9999" required placeholder="Número do Cartão" value = {value} onChange={onChange}/>
    );
}

export default CardNumberMask;