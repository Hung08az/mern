import BaseService from 'services/base.service';
import { useAuthStore } from 'stores/auth-store';

class UserService extends BaseService {
  async login(params) {
    const auth = useAuthStore();

    const result = await this.dao.login(params);

    if (result) { // Login thành công
      auth.signIn(params);
    }

    return params;
  }

  async list(params, page = 1) {
    // remove empty properties
    Object.keys(params).forEach((k) => !params[k] && delete params[k]);
    return this.dao.list(params, page);
  }

  async addUser(params) {
    // remove empty properties
    Object.keys(params).forEach((k) => !params[k] && delete params[k]);
    return this.dao.post(params);
  }

  async delUser(params) {
    // remove empty properties
    console.log(params);
    Object.keys(params).forEach((k) => !params[k] && delete params[k]);
    return this.dao.delete(params);
  }

  async editUser(params) {
    // remove empty properties
    Object.keys(params).forEach((k) => !params[k] && delete params[k]);
    return this.dao.put(params);
  }
}

export default new UserService('user');
