import { gql } from "@apollo/client";

const FIND_CLASS_MATERIAL = gql`
    query FIND_CLASS_MATERIAL($class_id : ID!){
        material{
            findAllByClassId(classId:$class_id){
                id,
                title,
                content,
                videoUrl,
                fileUrl,
                deadline,
                point,
                createdBy
            }
        }
    }
`

const FIND_MATERIAL_BY_ID = gql`
    query FIND_MATERIAL($id : ID!){
        material{
            findById(id:$id){
                id,
                title,
                content,
                videoUrl,
                fileUrl,
                deadline,
                point,
                createdBy
            }
        }
    }
`

export {
    FIND_CLASS_MATERIAL,
    FIND_MATERIAL_BY_ID
}