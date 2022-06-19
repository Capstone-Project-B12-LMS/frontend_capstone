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
            join(classCode:$class_code , userId:$u_id){
                id,
                name,
                users{
                    id
                }
            }
        }
    }
`


// Query

const GET_ACTIVE_CLASS = gql`
    query GET_ACTIVE_CLASS{
        class{
            findAllWithPageable(page:1,size:4){
                data{
                    id,
                    name,
                    status,
                    users{
                        id
                    }
                    createdBy
                }
            }
        }
    }
`



export {
    CREATE_CLASS,
    JOIN_CLASS,
    GET_ACTIVE_CLASS
}