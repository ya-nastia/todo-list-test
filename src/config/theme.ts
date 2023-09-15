export interface ITheme {
    fontColor: string;
    bgColor: string;
    btnColor: string;
    buttonHover: string;
    borderColor: string;
    greenColor: string;
    arrowColor: string;
    agePickerBtnBorder: string;
}


export const defaultTheme: ITheme = {
    fontColor: '#FFFFFF',
    bgColor: '#313131',
    btnColor: '#595959',
    buttonHover: '#616161',
    borderColor: '#494949',
    greenColor: '#217346',
    arrowColor: '#FFFFFF',
    agePickerBtnBorder: '#999999',
};

export const lightTheme: ITheme = {
    fontColor: '#000000',
    bgColor: '#FFFFFF',
    btnColor: '#CCCCCC',
    buttonHover: '#C4C4C4',
    borderColor: '#CCCCCC',
    greenColor: '#217346',
    arrowColor: '#000000',
    agePickerBtnBorder: '#999999',
};