export class RegisterDTO {
    constructor(
    public  fullname: String,
    public  phone_number: String,
    public  password: String,
    public retype_password: String,
    public role_id: number = 1
    ){}
}
