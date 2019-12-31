

export function validate (data){
    const {password, passwordConfirmation} = data;
    
    return {
        atLeastEightChar: (password.length >= 8),
        atLeastOneNumber: (/\d/.test(password)),
        atLeastOneCapital: (/[A-Z]/.test(password)),
        passwordMatch: !!(password && password === passwordConfirmation)
    };
} 