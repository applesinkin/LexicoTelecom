// Common data DAL
export const getDataApi = (dataUrl) => (
    fetch(dataUrl).then(r => r)
);