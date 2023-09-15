import React from 'react';
import * as S from './AgePicker.styled';
import Input from '../../../UI/SInput/SInput';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/img/arrow-down.svg';
import { useAppContext } from '../../../../App';

const AgePicker: React.FC = () => {
    const { 
        age, 
        handleAgeInputChange,
        handleIncrementAge,
        handleDecrementAge,
    } = useAppContext();
    
    return (
        <S.InputContainer>
            <Input placeholder='Age' value={age} onChange={handleAgeInputChange} />
            <S.Buttons>
                <S.Button onClick={handleDecrementAge}><ArrowDownIcon /></S.Button>
                <S.Button onClick={handleIncrementAge}><ArrowDownIcon /></S.Button>
            </S.Buttons>
        </S.InputContainer>
    )
};

export default AgePicker;