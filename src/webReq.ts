import axios from 'axios';
import type { AxiosResponse } from 'axios';
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
// that's how we define data type most of the type jo bhi data aane wala hai webReq se ya jaane wala hai dono k hi obj k definition ko define krte hein ya strcuture ko define krte hein

// axios.get('https:///example.com/data')
// .then(Response => {
//     console.log(Response.data);
// })

// there are some library where you get error for type so in that case we can do 
// : npm i some-libray
// npm i -D @types/some-library

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }

const fetchData = async () =>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
        console.log("Todo", response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
// fetchData();

// npx tsc = compile all project files from config
// node dist/filename.js = run the compiled JavaScript output

// ----------------- Fetch -----------------

// now let's see how can we do with using fetch

// Go to fetch.ts file