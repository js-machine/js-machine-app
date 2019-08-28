export interface AuthorizationHOCProps {
    changeLoginOptions: () => void;
    isAuthorizitationVisible: boolean;
    barTitle: string;
    barBtn: string;
}

export interface AuthorizationHOCState {
    isAuthorizitationVisible: boolean;
    barTitle: string;
    barBtn: string;
}
