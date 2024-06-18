export interface State {
    auth: AuthState | null;
    app: AppState | null;
}

export interface AuthState {
    auth: boolean;
    user: string;
    email: string;
    id: string;
    photo: string;
    token?: string | null | undefined;
}

export interface AppState {
    
}