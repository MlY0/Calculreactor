import { useState, useEffect } from 'react';
import './App.css'

// 좋아 깔끔하죠 the void
// 지금 그 localhost 거기 볼래 페이지가 그냥 아이콘들이랑 그런거 다 사라졋어 좋았어 내가 다 죽였어 불쌍해
function App() {
  // let text = 'text' // 이렇게쓰면 안됨 리액트에선
  // 리액트 까다롭네 근데 const는 상수아냐?? 맞아 상수인데 리액트에선 불변성 이라는 규칙을 지키려고 상수로 표현해 
  const [display, setDisplay] = useState(0); // 이걸 상태라고 하거든 (리액트에서) 이 App이라는 컴포넌트가 text라는 상태를 갖고있다 
  const [back, setBack] = useState(0)
  const [isOperatorClicked, setIsOperatorClicked] = useState(false)
  const [operator, setOperator] = useState('=')

  // const [moving, setMoving] = useState(false)
  // setText로 text의 상태를 바꿀수있음  set어쩌구는 리액트 국룰 good
  // 변수 상수명 바꿀때는 f2를 애용합시다 
  // undefined2 라고 나오는데?? 저거 0도 갠찬아? 저겓 ㅓ귀여우니까 저걸로할래
  // 상태가 무슨말인지 모르겠어


  // 힌트 안같애
  // 보면 알지
  // 눈 코 귀없는 사람이야
  // 아
  // 어



  // 연산자를 누르면 모든 숫자들한테 특별한 무언가를 줘
  // 모든 숫자들은 처음 눌러지면 그 특별한 무언가를 써야해
  // 쓰고나면 사라지고, 그 무언가를 쓰면 DP1에 있는 스크린은 초기화됨
  // 네

  const 나는코드들을지배할수있다 = function (event) {
    if (display == 0) setDisplay('' + event.target.value)
    if (isOperatorClicked) {
      setDisplay('' + event.target.value)
      setIsOperatorClicked(false)
    } else {
      setDisplay(display + '' + event.target.value)
    }
  }
  // 현재 각 버튼들은 누르면 각자 할일만 하는상태, 1은 1출력하기 / + 누르면 DP1, DP2 더해서 DP1에 출력해줌, DP2에 저장도 동시에함
  // 이 버튼들을 어떻게 엮을지?
  // 아님 다른방법으로 동작하게 할건지?
  // 천천히 생가할래 왜냐면 지금졸려
  // 저거말고 뭘 검색하면 도움이 될까
  // 만들기 저거 해답말고
  // 알고리즘 생각하기
  // 선생님도 계산기 만들어봣삼 ?
  //     다 해보는거 아니야 ??
  //       힌트가 뭐야
  //   상태가뭐야

  // 그럼 지금 +는 누르면 무슨역할이야?
  // 연산자를 누르고 난 후 첫 숫자버튼을 누를때만 초기화 나는코드들을지배할수있다로 구분하면 안대? 그렇지않아??저건 숫자들만 쓰는애잖아 네연산자는 다른애쓰잖아
  // 다른 연산자를 누르고 난 후 숫자누르면 초기화? 누르고 난후에 if로 알수없어?숫자 그럼 이벤트말고 나는코드들을지배할수있다 함수 저거 안대?
  // if 어떻게쓰는지 까먹음 그건아는데 어떻게 코드작성행하는지를 까먹음
  // 어디서보지 나는코드들을지배할수있다를 쓰는애면 dp1을 초기화하고 창에 숫자 누르는거 보여주기
  // 어디버튼
  const operatorClickHandler = function (e) {
    setBack(Number(display))
    setOperator(e.target.value)
    setIsOperatorClicked(true)
  }

  const equalClickHandler = function (e) {
    switch (operator) {
      case '+':
        setDisplay(Number(back) + Number(display))
        break;
      case '-':
        setDisplay(Number(back) - Number(display))
        break;
      case '*':
        setDisplay(Number(back) * Number(display))
        break;
      case '/':
        setDisplay(Number(back) / Number(display))
        break;
      case '=':
        break;
    }
    setBack(0)
    setOperator('=')
    setIsOperatorClicked(true)
  }

  const clearClickHandler = function (e) {
    setDisplay(0)
    setBack(0)
  }

  // useEffect 첫번째 파라미터는 어떤 state가 바뀔따마다 실행될 함수, 두번째 파라미터는 그 state의 목록
  // useEffect(function () {
  //   setDisplay(back)
  // }, [back])

  // A && B: and 연산 A이면서 B이면 true 
  // A || B: or 연산 A이거나 B이면 true
  // !A: not 연산 A가 아님

  // 이상한애네
  // 그럼 0하고 더해지는거 아니야?? 1+0
  // 최초에는 암것도 없으면 0 아니야?
  //맞아
  //ㅈ홇아 
  // 1. 버튼을 누를때마다 창에 순차적으로 숫자가 누적됨.
  // 2. 연산자를 누를때마다 누적된 숫자를 연산함과 동시에 값을 어딘가에 저장해
  // 3. 값을 디스플레이1에 보여줌
  // 4. 이후 숫자 버튼을 누를때, 디스플레이1를 초기화하고 0부터 숫자 누적이 시작됨
  // 5. 연산자를 누를시, 저장한 값과 연산함

  // 이럼 다대나???


  // 조은데가 어디에 쓰인건지 몰르겠는데
  // 박스에 띄울때 썻어?
  // 님이 맘대로 적은ㄷ거임??오 여기 다있어 잡앗어 디버거에서 일시중지됨네 포인터 이벤트 머가 만아오 또 뭐가ㅏ ㅁ낳아
  // 클릭한 효과가 나온거같은데 button 맞아 <button vaLUE="1">1</BUTTON> 그럿다
  // 밸류까지 적으니까 '1'이 나왔어
  // 대충 알겠어요 설명하라면 설명은 못하겠지만 느낌만아는 그런걸 머라해 암튼 그런거야
  // 대충 네
  // 아니야 123만 떠잇어 창에 1누르면 1231 12311 123111 이렇게대 그런거같은대
  return (
    <>
      <input readOnly value={display}></input>
      {/* 맞아 그래서 저기 밑에있는 밸류를 가져온거야 */}
      {/* 이제 버튼이 필요하겠죠 일단 모양 신경쓰지말고 전부 좌르륵 늘어놔봅시다  */}
      {/* clickOneHandler이거는 그냥 맘대로 넣은거에요? 이런건 어떻게 구분ㅇ해요? onclick네 이런걸 이름취급인지 코드취급인지 어떻게알아요? */}
      {/* 그런 조왓어 */}
      {/* 이제 누르면 1도 추가되고 2도 추가대 */}
      {/* 왜 재사용이 안될꺼라고 생각해야하는지 모르겠어 */}
      {/* 나는 이제 숫자들을 지배할수있다 */}
      {/* 호기심해결 */}
      {/* 네
      네
      아냐 연산자를 누르고 난 후에 아 그럼 온클릭 하라는거?? 온클릭은 둘다있잖아 연산자랑 숫자랑 */}
      <button onClick={나는코드들을지배할수있다} value={1}>1</button>
      <button onClick={나는코드들을지배할수있다} value={2}>2</button>
      <button onClick={나는코드들을지배할수있다} value={3}>3</button>
      <button onClick={나는코드들을지배할수있다} value={4}>4</button>
      <button onClick={나는코드들을지배할수있다} value={5}>5</button>
      <button onClick={나는코드들을지배할수있다} value={6}>6</button>
      <button onClick={나는코드들을지배할수있다} value={7}>7</button>
      <button onClick={나는코드들을지배할수있다} value={8}>8</button>
      <button onClick={나는코드들을지배할수있다} value={9}>9</button>
      <button onClick={나는코드들을지배할수있다} value={0}>0</button>
      <button onClick={operatorClickHandler} value={'+'}>+</button>
      {/* 저 밸류에 있는 값들을 그냥 더하면 되는거 아니야?? 어떻게 더하지 useStata1() + useStata2() 맞아*/}
      {/* 이러면 두개 만들어야해서 더 복잡해지나?? */}
      {/* 저렇게 아닐까 내 */}
      {/* 숫자를 내가 누르고싶은만큼 누르고 그 값에 연산자를 추가하고 다시한번 원하는 값을 만들어 */}
      <button onClick={operatorClickHandler} value='-'>-</button>
      <button onClick={operatorClickHandler} value='/'>/</button>
      <button onClick={operatorClickHandler} value='*'>*</button>
      <button onClick={equalClickHandler} value='='>=</button>
      <button onClick={clearClickHandler} value='C'>C</button>
      {/* 지금은 눌러도 아무반응이 없다 저거 버ㅈ은 "이걸로 텍스트처리 안해도 대?" 텍스트로 쓰는건 태그의 속성으로 쓸때만 그렇구나 */}
    </>
  )
}

export default App
