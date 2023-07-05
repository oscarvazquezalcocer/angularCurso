export interface IModel {
    id: string,
    create_on: string|Date;
    update_on: string|Date;
}

export interface INote extends IModel {
    description: string;
    date: Date|string,
    status: boolean,
}

export interface IUser extends IModel {
    name: string,
    username: string,
    city: string,
    birthday: Date,
    email?: string,
    note?: INote[],
}

export enum Dias {"LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES","SABADO","DOMINGO"}

export interface IIdentify<T,U> {
    value: T;
    message: U;
}

export interface Dictionary<T>{
    [key: string]:T;
}

export interface Response{
    Items:INote[],
    Count:number,
    ScannedCount:number,
}