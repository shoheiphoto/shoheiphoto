# PHPの基本構文 01

## PHPとは
インタプリタ言語。スクリプト言語。  
コンパイルが自動で行われる。

HTMLに入力フォームを作成するにはformタグが必要
```html
<form action="送信先" method="送信方法">・・・</form>
```

基本知識おさらい：クライアントからwebサーバーへリクエストを送り、レスポンスによってwebページが表示される。

```php
<?php
echo "Hello";
// echo と print はほぼ同じ
/*
コメントアウト複数行はこの書き方
*/
?>
```

## サーバとクライアントの通信
GET送信  
```php
<a href="answer.php?favorit=和食">和食の方はこちら</a>
```

```php
<form action="aaa.php" method="get">
  <input type="text" name="name">
</form>
```
`method="get"`と書かなくても、記述がないものはすべてGET送信になる。  
GET送信の書式  
http://localhost/php/0202/answer.php?favorit=和食  
?より後ろの「favorit=和食」の部分をクエリパラメータという。  

受信  
```php
<?php echo $_GET["favorit"]; ?>
```

POST送信  
```
<form action="answer.php" method="post">
  <input type="text" class="form-control" name="name">
  <input type="submit" class="btn" value="送信">
</form>
```

受信  
```php
<?php echo $_POST["name"] ?>
```


REQUEST  
送信方法がGETでもPOSTでも関係なく受け取れる。  
```php
<?php echo $_REQUEST["name"] ?>
```



## 変数名のルール
* 変数名の先頭には半角英字とアンダーバーが利用できる。  
* $userNameのようにキャメルケースで命名するようにする。

### 文字列をピリオドで結合
```php
<?php 
  $name = "abc";
  echo "こんにちは". $name. "さん";
?>
```
以下の書き方でも書けることも一応覚えておく。
```php
<?php 
  $name = "abc";
  echo "こんにちは $name さん";
  echo "こんにちは{$name}さん";
?>
```


`<?php echo` は `<?=` と省略できる。
```php
<?= $name ?>
```

## 主なデータ型
- 文字列
- 数値
- 論理値
  booleanとも呼ぶ。trueかfalse。

PHPは文字列を0として認識するらしい。  
回避の方法として、数値かどうかを調べる関数を使う（is_numeric）。以下例。
```php
if (is_numeric($_POST["value"]) == true ){
  echo "数値です";
} else {
  echo "数値ではありません";
}
```


## 比較演算子
* `==` 値が等しい
* `!=`等しくない

* `===`値も型も等しい
* `!==`等しくない


## 論理演算子
* `&&` かつ 
* `||` または


## 条件分岐
### if, elseif文
```php
<?php 
$number = $_POST["inputVal"];
if ( $number > 100 ) {
  echo "100より大きいです";
} elseif( $number == 100) {
  echo "100です";
} else {
  echo "100以下です";
} ?>
```

### switch文
```php
<?php 
$value = $_POST["inputVal"];
switch ( $value ) {
  case "A":
    echo "Aが入力されました";
    break;
  case "B":
    echo "Bが入力されました";
    break;
  case "":
    echo "何も入力されていません";
    break;
  default:
    echo "A、B以外が入力されました";
    break;
} ?>
```


## 繰り返し処理
### for文
```php
<?php
for ($i = 0; $i < 3; $i++) {
  echo $i;
} ?>
```

### while文
```php
<?php
$i = 1;
while ( $i <= 5 ) {
  echo "<tr>";
  echo "<td>". $i. "回目の繰り返し</td>";
  echo "</tr>";
  $i++;
}
?>
```
echoを使わないこんな書き方もあるよ
```php
<?php $i = 1;
while ( $i <= 5 ) {
?>
<tr><td>
<?=$i?>
回目の繰り返し
</td></tr>
<?php $i++ ;}
?>
```

わざと無限ループを発生させる場合もたまにあるらしい。その場合には処理の中にif文を書いておく。
```php
while (条件) {
  処理
  if (条件) {
    break;
  }
}
```

### 繰り返しを中断・スキップ
* 中断　`break;`
* スキップ　`continue;`
continueは使用頻度低め。


## 配列
`$numbers = [1, 2, 3, 4]`
配列に要素5を追加すると、自動的に最後に要素が追加される。
`$numbers[] = 5;`

### 配列を取り出す
* forで取り出す場合
```php
for ($i = 0; $i <5; $i++> {
  echo $numbers[i];
})
```

* foreachで取り出す場合（覚えよう！）  
配列の要素数分だけ繰り返し処理をしてくれる構文。  
$keyと$valueは任意の名前でOK。
```php
foreach ($numbers as $key => $value) {
  echo "添字". $key. "番は";
  echo $value. "です。<br>";}
```

foreachで要素だけ使う場合は、
```php
foreach ($numbers as $value) {
  echo $value. "です。<br>";}
```
と書くこともできる。

配列が空の場合はissetを使う。
```php
<?php
if (isset($_POST["skill"])) {
    $skill = $_POST["skill"];
    foreach ($skill as $value) {
        echo $value. "<br>";
    }
} else {
  echo "ありません。";
} ?>
```

