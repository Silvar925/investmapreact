export function parseCoordinates(input) {
    try {
        const coordinatesArray = JSON.parse(input);
        if (Array.isArray(coordinatesArray) && coordinatesArray.length >= 2) {
            return coordinatesArray;
        } else {
            throw new Error('Invalid input format');
        }
    } catch (error) {
        const coordinatesRegex = /\[([\d.]+),([\d.]+)\]/;
        const match = input.match(coordinatesRegex);

        if (match) {
            const lat = parseFloat(match[1]);
            const lon = parseFloat(match[2]);

            if (!isNaN(lat) && !isNaN(lon)) {
                return [lat, lon];
            } else {
                throw new Error('Invalid input format');
            }
        } else {
            throw new Error('Invalid input format');
        }
    }
}

