import { useEffect, useState } from "react"

const Post = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPost(data))

    }, [])

    console.log('post', posts)

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                body
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(({ id, title, body }) => (

                                <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {title}
                                    </th>
                                    <td className="px-6 py-4">{body}</td>
                                </tr>
                                
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}


export default Post