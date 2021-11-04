import jwtDecode from "jwt-decode";

export const isTokenValid = (token) => {
    if (!token) return false;
    try {
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) return false;
        else return true;
    } catch {
        return false;
    }
};

export const getTokenRole = (token) => {
    if (!token) return null;
    try {
        const { role } = jwtDecode(token);
        return role;
    } catch (error) {
        return null;
    }
};
