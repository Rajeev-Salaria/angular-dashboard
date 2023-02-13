 interface RegisterForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  city: string;
  email: string;
  gender: string;
}

interface LoginForm{
  email:string,
  password:string
}



export{RegisterForm,LoginForm}
