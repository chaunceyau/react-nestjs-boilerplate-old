
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAccountInput {
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class AuthPayload {
    id: string;
    jwt?: string;
}

export abstract class IMutation {
    abstract login(loginInput?: LoginInput): User | Promise<User>;

    abstract createAccount(createAccountInput?: CreateAccountInput): AuthPayload | Promise<AuthPayload>;

    abstract logout(): string | Promise<string>;
}

export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;

    abstract currentUser(): User | Promise<User>;
}

export class User {
    id: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}
