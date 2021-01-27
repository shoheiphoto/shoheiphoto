# PHPの基本構文 02

## 配列（続き）
### 連想配列
文字列を添え字にした配列を連想配列と呼ぶ。  
```php
<?php
$product = [ "name" => "スマートフォン", "price" => 35000, "description" => "最新機種です" ];

foreach ($product as $key => $value) {
    echo $key. ":". $value. "<br>";
} ?>
```  

連想配列に追加する場合の記述
```php
<?php
$product["stock"] = 250;
?>
```


## 関数

- 関数を呼び出し、変数に戻り値を代入する記述  
`$変数 = 関数名（引数1, 引数2）`  

### 戻り値を返す関数

|関数名|内容|記述例|戻り値|
|:---|:---|:---|:---|
|max|大きい数値を決める関数|max(10, 5)|10|
|round|四捨五入する関数|round(5.6)|6|
|floor|小数点を切り捨てる関数|floor(1.78)|1|
|rand|引数1～引数2までの間でランダムな整数を返す関数|rand(3,8)|3～8のいずれか|  

引数には変数名やりてラスのいずれも指定可。  
（リテラル…ソースコード中で使用される、数値や文字列等の直に示したデータのこと。）  


### 引数を指定しても戻り値として値を返さない関数  

|関数名|内容|記述例|
|:---|:---|:---|
|header|指定したURLへリダイレクト（強制的に他のページに飛ばす）させる関数|header("Location: http://www.google.co.jp" );|
|require_once|引数に指定したファイルを読み込む関数|require_once("target.html");|  


### HTMLタグを通常の文字列として扱う関数
```php
<?php 
echo htmlspecialchars( "<h3>タグを表示！</h3>", ENT_QUOTES )
; ?>
```  

|関数名|内容|記述例|
|:---|:---|:---|
|mb_strlen()|文字列の長さを戻り値として返す関数|mb_strlen(&test);|
|mb_substr()|指定した文字列から任意の文字列を抜き出す関数|mb_strlen($test, 0, 3);|  
|str_replace()|検索文字列に一致したすべての文字列を置換する|str_replace("Java", "PHP", "Hello Java World");|

* mb_はマルチバイトの略、日本語の場合は必要。  


### 関数を作成する

* 基本文法
function 関数名(仮引数名1, 仮引数名2...) {
  関数の処理
  return 戻り値;  //戻り値がある場合のみ
}  

```php
<?php
function calc($base, $height) {
        return $base * $height / 2;
} ?>
```

関数は呼び出しの後ろに書いても動く。  


## セッション

クライアントからのリクエストとwebサーバからのレスポンスのやり取りをセッションという。  
このやり取りを維持しないものが__ステートレス__。クライアントを判別できない。  
クライアントの状態を維持する（webサーバに預けたデータを再利用する）のが__ステートフル__。 

最初にクライアントからwebサーバにリクエストがいくと、webサーバはセッションIDと呼ばれる、クライアントを識別できる情報をクライアントに対して発行する。  
webブラウザにはクッキーと呼ばれる、webサーバから与えられた情報などを保存できる機能がある。  

### セッション管理を開始  
<!DOCTYPE html>の前に、セッションを開始するプログラムを記述  
```php
<?php session_start(); ?>
```

```php
<?php 
if ( isset($_SESSION["count"]) ) {
  ++$_SESSION["count"];  // 2回目以降に格納する
} else {
  $_SESSION["count"] = 1;  // 初めてセッションに格納する
}
echo $_SESSION["count"]. "回目のページ表示です。";
?>
```

elseを使わない書き方
```php
<?php 
$count = 0;
if ( isset($_SESSION["count"]) ) {
  $count = $_SESSION["count"];
} 
$count++;
$_SESSION["count"] = $count;
echo $_SESSION["count"]. "回目のページ表示です。";
?>
```

### セッションに登録する

* `<input type="hidden">`
ブラウザ上に表示されない非表示データを送信することができる。  

テキストp.208  
```html
<form action="cart_comp.php" method="post">
  <input type="hidden" value="0" name="id" />
  <input class="btn" type="submit" value="カートに追加"  />
</form>
```


```php
<?php
if (isset($_SESSION["cart"]) && isset($_POST["id"])) {
  $_SESSION["cart"][] = $_POST["id"];
} elseif(isset( $_POST["id"])) {
  $_SESSION["cart"] = [ $_POST["id"] ];
} ?>
```

上のコードをわかりやすく書き換える  

```php
<?php
if (isset($_POST["id"])) {  // 「カートに追加」ボタンからリクエストされたことを判断
  $id = $_POST["id"];  // クライアントからidを取得
  if (isset($_SESSION["cart"])) {
    $cart = $_SESSION["cart"];  // カートがセッションに存在すればカートを取り出す
  } else {
    $cart = array();  // カートがセッションに存在しなければ空のカートを作成する
  }
  $cart[] = $id;  // カートにidを追加する
  $_SESSION["cart"] = $cart;  // カートをセッションに格納する
} ?>
```


* var_dump  指定した式に関してその型や値を含む構造化された情報を返す。  
```php
<?php
var_dump($_SESSION);
?>
```

* empty()  
  変数や配列の中身が空であるかどうかをチェックする関数。戻り値はtrueかfalse。  
  !empty() とすれば、空でない場合をチェックできる。  


### セッションから削除する
unset(削除したい要素);  
unset(削除したい配列名[添え字]);  

```php
if (isset($_SESSION["cart"]) && isset($_POST["deleteIndex"])) {
			unset($_SESSION["cart"][$_POST["deleteIndex"]]);
		}
```

上のコードをわかりやすく書き換える  

```php
if (isset($_POST["deleteIndex"])) {
  $cart = $_SESSION["cart"];
  $index = $_POST["deleteIndex"];
  unset($cart[$index]);
  $_SESSION["cart"] = $cart;
}
```




---
[HOMEへ戻る](../index.md)  

---
update:2021/01/27