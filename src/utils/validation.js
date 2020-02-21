export const required = (value) => {
    if (!value)
        return 'This field must be required';

    return undefined;
};


export const url = (value = '') => {
    let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    let found = value.match(reg);

    if (value && !found)
        return `Invalid url format`;

    return undefined;
};