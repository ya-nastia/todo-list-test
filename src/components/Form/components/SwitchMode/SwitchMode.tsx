import React from 'react';
import { Switch } from 'antd';
import * as S from './SwitchMode.styled';
import { useAppContext } from '../../../../App';

const SwitchMode: React.FC = () => {
    const { switchTheme } = useAppContext();

    return (
        <S.SwitchMode>
            <Switch onChange={switchTheme} />
            <span>Mode</span>
        </S.SwitchMode>
    )
}

export default SwitchMode;