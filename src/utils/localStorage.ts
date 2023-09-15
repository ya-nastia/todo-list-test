import { IDataBaseItem } from "../types/common.types";

const LOCAL_STORAGE_KEY = 'peopleData';

export const getPeopleData = (): IDataBaseItem[] => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const addPeopleData = (newItem: IDataBaseItem): void => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
        const updatedStorageData = [...JSON.parse(storageData), newItem];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedStorageData));
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newItem]));
    }
};

export const deletePersonsData = (id: string): void => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageData) {
        const updatedStorageData = JSON.parse(storageData).filter((dataItem: IDataBaseItem) => dataItem.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedStorageData));
    }
};