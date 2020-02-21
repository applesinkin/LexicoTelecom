// Common data DAL
export const commonDataApi = {
    getData(dataUrl) {
        return fetch(dataUrl)
            .then( r => {
                return r;
            } );
    }
};