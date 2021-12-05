/*
    function that converts a number into his short format
    1 = 1
    100 = 100
    1000 = 1k
    1500 = 1.5k
    and so on...
*/

const kFormatter = (num: number): string | number => {
    const singleUnit: number = Math.sign(num) * Math.abs(num);
    const kUnit: string = Math.sign(num) * Math.round(Math.abs(num /100) / 10) + "k";

    return Math.abs(num) > 999 ? kUnit : singleUnit;
}

export { kFormatter };