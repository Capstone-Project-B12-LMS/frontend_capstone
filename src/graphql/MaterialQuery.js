import { gql } from "@apollo/client";

const FIND_MATERIAL_CLASS = gql`
    query FIND_MATERIAL_CLASS($class_id: ID!){
        material{
            findAllByClassId(classId: $class_id){
                id
                title
                content
                point
                videoUrl
                fileUrl
                createdBy
            }
        }
    }
`

export {
    FIND_MATERIAL_CLASS
}