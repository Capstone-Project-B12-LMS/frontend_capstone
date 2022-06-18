import { gql } from "@apollo/client";


// Mutation

const CREATE_CLASS = gql`
    mutation CREATE_CLASS($name: String!,$room:String){
        class{
            save(request:{name:$name,room:$room}){
                id
            }
        }
    }
`

const JOIN_CLASS = gql`
    mutation JOIN_CLASS($class_code: String! , $u_id : String!){
        class{
            join(classCode:$class_code , userId:$u_id)
        }
    }
`


// Query

const GET_CLASS_USER = gql`
    query GET_CLASS_USER($id: ID!, $status: ClassStatus!){
        user{
            findByClassByUserId(id: $id, classStatus: $status){
                id,
                name
            }
        }
    }
`



export {
    CREATE_CLASS,
    JOIN_CLASS,
    GET_CLASS_USER
}