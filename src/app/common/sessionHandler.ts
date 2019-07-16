/**
    * It creates a new user session.
     */
export function createSession(data: any) {
    let UserObj=null;
    if (data != null) {
        UserObj = JSON.stringify(data);
    }

    sessionStorage.setItem('UserObj', UserObj);
}

/**
    * Checks if session already exists.
     */
export function isSessionCreated(): boolean {
    if (sessionStorage.getItem('UserObj')) {
        return true;
    } else { return false; }
}

/**
    * Deletes existing session.
     */
export function deleteSession() {
    sessionStorage.clear();
}
