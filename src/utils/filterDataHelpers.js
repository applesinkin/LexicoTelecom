export const filterByRole = (data = [], role = null) => {
    if (!data || !data.length)
        return null;

    return data.filter((item) => item["role"] === role);
};


export const filterByText = (data = [], text = "") => {
    if (!text) {
        return null;
    }

    return data.filter( (item) => {

        let columns = Object.keys(item);

        for (let i = 0; i < columns.length; i++) {
            let name = columns[i];

            if (name === "role")
                continue;

            const value = (name === "parameters")
                ? JSON.stringify(item[name])
                : item[name];

            if (value && value.includes(text)) {
                return true;
            }
        }

        return false;
    } );
};