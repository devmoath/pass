import crypto from 'crypto';

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (length: number | string, chars: string) => {
    const random = crypto.randomBytes(Number(length));
    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars.charAt(random[i] % chars.length);
    }

    return password;
};

export const createPassword = (length: number | string = 8, hasNumbers: boolean = true, hasSymbols: boolean = true) => {
    let chars = alpha;

    hasNumbers ? (chars += numbers) : '';
    hasSymbols ? (chars += symbols) : '';

    return generatePassword(length, chars);
};
