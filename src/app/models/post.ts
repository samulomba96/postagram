//per fare questo si può copiare la risposta di postman dal DB e incollarla su questo sito 
//https://transform.tools/json-to-typescript
//e  ci restituisce l'interfaccia da copiare qua
//molto utile per interfacce o tipi (è uguale) complesse

//questo è il tipo di post a cui deve corrispondere il post dal server quando lo chiedo
export interface Post {
    _id: string
    date: string
    title: string
    author: string
    body: string
    hidden: boolean
}

//questo è il tipo di post a cui deve corrispondere il post dal server quando lo devo inviare al server
export type PostDTO = {
    title: string,
    author: string,
    body: string,
    hidden: boolean
}