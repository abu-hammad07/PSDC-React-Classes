import './App.css'
import BlogCard from './components/BlogCard'
import BlogList from './components/BlogList'
import Card from './components/Card'
import Categories from './components/Categories'
import Counter from './components/Counter'
import Greating from './components/Greating'
import Post from './components/Post'
import Steper from './components/Steper'
import Welcome from './components/Welcome'

function App() {

  // Get current time in HH:MM AM/PM format
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = ((hours + 11) % 12 + 1) // 12-hour format
  const currentTime = `${formattedHours}:${minutes}${ampm}`

  return (
    <>
      <div>
        {/* <h1>Hello World!</h1> */}
        {/* <Greating location="karachi" currentTime={currentTime} />
        <Card title="Card Title" description="This is a card component." />
        <BlogCard title="Blog 1" shortDescription="Short descrtion" cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdz-_XVl8NShUAtVTVyh2TFSt0LaRSeqjuHw&s" /> */}
        {/* <Welcome /> */}
        {/* <Counter /> */}

        {/* <Categories /> */}

        {/* <Steper /> */}

        {/* <Post /> */}

        <BlogList />

      </div>
    </>
  )
}

export default App
