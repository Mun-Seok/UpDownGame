let computerNumber = 0; //랜덤 숫자 저장할 변수 선언
let playButton = document.getElementById('playButton');
let userInput = document.querySelector('#userInput');
let resultArea = document.getElementById('resultArea');
let resetButton = document.querySelector('#resetButton');
let chanceArea = document.getElementById('chanceArea');
let chances = 7;
let gameOver = false;
let userValueList = [];

playButton.addEventListener('click', play);
/* addEventListener('이벤트의 이름',이벤트 발생시 실행시킬 함수의 이름) */
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
    userInput.value = '';
}); //함수가 복잡하지 않고 다른 곳에서 사용되지 않을 때 익명의 함수 선언으로 메모리 차지하지 않아 좋음

function pickRandomNumber() {
    //랜덤 숫자뽑기할 함수0
    computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log(computerNumber);
}

function play() {
    const USER_VALUE = userInput.value; //userInput의 value를 저장
    if (USER_VALUE < 1 || USER_VALUE > 100) {
        resultArea.textContent = '1부터 100사이의 숫자';
        return; //반환값 설정 이외에도 종료시키는 기능을 함
    }
    if (userValueList.includes(USER_VALUE)) {
        resultArea.textContent = '중복된 숫자';
        return;
    }
    userValueList.push(USER_VALUE);
    if (USER_VALUE < computerNumber) {
        resultArea.textContent = 'UP!!'; //textContent 내용 저장
    } else if (USER_VALUE > computerNumber) {
        resultArea.textContent = 'DOWN!!';
    } else {
        resultArea.textContent = '정답!!';
        gameOver = true;
    }

    chances--;
    chanceArea.innerHTML = `Chance: ${chances}`; // ` 백틱 사용하면 띄워쓰기 생각하기 쉬움
    console.log(chances);
    if (chances == 0) {
        gameOver = true;
    }
    if (gameOver) {
        playButton.disabled = true;
    }
}
/*
function focusInput() {
    userInput.value = '';
}
*/
function reset() {
    pickRandomNumber();
    userInput.value = '';
    resultArea.textContent = 'UP or DOWN';
    gameOver = false;
    playButton.disabled = false;
    chances = 7;
    chanceArea.innerHTML = `Chance: ${chances}`;
    userValueList = [];
}
pickRandomNumber();

/*
1. 남은 기회를 7번이 아니라 5번으로 바꾸고싶다면?
>> chances를 바꾸고 html의 남은 찬스 횟수 바꿔줌
2. 숫자를 맞춘후로 게임을 더이상 플레이 못하게 하기위해 버튼을 disable 하는 방법
>> 정답 뒤에 gameOver=true로 바꿔준다
3. if(gameOver==true)를 (46번째줄 근처) if(gameOver)로 해도 동작?
>> true면 실행 위에 조건문에서 true가 되서 실행됨
4. computerNum를 1~10 사이의 랜덤번호를 받고싶다면?
>> random*10으로 바꿔준다.
5. input창에 포커스를 두면 내가 그전에 입력한 값이 자동으로 지워지게 한다면 어떻게 해야할까?
>>  userInput.value=''을 넣어준다.
*/
