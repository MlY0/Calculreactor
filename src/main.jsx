import React from 'react'
import ReactDOM from 'react-dom/client'
// 그걸 여기서 가져와 import로다가 
import App from './App.jsx'
import './index.css'

// 날따라와줄래 나 강림
// element = 요소(태그)
// id로 태그를 가져오는 함수 getElementById 이걸로 root라는 id를 가진 요소를 가져왔어
// 그럼 아까 그 div 태그가 불러와지겠지? 네
// 그걸 리액트에서 createRoot로다가 본문 역할을 하는 루트로 만들어버림 
// 그래서 저 메인 페이지는 다른곳에서 만들어둔걸 여기서 불러오는 코드를 짠거고 이걸 index.html에서 root로 가져오는 3단 돚거?? 같은거야??
// 메인페이지 보면 script 태그가 있어 거기 주소가 이 main.jsx로 돼있거든 
// 그렇다
// 그래서 저 메인페이지는 사실상 이 페이지 자체를 갖고있는거임
// 이 스크립트 자체를 
// 그렇다는건 저 메인페이지를 건드리지 않아도 이 스크립트만 바꾸면 문서가 수정될거란 얘기입니다 그렇다
// 굳이 분리한 이유는 말안해도 아시겠죠다 네 굳네
// 그런데 사실 여기도 건드릴 필요 없어 왜
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 얘 때문에 이 밑에 App */}
    {/* 리액트로 만든 커스텀 컴포넌트라고 부르는건데  */}
    {/* 여기랑 같은 디렉토리 레벨에 App.jsx가 있거든 */}
    <App />
  </React.StrictMode>,
)
