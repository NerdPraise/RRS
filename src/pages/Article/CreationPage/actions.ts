// No need for API definitions

export const uploadArticle = (data: FormData) => {
  return fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: data,
  })
}
