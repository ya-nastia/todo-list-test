export type TSubscribed = 'Subscribed' | 'Not Subscribed' | 'Other';

export interface IDataBaseItem {
    id: string,
    name: string,
    age: number,
    isSubscribed: TSubscribed,
    isEmployed: boolean,
}