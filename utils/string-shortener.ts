/*
    function that shorten a string to a certain length, if the function is lower than the maxLength it will return the whole string
    "this a very long string" = "this a very long str..."
    "when i wake up in the morning i start the day with a big yawn" = "when i wake in the morning i star..."
    and so on...
*/

const stringShortener = (str: string, maxLength: number, toShort: number): string => {
    if (str.length > maxLength) return str.substr(0, toShort) + "...";
    return str;
}

export { stringShortener };