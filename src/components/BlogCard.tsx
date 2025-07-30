interface BlogcardProps {
    title: string,
    shortDescription: string,
    cover: string
}


const BlogCard: React.FC<BlogcardProps> = ({title, shortDescription, cover}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <img src={cover} alt={title} />
    </div>
  )
}

export default BlogCard