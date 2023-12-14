import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react';

function Header(props) {
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(event) => {
                        /* React 상에서 onClick 카멜 케이스로 html 이벤트 지정가능 */
                        /* React 상의 html 이벤트 지정시에는 ""따옴표가 아니라 {}로 함수 지정 */
                        event.preventDefault();
                        props.onChangeMode();
                        /* 4번 라인 function Header에서 받아온 props 파라미터를 사용하여 onChangeMode를 호출 가능 */
                    }}>
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

function Nav(props) {
    console.log(props);
    const list = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        list.push(
            <li key={t.id}>
                <a id={t.id} href={"/read/" + t.id} onClick={event=>{
					event.preventDefault();
					props.onChangeMode(Number(event.target.id));
				}}>{t.title}</a>
            </li>
        );
    }
    return (
        <nav>
            <ol>{list}</ol>
        </nav>
    );
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
	// const _mode = useState('WELCOME'); /****** 상태를 만들었다 ******/
	// const mode = _mode[0];
	// const setMode = _mode[1];
	/* 
	1.useState의 인자는 그 state의 초깃값
	2.State의 값의 0번째 인덱스의 값으로 읽는다
	3.State를 바꿀 때는 1번째 인덱스의 값으로(함수로) 바꾼다 
	*/
	const [mode, setMode] = useState('WELCOME');
	const [id, setId] = useState(null);
    const topics = [
        { id: 1, title: "html5", body: "html5 is ..." },
        { id: 2, title: "css3", body: "css3 is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ];
	let content = null;
	if(mode === 'WELCOME'){
		content = <Article title="Welcome" body="hello, website"></Article>
	} else if (mode === 'READ') {
		let title,body = null;
		for (let i =0; i <topics.length;i++) {
			if(topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}
		content = <Article title={title} body={body}></Article>
	}
    return (
        <div className="App">
            <Header
                title="React"
                onChangeMode={() => {
                    setMode('WELCOME');
                }}></Header>
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    setMode('READ');
					setId(_id);
                }}></Nav>
            {/* 따옴표 없이 중괄호로 감싸면 변수로 지정 가능 */}
            {content}
        </div>
    );
}

export default App;
