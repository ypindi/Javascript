export const capitalize = str => str.toUpperCase();



const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    // return str;
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";


export default function subtract(x, y) {return x-y;};