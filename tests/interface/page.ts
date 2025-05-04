export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IPage {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[]
}

interface IUnknownUser {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export interface IUnknownPage {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUnknownUser[]
}