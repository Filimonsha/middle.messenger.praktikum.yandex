export type ChangeUserInfo = {
    "first_name": string,
    "second_name": string,
    "display_name": string,
    "login": string,
    "email": string,
    "phone": string,
}

export type ChangeUserPassword = {
    oldPassword:string,
    newPassword:string
}
