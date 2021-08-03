import Article from './Article'
import { articles } from '../data'

function Main() {
  return (
    <main>
      {articles.map(item => (
        <Article title={item.title} text={item.text} />
      ))}
    </main>
  )
}

export default Main
