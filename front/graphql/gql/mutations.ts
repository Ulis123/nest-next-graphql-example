import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
    }
  }
`;

export const LOGOUT = gql`
  mutation logOut {
    logOut {
      result
    }
  }
`;

export const SIGN_UP = gql`
  mutation registerUser($createUserInput: CreateUserInput!) {
    registerUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

// export const CONFIRM_USER = gql`
//   mutation confirmRegistration($token: String!) {
//     confirmRegistration(token: $token) {
//       result
//     }
//   }
// `;
//
// export const RESEND_CONFIRMATION = gql`
//   mutation resendConfirmation {
//     resendConfirmation {
//       result
//     }
//   }
// `;

// export const PASSWORD_RESET = gql`
//   mutation passwordReset($email: String!) {
//     passwordReset(email: $email) {
//       result
//     }
//   }
// `;

// export const CONFIRM_RESET = gql`
//   mutation confirmReset($token: String!, $password: String!) {
//     confirmReset(token: $token, password: $password) {
//       result
//     }
//   }
// `;
//
// export const UPDATE_PROFILE = gql`
//   mutation updateProfile(
//     $firstName: String
//     $lastName: String
//     $about: String
//     $phone: PhoneNumber
//     $gender: Gender
//     $birthday: Date
//     $workEmail: String
//     $linkedinUrl: String
//     $facebookUrl: String
//     $websiteUrl: String
//     $specializations: [ID]
//     $skills: [ID]
//     $experienceLevel: ID
//     $jobStatus: ID
//     $position: String
//     $companyNumber: String
//     $placeId: String
//     $picture: File
//     $step: ID
//   ) {
//     updateProfile(
//       firstName: $firstName
//       lastName: $lastName
//       about: $about
//       phone: $phone
//       gender: $gender
//       birthday: $birthday
//       workEmail: $workEmail
//       linkedinUrl: $linkedinUrl
//       facebookUrl: $facebookUrl
//       websiteUrl: $websiteUrl
//       specializations: $specializations
//       skills: $skills
//       experienceLevel: $experienceLevel
//       jobStatus: $jobStatus
//       position: $position
//       companyNumber: $companyNumber
//       placeId: $placeId
//       picture: $picture
//       step: $step
//     ) {
//       id
//     }
//   }
// `;
//
// export const ADD_SKILL = gql`
//   mutation addSkill($id: ID!) {
//     addSkill(id: $id) {
//       result
//     }
//   }
// `;
//
// export const DELETE_SKILL = gql`
//   mutation deleteSkill($id: ID!) {
//     deleteSkill(id: $id) {
//       result
//     }
//   }
// `;
//
// export const ADD_SPECIALIZATION = gql`
//   mutation addSpecialization($id: ID!) {
//     addSpecialization(id: $id) {
//       result
//     }
//   }
// `;
//
// export const DELETE_SPECIALIZATION = gql`
//   mutation deleteSpecialization($id: ID!) {
//     deleteSpecialization(id: $id) {
//       result
//     }
//   }
// `;
//
// export const ADD_COMPANY = gql`
//   mutation addCompany(
//     $number: String!
//     $name: String!
//     $description: String
//     $location: String
//     $foundedAt: Date
//     $fieldOfActivity: String
//     $specialization: String
//     $website: String
//     $logo: File
//   ) {
//     addCompany(
//       number: $number
//       name: $name
//       description: $description
//       location: $location
//       foundedAt: $foundedAt
//       fieldOfActivity: $fieldOfActivity
//       specialization: $specialization
//       website: $website
//       logo: $logo
//     ) {
//       id
//       companyNumber
//       title
//       description
//       companyType
//       addressSnippet
//       dateOfCreation
//       logo
//     }
//   }
// `;
//
// export const ADD_EDUCATION = gql`
//   mutation addEducation($name: String, $degree: String, $fieldOfStudy: String, $startDate: Date, $endDate: Date) {
//     addEducation(name: $name, degree: $degree, fieldOfStudy: $fieldOfStudy, startDate: $startDate, endDate: $endDate) {
//       name
//     }
//   }
// `;
//
// export const UPDATE_EDUCATION = gql`
//   mutation updateEducation(
//     $id: ID!
//     $name: String
//     $degree: String
//     $fieldOfStudy: String
//     $startDate: Date
//     $endDate: Date
//   ) {
//     updateEducation(
//       id: $id
//       name: $name
//       degree: $degree
//       fieldOfStudy: $fieldOfStudy
//       startDate: $startDate
//       endDate: $endDate
//     ) {
//       name
//     }
//   }
// `;
//
// export const DELETE_EDUCATION = gql`
//   mutation deleteEducation($id: ID!) {
//     deleteEducation(id: $id) {
//       result
//     }
//   }
// `;
//
// export const ADD_CERTIFICATE = gql`
//   mutation addCertificate(
//     $name: String
//     $organization: String
//     $issuedAt: Date
//     $expireAt: Date
//     $isUnlimited: Boolean
//     $code: String
//     $attachment: File
//   ) {
//     addCertificate(
//       name: $name
//       organization: $organization
//       issuedAt: $issuedAt
//       expireAt: $expireAt
//       isUnlimited: $isUnlimited
//       code: $code
//       attachment: $attachment
//     ) {
//       name
//     }
//   }
// `;
//
// export const UPDATE_CERTIFICATE = gql`
//   mutation updateCertificate(
//     $id: ID!
//     $name: String
//     $organization: String
//     $issuedAt: Date
//     $expireAt: Date
//     $isUnlimited: Boolean
//     $code: String
//     $attachment: File
//   ) {
//     updateCertificate(
//       id: $id
//       name: $name
//       organization: $organization
//       issuedAt: $issuedAt
//       expireAt: $expireAt
//       isUnlimited: $isUnlimited
//       code: $code
//       attachment: $attachment
//     ) {
//       name
//     }
//   }
// `;
//
// export const DELETE_CERTIFICATE = gql`
//   mutation deleteCertificate($id: ID!) {
//     deleteCertificate(id: $id) {
//       result
//     }
//   }
// `;
//
// export const CHANGE_EMAIL = gql`
//   mutation changeEmail($email: String!) {
//     changeEmail(email: $email) {
//       result
//     }
//   }
// `;
//
// export const CHANGE_PASSWORD = gql`
//   mutation changePassword($current: String!, $new: String!, $confirm: String!) {
//     changePassword(current: $current, new: $new, confirm: $confirm) {
//       result
//     }
//   }
// `;
//
// export const SEND_SUPPORT_REQUEST = gql`
//   mutation sendSupportRequest($name: String!, $email: String!, $subject: String!, $message: String!) {
//     sendSupportRequest(name: $name, email: $email, subject: $subject, message: $message) {
//       result
//     }
//   }
// `;
//
// export const MARK_REQUESTS = gql`
//   mutation markRequests($ids: [ID]!, $isNew: Boolean!) {
//     markRequests(ids: $ids, isNew: $isNew) {
//       result
//     }
//   }
// `;
//
// export const SEND_REQUEST = gql`
//   mutation sendRequest(
//     $expert: ID!
//     $name: String!
//     $phone: String!
//     $email: String!
//     $message: String!
//     $attachments: [File]
//   ) {
//     sendRequest(
//       expert: $expert
//       name: $name
//       phone: $phone
//       email: $email
//       message: $message
//       attachments: $attachments
//     ) {
//       id
//     }
//   }
// `;
