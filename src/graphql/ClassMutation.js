import { gql } from "@apollo/client";

const NEW_CONTENT_CLASS = gql`
  mutation MaterialMutation(
    $title:String!,
    $content:String!,
    $point:Int!,
    $classId:ID!,
    $topicId:String,
    $deadline:String,
    $video:String,
    $file:String){
      material{
        save(request:{   
          title:$title,
          content: $content,
          point:$point,
          classId:$classId, 
          topicId:$topicId,
          deadline:$deadline
          video:$video,
          file:$file
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

const UPDATE_CONTENT_CLASS = gql`
  mutation Materialupdate(
    $ID:ID!,
    $title:String!,
    $content:String!,
    $point:Int!,
    $classId:ID!,
    $topicId:String,
    $deadline:String,
    $video:String,
    $file:String){
      material{
        update(
          id:$ID,
          request:{   
          title:$title,
          content: $content,
          point:$point,
          classId:$classId, 
          topicId:$topicId,
          deadline:$deadline
          video:$video,
          file:$file
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



export { NEW_CONTENT_CLASS, UPDATE_CONTENT_CLASS }