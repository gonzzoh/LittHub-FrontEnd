const url = 'http://localhost:4000/posts'
class PostModel {
    static all() {
        return fetch(url)
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err);
        })
    }
    static show(postId) {
     return fetch(`${url}/${postId}`)
         .then((response) => {
             return response.json()
         })
     }
 }
export default PostModel