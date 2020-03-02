const filterDataHelpers = {

    filterByRole(data = [], role = null) {
        if (!data || !data.length)
            return null;

        const result = data.filter( (item) => {
            if (item["role"] === role) {
                return true;
            }
            return false;
        } );

        return result;
    },


    filterByText(data = [], text = "") {
        if (!text) {
            return null;
        }

        const result = data.filter( (item) => {
            let columns = Object.keys(item);
            for (let i = 0; i < columns.length; i++) {
                let name = columns[i];

                if (name === "role")
                    continue;

                let value = item[name];
                if (name === "parameters") {
                    value = JSON.stringify(value);
                }
                if (value && value.includes(text)) {
                    return true;
                }
            }

            return false;
        } );

        return result;
    }
};

export default filterDataHelpers