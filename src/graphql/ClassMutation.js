import { gql } from "@apollo/client";

const NEW_CONTENT_CLASS = gql`
  mutation MaterialMutation(
    $title:String!,
    $content:String!,
    $point:Int!,
    $classId:ID!,
    $deadline:String,
    $video:String,
    $file:String){
      material{
        save(request:{   
          title:$title,
          content: $content,
          point:$point,
          classId:$classId, 
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
    $id:ID!,
    $classId:ID!
    $title:String!,
    $content:String!,
    $point:Int!,
    $video:String,
    $file:String) {
      material{
        update(
          id:$id
          request:{
            classId: $classId,
            title:$title,
            content: $content,
            point:$point,
            video:$video,
            file:$file
        }) 
        {
        id
        title
        content
        videoUrl
        fileUrl
        point
        }
    }
  }
`



export { NEW_CONTENT_CLASS, UPDATE_CONTENT_CLASS }