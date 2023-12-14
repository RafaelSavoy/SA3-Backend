import bcrypt from 'bcrypt';

class PasswordServices {
  salts: number;
  constructor(salts: number) {
    this.salts = salts;
  }
  async checkPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.salts);
  }
}

const passwordServices = new PasswordServices(10);

export { passwordServices };
