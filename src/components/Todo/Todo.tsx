import { useReducer, useState, type ChangeEvent, type FormEvent } from "react"


const todoReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todo: [...state.todo, action.payload],
            }
    }
}

const Todo = () => {

    const [state, dispatch] = useReducer(todoReducer, {todo: []})

    const [todos, setTodos] = useState([
        'Do to gym',
        'To finish React Assignment',
        'Purchase groceries'
    ])

    const [newTask, setNewTask] = useState('');

    const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!newTask.trim()) {
            alert("Enter the value")
            return
        }

        setTodos([newTask, ...todos])

        setNewTask('')

    }

    const hanelEditTodo = (text: string) => {
        setNewTask(text)
    }

    const hanelDeleteTodo = (text: string) => {
        const deleteTodo = todos.filter((todo) => todo !== text)
        console.log(deleteTodo)
        setTodos(deleteTodo)
    }

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={newTask}
                        onChange={handleNewTask}
                    />
                    <label
                        htmlFor="todo"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        What you want to do?
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length === 0 ? (
                                <tr>
                                    <td colSpan={2} className="text-center py-4 text-gray-500">
                                        Don't have any todo
                                    </td>
                                </tr>
                            ) : (
                                todos.map((todo, item) => (
                                    <tr key={item} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {todo}
                                        </th>
                                        <td className="px-6 py-4 text-right">
                                            <a
                                                onClick={() => hanelEditTodo(todo)}
                                                href="#"
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-2"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                onClick={() => hanelDeleteTodo(todo)}
                                                href="#"
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>

                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Todo