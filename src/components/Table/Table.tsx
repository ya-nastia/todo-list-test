import React, { useEffect, useState } from "react";
import * as S from './Table.styled';
import { getPeopleData } from "../../utils/localStorage";
import { IDataBaseItem } from "../../types/common.types";
import { useAppContext } from "../../App";

const Table: React.FC = () => {
    const { tableRerender, focusedRowId, handleRowClick } = useAppContext();

    const [peopleData, setPeopleData] = useState<IDataBaseItem[]>([]);

    useEffect(() => {
        const data = getPeopleData();
        setPeopleData(data);
    }, [tableRerender]);

    return (
        <S.TableContainer>
            <S.Table>

                <thead>
                    <S.HeadRow>
                        <S.HeadCell>Name</S.HeadCell>
                        <S.HeadCell>Age</S.HeadCell>
                        <S.HeadCell>Subscription</S.HeadCell>
                        <S.HeadCell>Employment</S.HeadCell>
                    </S.HeadRow>
                </thead>

                <tbody>
                    {
                        peopleData.map(({id, name, age, isSubscribed, isEmployed}) => {
                            return (
                                <S.Row 
                                    isRowFocused={id === focusedRowId} 
                                    onClick={() => handleRowClick(id)} 
                                    key={id}
                                >
                                    <S.Cell>{name}</S.Cell>
                                    <S.Cell>{age}</S.Cell>
                                    <S.Cell>{isSubscribed}</S.Cell>
                                    <S.Cell>{isEmployed ? 'Employed' : 'Unemployed'}</S.Cell>
                                </S.Row>
                            )
                        })
                    }
                </tbody>
            </S.Table>
        </S.TableContainer>
    )
};

export default Table;