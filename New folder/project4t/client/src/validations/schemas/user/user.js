import userModel from 'models/user';

const userSchema = {
  type: 'object',
  required: ['email', 'name', 'username', 'suite', 'street', 'zipcode', 'phone', 'website', 'company'],
  properties: {
    email: {
      ...userModel.mail,
      errorMessage: {
        minLength: 'Email is required',
        _: 'Email is invalid',
      },
    },
    name: {
      ...userModel.name,
      errorMessage: {
        minLength: 'name is required',
        _: 'name is invalid',
      },
    },
    username: {
      ...userModel.username,
      errorMessage: {
        minLength: 'username is required',
        _: 'username is invalid',
      },
    },
    suite: {
      ...userModel.suite,
      errorMessage: {
        minLength: 'suite is required',
        _: 'suite is invalid',
      },
    },
    street: {
      ...userModel.street,
      errorMessage: {
        minLength: 'street is required',
        _: 'street is invalid',
      },
    },
    zipcode: {
      ...userModel.zipcode,
      errorMessage: {
        minLength: 'zipcode is required',
        _: 'zipcode valid is XXXXX-XXXX',
      },
    },
    city: {
      ...userModel.city,
      errorMessage: {
        minLength: 'city is required',
        _: 'city valid is XXXXX-XXXX',
      },
    },
    phone: {
      ...userModel.phone,
      errorMessage: {
        minLength: 'phone is required',
        _: 'phone maxlength is 11 && type is number',
      },
    },
    website: {
      ...userModel.website,
      errorMessage: {
        minLength: 'website is required',
        _: 'website is invalid',
      },
    },
    company: {
      ...userModel.company,
      errorMessage: {
        minLength: 'company is required',
        _: 'company is invalid',
      },
    },
  },
  additionalProperties: false,
};
export default userSchema;
