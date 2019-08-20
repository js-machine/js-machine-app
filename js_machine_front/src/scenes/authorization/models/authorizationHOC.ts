export interface AuthorizationHOCProps {
    changeLoginOptions: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

export interface AuthorizationHOCState {
    isAuthorizitationVisible: boolean;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}
