import RepositoryFactory from './repositories/repository.factory';

export default class BaseService {
  serviceName;

  dao; // Data Access Object

  constructor(serviceName) {
    this.serviceName = serviceName;
    this.dao = RepositoryFactory.getRepository(serviceName);
  }

  async version() {
    return '1.0';
  }
}
