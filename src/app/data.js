

export const data = [
    {
        disabled: false,
        name: 'field1',
        placeholder: 'field1',
        label: 'field1',
        type: 'input',
        validators:[Validator.maxLength(5), Validator.minLength(2), Validator.required]
    },
 {
        disabled:false,
        name: field2,
        placeholder: field2,
        label: field2,
        type: number,
        validators:[Validator.maxLength(5), Validator.minLength(2), Validator.required]
    },
     {
        disabled:false,
        name: field3,
        placeholder: field3,
        label: field3,
        type: select,
        option: [op1, op2, op3, op4],
        validator: [Validator.maxLength(5), Validator.minLength(2), Validator.required]
    }
]
