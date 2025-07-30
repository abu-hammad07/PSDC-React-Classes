import { useState } from "react";

let steps = [1, 2, 3];

const Steper = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const hanlePreStep = () => {
        setCurrentStep(currentStep - 1)
    }

    return (
        <>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
                {
                    steps.map((step, index) => (
                        <li key={index} className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
                            <span className={`${currentStep >= step && 'step'} flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500`}>
                                {step}
                            </span>
                        </li>
                    ))
                }
            </ol>

            <div className="mt-5">
                <button onClick={hanlePreStep} disabled={!currentStep} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                     focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Previews
                </button>

                <button onClick={handleNextStep} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium 
                    rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Next
                </button>
            </div>


        </>
    )

}

export default Steper