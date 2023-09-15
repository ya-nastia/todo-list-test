import React from 'react';
import * as S from './Form.styled';
import { AgePicker } from './components/AgePicker';
import { SInput } from '../UI/SInput';
import { Dropdown } from './components/Dropdown';
import { SButton } from '../UI/SButton';
import { SwitchMode } from './components/SwitchMode';
import { Checkbox } from './components/Checkbox';
import { useAppContext } from '../../App';

const Form: React.FC = () => {
    const {
        name, 
        handleNameChange,
        handleAddPerson,
        handleDeletePerson,
    } = useAppContext();

    return (
        <S.Form onSubmit={(e) => e.preventDefault()}>
            <S.FormHeader>Insert Row</S.FormHeader>
            <SInput placeholder='Name' value={name} onChange={handleNameChange} />
            <AgePicker />
            <Dropdown />
            <Checkbox />
            <SButton onClick={handleAddPerson}>Insert</SButton>
            <SwitchMode />
            <SButton onClick={handleDeletePerson}>Delete</SButton>
        </S.Form>
    )
}

export default Form;