export const required = (value) => (
    (!value) ? `This field must be required` : undefined
);


export const url = (value = '') => {
    let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm;
    let found = value.match(reg);
    return (value && !found) ? `Invalid url format` : undefined;
};