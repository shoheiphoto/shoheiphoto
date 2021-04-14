// マウスストーカー要素
var mouseStalker

// マウスストーカー要素の位置
var stalker = {
  x: 0,
  y: 0
}

// マウスの位置
var mouse = {
  x: 0,
  y: 0
}

// 読み込み後に初期化をするためのハンドラ
document.addEventListener('DOMContentLoaded', setup)

// マウスの動きを監視
document.addEventListener('mousemove', mousemove)

// 初期化処理
function setup() {
  // マウスストーカー要素を取得
  mouseStalker = document.querySelector('.mouse-stalker')

  // 更新処理を開始
  update()
}

// マウスが動くたびにマウスの位置を保持しておく
function mousemove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

// 更新処理
function update() {
  // マウスストーカー要素の位置を更新
  stalker.x += (mouse.x - stalker.x) * 0.2
  stalker.y += (mouse.y - stalker.y) * 0.2

  // マウスストーカーの位置を小数点第一位まで四捨五入
  var x = Math.round(stalker.x * 10) / 10
  var y = Math.round(stalker.y * 10) / 10

  // マウスストーカー要素のスタイルを更新
  mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)'

  // ループ
  requestAnimationFrame(update)
}

