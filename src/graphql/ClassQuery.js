import { gql } from "@apollo/client";

// Mutation

const CREATE_CLASS = gql`
  mutation CREATE_CLASS($name: String!, $room: String) {
    class {
      save(request: { name: $name, room: $room }) {
        id
      }
    }
  }
`;

const JOIN_CLASS = gql`
  mutation JOIN_CLASS($class_code: String!, $u_id: String!) {
    class {
      join(classCode: $class_code, userId: $u_id) {
        id
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
        id
        name
        createdBy
        code
        name
        users {
          id
          fullName
          email
        }
      }
    }
  }
`;

const REQUEST_COUNSELLING = gql`
  mutation REQUEST_COUSELLING($guidance: GuidanceNew!) {
    guidance {
      save(request: $guidance) {
        id
      }
    }
  }
`;

const SAVE_FEEDBACK = gql`
  mutation SAVE_FEEDBACK($feedback:FeedbackNew!){
    feedback{
      save(request:$feedback){
        id
      }
    }
  }
`

const GET_FEEDBACK = gql`
  query GET_FEEDBACK($class_id:ID!){
    feedback{
      findByClassId(classId:$class_id){
        id
        content
        user{
          id
          fullName
        }
      }
    }
  }
`

const LEAVE_CLASS = gql`
  mutation LEAVE_CLASS($class_id:ID!, $user_id:ID!){
    class{
      deleteUserById(classId:$class_id, userId: $user_id){
        isDeleted
      }
    }
  }
`


export {
  CREATE_CLASS,
  JOIN_CLASS,
  GET_CLASS_BY_U_ID,
  GET_CLASS_BYID,
  REQUEST_COUNSELLING,
  GET_FEEDBACK,
  SAVE_FEEDBACK,
  LEAVE_CLASS
};
