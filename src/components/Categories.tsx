
const list = ['fruit1', 'fruit2'];

const Categories = () => {
  return (
    <>
    <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>

    </>
  )
}

export default Categories