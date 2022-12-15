const userModel = {
  mail: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
    pattern: '^[A-Za-z0-9_!#$%&*+/=?`\'{|}~^.-]+@[A-Za-z0-9.-]+$',
  },
  password: {
    type: 'string',
    minLength: 1,
  },
  name: {
    type: 'string',
    maxLength: 30,
    minLength: 1,
  },
  username: {
    type: 'string',
    maxLength: 20,
    minLength: 1,
  },
  suite: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
  },
  city: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
  },
  street: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
  },
  zipcode: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
    pattern: '^[0-9]{5}(?:-[0-9]{4})?$',
  },
  phone: {
    type: 'string',
    maxLength: 11,
    minLength: 1,
  },
  website: {
    type: 'string',
    maxLength: 20,
    minLength: 1,
  },
  company: {
    type: 'string',
    maxLength: 50,
    minLength: 1,
  },
};
export default userModel;
