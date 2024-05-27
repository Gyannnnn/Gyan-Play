export const API_KEY = 'AIzaSyBCqueFuzCscUq9ccWsu-YsiiMUN57b84I';

export const valuechanger = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    } else if (value >= 100000) {
        return Math.floor(value / 100000) + 'L'; 
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K';
    } else {
        return value.toString(); // Return value as a string for consistency
    }
}
