import React from 'react';
import * as S from './Dropdown.styled';
import { Select } from 'antd';
import { ReactComponent as ArrowDownIcon } from '../../../../assets/img/arrow-down.svg';
import { useAppContext } from '../../../../App';

const Dropdown: React.FC = () => {
    const { isSubscribed, handleIsSubscribedChange } = useAppContext();
    return (
        <S.InputContainer>
            <Select
                defaultValue={isSubscribed}
                value={isSubscribed}
                onChange={handleIsSubscribedChange}
                suffixIcon={<ArrowDownIcon />}
                options={[
                    { value: 'Not Subscribed', label: 'Not Subscribed' },
                    { value: 'Subscribed', label: 'Subscribed' },
                    { value: 'Other', label: 'Other' },
                ]}
            />
        </S.InputContainer>

    )
};

export default Dropdown;