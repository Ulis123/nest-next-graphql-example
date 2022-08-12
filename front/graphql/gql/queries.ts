import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      id
      email
      workEmail
      firstName
      lastName
      gender
      about
      phone
      #      birthday
      linkedinUrl
      facebookUrl
      websiteUrl
      picture
      #      experienceLevel
      #      jobStatus
      #      position
      #      company {
      #        companyNumber
      #        title
      #        description
      #        logo
      #      }
      #      location {
      #        id
      #        name
      #        placeId
      #        latitude
      #        longitude
      #        country
      #        countryCode
      #      }
      #      categories {
      #        id
      #        name
      #      }
      #      skills {
      #        id
      #        name
      #      }
      #      specializations {
      #        id
      #        name
      #        category {
      #          id
      #        }
      #      }
      #      educations {
      #        id
      #        name
      #        degree
      #        fieldOfStudy
      #        startDate
      #        endDate
      #      }
      #      certificates {
      #        id
      #        name
      #        organization
      #        issuedAt
      #        expireAt
      #        isUnlimited
      #        code
      #        attachment
      #        url
      #      }
      step
      enabled
    }
  }
`;

// export const SEARCH = gql`
//   query search($query: String) {
//     search(query: $query) {
//       id
//       type
//       name
//     }
//   }
// `;

export const GET_SKILLS = gql`
  query skills {
    skills {
      id
      name
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      id
      name
      picture
    }
  }
`;

// export const GET_SPECIALIZATIONS = gql`
//   query specializations($ids: [ID], $name: String, $category: ID) {
//     specializations(ids: $ids, name: $name, category: $category) {
//       id
//       name
//       category {
//         id
//       }
//     }
//   }
// `;
//
// export const GET_EXPERIENCE_LEVEL = gql`
//   query experienceLevels {
//     experienceLevels {
//       id
//       name
//       description
//     }
//   }
// `;
//
// export const FIND_COMPANY = gql`
//   query findCompany($query: String!) {
//     findCompany(query: $query) {
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
// export const EXPERT_REQUESTS = gql`
//   query expertRequests($offset: Int!, $limit: Int!) {
//     expertRequests(offset: $offset, limit: $limit) {
//       id
//       name
//       phone
//       email
//       message
//       createdAt
//       expert {
//         id
//         email
//       }
//       owner {
//         id
//         email
//       }
//       attachments {
//         fileName
//         diskName
//         url
//         size
//         mimeType
//         createdAt
//       }
//       isNew
//     }
//   }
// `;
// export const EXPERT_REQUESTS_TOTAL = gql`
//   query expertRequestsTotal {
//     expertRequestsTotal {
//       total
//     }
//   }
// `;
//
// export const EXPERT_PROFILE_HITS = gql`
//   query expertProfileHits($period: Int!) {
//     expertProfileHits(period: $period) {
//       period
//       dates
//       hits
//     }
//   }
// `;
//
// export const EXPERT_PROFILE_HITS_TOTAL = gql`
//   query expertProfileHitsTotal {
//     expertProfileHitsTotal {
//       total
//     }
//   }
// `;
//
// export const EXPERT_PROFILE = gql`
//   query expertProfile($id: ID!) {
//     expertProfile(id: $id) {
//       id
//       email
//       firstName
//       lastName
//       gender
//       about
//       phone
//       birthday
//       workEmail
//       linkedinUrl
//       facebookUrl
//       websiteUrl
//       experienceLevel
//       jobStatus
//       position
//       company {
//         id
//         companyNumber
//         title
//         description
//         companyType
//         addressSnippet
//         dateOfCreation
//         logo
//       }
//       location {
//         id
//         name
//         placeId
//         latitude
//         longitude
//         city
//         country
//         countryCode
//       }
//       categories {
//         id
//         name
//         picture
//         count
//       }
//       picture
//       skills {
//         id
//         name
//       }
//       specializations {
//         id
//         name
//         category {
//           id
//           name
//         }
//       }
//       educations {
//         id
//         name
//         degree
//         fieldOfStudy
//         startDate
//         endDate
//       }
//       certificates {
//         id
//         name
//         organization
//         issuedAt
//         expireAt
//         isUnlimited
//         code
//         attachment
//         url
//       }
//       enabled
//     }
//   }
// `;
//
// export const EXPERTS_SEARCH = gql`
//   query expertsSearch(
//     $category: String
//     $specializations: [String]
//     $skills: [String]
//     $locations: [String]
//     $levels: [String]
//     $sort: ExpertsSearchSort
//     $offset: Int
//     $limit: Int
//   ) {
//     expertsSearch(
//       category: $category
//       specializations: $specializations
//       skills: $skills
//       locations: $locations
//       levels: $levels
//       sort: $sort
//       offset: $offset
//       limit: $limit
//     ) {
//       results {
//         id
//         firstName
//         lastName
//         about
//         experienceLevel
//         position
//         location {
//           id
//           name
//           city
//           country
//         }
//         picture
//         skills {
//           id
//           name
//         }
//       }
//       total
//       filters {
//         categories {
//           enabled
//           category {
//             id
//             name
//           }
//         }
//         skills {
//           enabled
//           skill {
//             id
//             name
//           }
//         }
//         specializations {
//           enabled
//           specialization {
//             id
//             name
//           }
//         }
//         levels {
//           enabled
//           level {
//             id
//             name
//             description
//           }
//         }
//         locations {
//           enabled
//           location {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `;
