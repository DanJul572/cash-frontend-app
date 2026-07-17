export type GuestConfigResponseType = {
    modules: {
        login: {
            minLengthPassword: number;
        };
    };
};

export type AuthenticatedConfigResponseType = {
    dataPerPage: number;
};
