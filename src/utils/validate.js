export const validate = (email, password, name, isSignUp=false) => {
    if(!email || !password) {
        return "Email and password are required.";
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password && password.length >= 6;

        if(isSignUp) {
            if(name.trim().length === 0) {
                return "Name is required";
            }
        }

       if (!isEmailValid) {
            return "Invalid email format.";
        }

        if (!isPasswordValid) {
            return "Password must be at least 6 characters long.";
        }

    return null; // No validation errors
}