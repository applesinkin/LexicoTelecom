export const parseCsvToJson = (str) => {

    const data = str.split('\r');
    const cellNames = data[0].split(';');
    const rows = data.slice(1);

    const result = {
        headings: cellNames,
        data: []
    };

    result.data = rows.map( row => {
        const rowCells = row.split(';');
        const dataParsed = {};
        cellNames.forEach( (name, index) => {
            let value = null;
            if (rowCells[index]) {
                value = rowCells[index];

                if (name === "parameters") {
                    value = value.replace(/""/g, "'");
                    value = value.replace(/"/g, "");
                    value = value.replace(/'/g, "\"");
                    value = JSON.parse(value);
                }
            }

            return dataParsed[name] = value;
        } );

        return dataParsed;
    } );

    return result;
};