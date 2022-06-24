import { gql } from "@apollo/client";


const NEW_CONTENT_CLASS = gql`
    mutation MaterialMutation(
        $title:String!,
        $content:String!,
        $point:Int!,
        $category:String,
        $classId:ID!,
        $topicId:String,
        $deadline:Object){
        material{
            save(request:{
            title:$title,
            content: $content,
            point:$point,
            category:$category,
            classId:$classId, 
            topicId:$topicId,
            deadline:$deadline
            }) {
            id
            title
            content
            videoUrl
            fileUrl
            deadline
            point
            }
        }
    }
`

export { NEW_CONTENT_CLASS }