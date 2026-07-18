export type LoginModuleConfigType = {
    minLengthPassword: number;
};

export type RegisterModuleConfigType = {
    minLengthPassword: number;
    minLengthName: number;
};

export type ValidateOtpModuleConfigType = {
    otpLength: number;
    resendCooldown: number;
};

export type ChangePasswordModuleConfigType = {
    minLengthPassword: number;
};

export type GuestConfigResponseType = {
    modules: {
        login: LoginModuleConfigType;
        register: RegisterModuleConfigType;
        validateOtp: ValidateOtpModuleConfigType;
        changePassword: ChangePasswordModuleConfigType;
    };
};

export type AuthenticatedConfigResponseType = {
    dataPerPage: number;
};
