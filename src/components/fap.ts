const fap = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fap.isAuthenticated = true;
        setTimeout(callback, 1000); // fake async
    },
    signout(callback: VoidFunction) {
        fap.isAuthenticated = false;
        setTimeout(callback, 1000);
    }
};

export { fap };