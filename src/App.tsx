import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from 'styled-components';
import * as S from './App.styled';
import { TSubscribed } from './types/common.types';
import { defaultTheme, lightTheme } from './config/theme';
import { addPeopleData, deletePersonsData } from './utils/localStorage';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { IAppContext } from './types/appContext.types';

const AppContext = createContext<IAppContext | undefined>(undefined);

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isSubscribed, setIsSubscribed] = useState<TSubscribed>('Subscribed');
  const [isEmployed, setIsEmployed] = useState(false);
  const [tableRerender, setTableRerender] = useState(false);
  const [focusedRowId, setFocusedRowId] = useState('');

  const switchTheme = useCallback(() => {
    theme === defaultTheme ? setTheme(lightTheme) : setTheme(defaultTheme);
  }, [theme]);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleAgeInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^0$|^[1-9][0-9]*$/.test(inputValue) || inputValue === '') {
      setAge(inputValue);
    }
  }, []);

  const handleIncrementAge = useCallback(() => {
    setAge((prevAge) => String(Number(prevAge) + 1));
  }, []);

  const handleDecrementAge = useCallback(() => {
    setAge((prevAge) => {
      const newAge = Number(prevAge) - 1;
      return newAge >= 0 ? String(newAge) : prevAge;
    });
  }, []);

  const handleIsSubscribedChange = useCallback((type: TSubscribed) => {
    setIsSubscribed(type);
  }, []);

  const handleIsEmployedChange = useCallback(() => {
    setIsEmployed(current => !current);
  }, []);

  const handleTableRerenderChange = useCallback(() => {
    setTableRerender(current => !current);
  }, []);

  const handleRowClick = useCallback((id: string) => {
    setFocusedRowId(id);
  }, []);

  const resetValues = useCallback(() => {
    setName('');
    setAge('');
    setIsSubscribed('Subscribed');
    setIsEmployed(false);
  }, []);

  const handleAddPerson = useCallback(() => {
    if (name && age) {
      const newPerson = {
        id: uuid(),
        name,
        age: Number(age),
        isSubscribed,
        isEmployed,
      };

      addPeopleData(newPerson);
      resetValues();
      handleTableRerenderChange();
    }
  }, [name, age, isSubscribed, isEmployed, handleTableRerenderChange, resetValues]);
  
  const handleDeletePerson = useCallback(() => {
    deletePersonsData(focusedRowId);
    handleTableRerenderChange();
  }, [focusedRowId, handleTableRerenderChange]);

  return (
    <AppContext.Provider
      value={{
        name,
        handleNameChange,
        age,
        handleAgeInputChange,
        handleIncrementAge,
        handleDecrementAge,
        isSubscribed,
        handleIsSubscribedChange,
        isEmployed,
        handleIsEmployedChange,
        handleAddPerson,
        tableRerender,
        focusedRowId,
        handleRowClick,
        handleDeletePerson,
        switchTheme,
      }}
    >
      <ThemeProvider theme={theme}>
          <S.AppContainer>
            <S.Content>
              <Form />
              <Table />
            </S.Content>
          </S.AppContainer>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;