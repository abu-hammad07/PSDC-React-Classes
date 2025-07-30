import { useEffect, useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(10);
    
    useEffect(()=>(
        console.log('post')
    ),[counter])
            

    const increament = () => {
        // alert('increament')
        setCounter(counter + 1)
    }

    const decreament = () => {
        // alert('decreament')
        // if (counter == 0) {
        //     alert('Your decreament value 0 please click increament button')
        // } else {
        //     setCounter(counter - 1)
        // }
        setCounter(counter - 1)
    }


    return (
        <div>
            <span className='count'>{counter}</span>
            <div>
                {/* <button onClick={decreament}>Decreament</button> */}
                {/* <button onClick={increament}>Increament</button> */}
                {/* <button onClick={() => setCounter(counter + 1)}>Increament</button> */}
                <button
                    type="button" onClick={decreament} disabled={!counter}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Decreament
                </button>
                <button
                    type="button" onClick={() => setCounter(counter + 1)}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Increament
                </button>
            </div>
        </div>
    )
}

export default Counter