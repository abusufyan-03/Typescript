// Type definations and Axios in typescript | 02

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        
        if(!response.ok){
            console.log(`HTTP Error: ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log(data);
    } catch (error: any) {
        
    }
}
fetchData();