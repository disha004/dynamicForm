const data = [
    {
        disabled: false,
        name: field1,
        placeholder: field1,
        label: field1,
        type: text,
        errors: [],
        value:"testing",
        element: input,
        validators:{
            required: true,
            maxLength: 10,
            minLength:5
        }
    },

 {
        disabled:false,
        name: field2,
        placeholder: field2,
        label: field2,
        type: number,
        errors: [],
        value:5,
        element: input,
        validators:{
            max:10,
            min:5,
            required:true
        }
    },
     {
        disabled:false,
        name: field3,
        errors:[],
        placeholder: field3,
        label: field3,
        value: "",
        type: select,
        element: select,
        options: [op1, op2, op3, op4],
        validators: {
            required:true
        }
    },
    {
        disabled: false,
        name: field4,
        placeholder: field4,
        label: field4,
        type: email,
        errors: [],
        value:"test@mail.com",
        element: input,
        validators:{
            required: true,
            email: true
        }
    }
]
