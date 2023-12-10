import logo from './logo.svg';
import './App.css';
function Header(props) {
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}
function Nav(props) {
  console.log(props)
  const list = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i]
    list.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'html5', body: 'html5 is ...'},
    {id:2, title:'css3', body: 'css3 is ...'},
    {id:3, title:'javascript', body: 'javascript is ...'}
  ]
  return (
    <div className="App">
      <Header title='React'></Header>
      <Nav topics={topics}></Nav>{/* 따옴표 없이 중괄호로 감싸면 변수로 지정 가능 */}
      <Article title="Hi, stranger" body="hello, website"></Article>
    </div>
  )
}

export default App;
