class User{
    constructor(email,password){
        this._email=email;
        this._password=password;

    }

      get getPassword() {
    return this._password.toUpperCase();
    }

    set setPassword(value) {
    this._password = value.toUpperCase();
  }
}
const kavya=new User('kavya@mail','abc');
console.log(kavya.getPassword);                    



