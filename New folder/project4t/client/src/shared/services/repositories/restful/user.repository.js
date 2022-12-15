import BaseRepository from './base.repository';

class UserRepository extends BaseRepository {
  constructor() {
    super('/users');
  }

  login(params) {
    return this.client.post('', params);
  }

  async list(params, page = 1) {
    return this.client.get('', {
      ...params,
      page,
    });
  }

  async post(params) {
    return this.client.post('', {
      ...params,
    });
  }

  async put(id, params) {
    // eslint-disable-next-line no-template-curly-in-string
    return this.client.put(`/${id}`, {
      ...params,
    });
  }

  async delete(params) {
    return this.client.delete(`/${params}`, {
      ...params,
    });
  }

  checkLogin() {
    return this.client.get('/checklogin');
  }
}

export default new UserRepository();
