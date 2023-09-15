import { TSubscribed } from "./common.types";

export interface IAppContext {
    name: string,
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    age: string,
    handleAgeInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleIncrementAge: () => void,
    handleDecrementAge: () => void,
    isSubscribed: TSubscribed,
    handleIsSubscribedChange: (type: TSubscribed) => void,
    isEmployed: boolean,
    handleIsEmployedChange: () => void,
    handleAddPerson: () => void,
    tableRerender: boolean,
    focusedRowId: string,
    handleRowClick: (id: string) => void,
    handleDeletePerson: () => void,
    switchTheme: () => void,
  }