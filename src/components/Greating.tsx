import type { FC } from "react";

interface GreatingProps {
    location: string, 
    currentTime: string
}


// const Greating = ({location, currentTime}: GreatingProps) => {
const Greating: FC<GreatingProps> = ({location, currentTime}) => {
    return (
        <div>
            <h2>Welcome to {location}, Time: {currentTime}</h2>
        </div>
    ) 
}


export default Greating;