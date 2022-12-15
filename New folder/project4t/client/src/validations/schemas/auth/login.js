import userModel from 'models/user';

const loginSchema = {
  type: 'object',
  required: ['username', 'password'],
  properties: {
    username: {
      ...userModel.mail,
      errorMessage: {
        minLength: 'username is required',
        _: 'username is error',
      },
    },
    password: {
      ...userModel.password,
      errorMessage: {
        minLength: 'Password is required',
        _: 'Password is invalid',
      },
    },
  },
  additionalProperties: false,
};

export default loginSchema;
