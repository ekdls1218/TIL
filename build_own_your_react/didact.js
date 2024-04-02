// 리액트 코드 -> js 코드
/**
- 리액트 엘리먼트 정의
const element = <h1 title="foo">Hello</h1>
*/

// jsx -> js 변환 시, 인자(태그 이름, props, children)를 받아 createElement 함수를 호출하여 객체 생성
// const element = React.createElement(
//     "h1",
//     {title: "foo"},
//     "Hello"
// )

// 생성된 객체
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    },
}


/** 
- 변수에 DOM으로부터 루트 DOM 노드 할당
const container = document.getElementById("root")
*/
const container = document.getElementById("root");


/** 
- 컨테이너 안에 리액트 엘리먼트 생성, reder는 리액트가 DOM을 변경하는 지점
ReactDOM.render(element, container);
*/

// 타입을 이용해 노드(DOM 엘리먼트) 생성(타입은 "h1")
const node = document.createElement(element.type)
// 모든 리액트 엘리먼트 props들을 노드(DOM 엘리먼트)에 할당
node["title"] = element.props.title
console.log(node);

// 자식노드 생성
const text = document.createTextNode("")
text["nodeValue"] = element.props.children

// node에 text 추가
node.appendChild(text)
// container에 node 추가
container.appendChild(node)