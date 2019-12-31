

export function validate (data){
const error = {};
    Object.keys(data).forEach((key) => {
        switch(key){
            case 'firstName':
                error[key] = !(data[key] && data[key] !== null);
                break;
            case 'lastName':
                error[key] = !(data[key] && data[key] !== null);
                break;
            case 'phoneNumber':
                error[key] = !(/^[0-9]{10}/.test(data[key]));
                break;
            case 'email':
                error[key] = !(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(data[key]));
                break;
            default:
                break;
        }
    });

    return error;
} 