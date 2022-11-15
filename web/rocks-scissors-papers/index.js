// 코드를 작성해 주세요

const player1_img = document.querySelector('#player1-img')
const player2_img = document.querySelector('#player2-img')
let player1_num = 0
let player2_num = 0

// 모달 닫기
const modal = document.querySelector('.modal')
modal.addEventListener('click', function(evnet) {
  modal.style.display = "none"
})

// 버튼 활성화
const scissors_btn = document.querySelector('#scissors-button')
scissors_btn.addEventListener('click', function (event) {
  player1_img.setAttribute('src', "./img/scissors.png")
  player1_num = 0
  change()
})
const rock_btn = document.querySelector('#rock-button')
rock_btn.addEventListener('click', function (event) {
  player1_img.setAttribute('src', "./img/rock.png")
  player1_num = 1
  change()
})
const paper_btn = document.querySelector('#paper-button')
paper_btn.addEventListener('click', function (event) {
  player1_img.setAttribute('src', "./img/paper.png")
  player1_num = 2
  change()
})

// computer random 확정
function activate() {
  const img_urls = [ "./img/scissors.png", "./img/rock.png", "./img/paper.png" ]
  const imgNum = Math.round(Math.random() * 2)
  player2_img.src = img_urls[imgNum]
  return imgNum
}

// 이미지 변경용 로테이션 플러스
function plus(img_Num) {
  if (img_Num === 2) {
    img_Num = 0
  } else {
    img_Num += 1
  }
  return img_Num
}

// 메인 로직
// 버튼이 눌리면, 이미지가 3초간 변경되고, 이후에 확정 및 카운트
function change() {
  let img_Num = 0
  let changeImg = setInterval(() => {
    const img_urls = [ "./img/scissors.png", "./img/rock.png", "./img/paper.png" ]
    img_Num = plus(img_Num)
    player2_img.src = img_urls[img_Num]
  }, 100);
  setTimeout(() => {
    clearTimeout(changeImg)
    player2_num = activate()
    count()
  }, 3000)
}

// 0 가위 1 바위 2 보
function count() {
  console.log(player1_num, player2_num)
  const countA = document.querySelector('.countA')
  const countB = document.querySelector('.countB')
  const modalContent = document.querySelector('.modal-content')
  if (player1_num === player2_num) {
    // alert('비겼습니다.')
    modalContent.innerText = '비겼습니다.'
  } else if (player1_num === 0) {
    if (player2_num === 1) {
      // alert('Player2 승리!')
      countB.innerText++
      modalContent.innerText = 'Player2 승리!'
    } else if (player2_num === 2) {
      // alert('Player1 승리!')
      countA.innerText++
      modalContent.innerText = 'Player1 승리!'
    }
  } else if (player1_num === 1) {
    if (player2_num === 2) {
      // alert('Player2 승리!')
      countB.innerText++
      modalContent.innerText = 'Player2 승리!'
    } else if (player2_num === 0) {
      // alert('Player1 승리!')
      countA.innerText++
      modalContent.innerText = 'Player1 승리!'
    }
  } else if (player1_num === 2) {
    if (player2_num === 0) {
      // alert('Player2 승리!')
      countB.innerText++
      modalContent.innerText = 'Player2 승리!'
    } else if (player2_num === 1) {
      // alert('Player1 승리!')
      countA.innerText++
      modalContent.innerText = 'Player1 승리!'
    }
  }
  modal.style.display = "block"
}