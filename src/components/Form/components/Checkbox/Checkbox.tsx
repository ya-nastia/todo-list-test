import React from 'react';
import * as S from './Checkbox.styled';
import { useAppContext } from '../../../../App';

const Checkbox: React.FC = () => {
    const { isEmployed, handleIsEmployedChange } = useAppContext();
    return (
        <>
            <S.Checkbox type="checkbox" id="checkbox" name="Employed" checked={isEmployed} onChange={handleIsEmployedChange} />
            <S.Label htmlFor="checkbox">Employed</S.Label>
        </>
    )
};

export default Checkbox;