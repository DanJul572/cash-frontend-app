export type ApiResponseType<T> = {
    status: boolean;
    message: string;
    data: T;
};
