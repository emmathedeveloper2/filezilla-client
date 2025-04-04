

export type CustomResponse<T = any> = {
    success: boolean;
    message: string;
    data: T;
}

export type CustomError = {
    status: number;
    message: string;
}

export type User = {
    _id: string;
    username: string;
    email: string;
    verified: boolean;
}