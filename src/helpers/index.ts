import crypto from 'crypto';
const secret="Subhash"
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [password, salt].join('/')).update(secret).digest('hex');
};
