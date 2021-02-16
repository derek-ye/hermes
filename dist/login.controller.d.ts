import { Request } from 'express';
import { Person } from './person.dto';
export declare class LoginController {
    login(request: Request): string;
    testFunc(): string;
    create(createPerson: Person): Promise<Person>;
}
