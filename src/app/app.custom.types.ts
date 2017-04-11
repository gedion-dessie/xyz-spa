/**
 * Created by gedionz on 4/10/17.
 */


export interface Recruiter {
  id : number,
  person : Person,
  office ?: string,
  officePhoneNumber ?: string,
  extension ?: string
}

export interface Address {
  city : string,
  state : string,
  street : string,
  zipCode : string
}

export interface Person {
  firstName : string,
  lastName : string,
  email : string,
  phoneNumber : string,
  address : Address
}
