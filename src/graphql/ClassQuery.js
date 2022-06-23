import { gql } from "@apollo/client";

// Mutation

const CREATE_CLASS = gql`
  mutation CREATE_CLASS($name: String!, $room: String) {
    class {
      save(request: { name: $name, room: $room }) {
        id
        name
      }
    }
  }
`;

const JOIN_CLASS = gql`
  mutation JOIN_CLASS($class_code: String!, $u_id: String!) {
    class {
      join(classCode: $class_code, userId: $u_id) {
        id
        name
      }
    }
  }
`;

// Query

const GET_CLASS_BY_U_ID = gql`
  query FIND_CLASS_BY_U_ID($id: ID!, $status: ClassStatus!) {
    user {
      findByClassByUserId(id: $id, classStatus: $status) {
        id
        name
        status
        code
        users {
          id
          email
        }
        createdBy
      }
    }
  }
`;

const GET_CLASS_BYID = gql`
  query GET_CLASS_BYID($id: ID!) {
    class {
      findById(id: $id) {
        name
        createdBy
        users {
          id
          fullName
          email
        }
      }
    }
  }
`;

export {
  CREATE_CLASS,
  JOIN_CLASS,
  GET_CLASS_BY_U_ID,
  GET_CLASS_BYID,
};
