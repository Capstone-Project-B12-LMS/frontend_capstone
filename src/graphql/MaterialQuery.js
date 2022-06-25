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

export {
    FIND_CLASS_MATERIAL
}