import { getRepository } from 'typeorm';
import User from '../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Incorrect email/password combination');
    }
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    /**Para gerar uma string criptografada, usei a palavra gobarber no site md5.cz
     * Para verificação do token, gerado no endpoint, copie o token e cole no site: jwt.io
     */
    const token = sign({}, '8538607221f2e42284acf599214cfa34', {
      subject: user.id,
      expiresIn: '1d',
    });
    delete user.password;

    return { user, token };
  }
}

export default AuthenticateUserService;
