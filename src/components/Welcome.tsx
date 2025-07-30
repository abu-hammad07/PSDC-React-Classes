const Welcome = () => {
    return (

        <div>
            <h1>Welcome to My Tech park</h1>
            <p>
                This is a paragraph with <strong>bold text</strong>and <em>italic text</em>
            </p>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <label htmlFor="name"> Name </label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

    )
}

export default Welcome