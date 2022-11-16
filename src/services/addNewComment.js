import http from './httpService';
export function addNewComment(comment){
   return http.post("/comments", comment)
}