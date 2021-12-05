//class to validate field inputs

export class Validator {
    private value!: string;
    private minLength?: number;
    private maxLength?: number;

    constructor(value: string, minLength?: number, maxLength?: number) {
        this.value = value;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }

    public isEmpty = (): boolean => {
        return this.value.length === 0;
    }

    public itMatchRegex = (regex: RegExp): boolean => {
        return !this.value.match(regex);
    }


    public isInLengthRange = (): boolean => {
        return (this.value.length >= (this.minLength as number)) && (this.value.length <= (this.maxLength as number))
    }

    public confirmPassword = (password: string, matchedPassword: string): boolean => {
        return matchedPassword === password;
    }
}