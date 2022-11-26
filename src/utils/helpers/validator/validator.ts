import {FIRST_SECOND_NAME_ERROR} from "./const";

type ValidateTuple = {
    validateHandler: (value: string) => boolean;
    validateError: string;
};

type Validators = { [key: string]: Array<ValidateTuple> };

export class Validator {
    private validators: Validators = {
        login: [
            {
                validateHandler: (val) => val.length < 3,
                validateError: "Логин слишком короткий, от 3х символов",
            },
            {
                validateHandler: (val) => val.length > 20,
                validateError: "Логин слишком длинный, до 20ти символов",
            },
            {
                validateHandler: (val) => /^[\d]{3,20}$/gm.test(val),
                validateError: "Логин не может состоять только из цифр",
            },
            {
                validateHandler: (val) => !/^[0-9A-z_-]{3,20}$/gm.test(val),
                validateError:
                    "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
            },
        ],
        password: [
            {
                validateHandler: (val) => val.length < 8,
                validateError: "Пароль слишком короткий, от 8и символов",
            },
            {
                validateHandler: (val) => val.length > 40,
                validateError: "Пароль слишком длинный, до 40ти символов",
            },
            {
                validateHandler: (val) => !/[A-Z]+/gm.test(val),
                validateError: "Пароль должен содержать хотя бы одну заглавную букву",
            },
            {
                validateHandler: (val) => !/[0-9]+/gm.test(val),
                validateError: "Пароль должен содержать хотя бы цифру",
            },
        ],
        firstName: [
            {
                validateHandler: (val) => !/^[A-ZА-Я]{1}[a-zA-Zа-яА-Я-]*$/gm.test(val),
                validateError: FIRST_SECOND_NAME_ERROR,
            },
        ],
        secondName: [
            {
                validateHandler: (val) => !/^[A-ZА-Я]{1}[a-zA-Zа-яА-Я-]*$/gm.test(val),
                validateError: FIRST_SECOND_NAME_ERROR,
            },
        ],
        displayLogin: [
            {
                validateHandler: (val) => !val,
                validateError: "Не должно быть пустым",
            },
        ],
        email: [
            {
                validateHandler: (val) => !/^[0-9A-z]+@[0-9A-z]+\..+$/gm.test(val),
                validateError: "Не верный формат",
            },
        ],
        phone: [
            {
                validateHandler: (val) => !/^\+?\d{10,15}$/gm.test(val),
                validateError: "Неверный формат номера",
            },
        ],
        message: [
            {
                validateHandler: (val) => !!val,
                validateError: "Сообщение пустое",
            },
        ],
        displayName: []
    };

    public validate(typeOfValidator: string, value: string) {
        const takenValidator = this.validators[typeOfValidator];
        if (takenValidator) {
            for (const {validateHandler, validateError} of takenValidator) {
                if (validateHandler(value)) {
                    return validateError;
                }
            }
        } else {
            throw new Error("Такого валидатора не существует.");
        }
    }
}
