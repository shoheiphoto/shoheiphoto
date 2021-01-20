---
title: トップページ
---

## 日報　2021/1/19（火）しょへ

メモ
0.1を2進数で表すのはとても難しい。

表示方法がかわる
`select * from table;` → `select * from table\G`

* テーブル内のデータの削除して確認（テーブルの器は残る）
 `delete from <table名>;`
 `select * from <table名>;`

### 【データ型の種類について】よく使うものを抜粋
* 符号付き整数
  * int型（だいたい-21億前後～21億前後）
* 符号なし整数(正の整数のみ、あまり使わない)
* 実数　めちゃでかいorめちゃ小さい数値
  * double型（浮動小数点数）、近似値。
  * decimal型（固定小数点数）decimal(m,d)←mに全体の桁数、dに少数以下の桁数。電卓と同様の数値が得られる。
* 日付/時刻
  * date型（日付（年月日）のみ）
  * datetime型（日時（年月日と時分秒））
  * time型（時刻（時分秒）のみ）
* 文字列
  * char型（固定長文字列　1～255文字）
  * varchar型（可変長文字列　1～255文字）


### テーブルを改造する
テーブルのフィールドの構造を変更するコマンド（基本的にシステム運用管理者が行う）
__`alter table`コマンド__
* フィールドの定義を変更 `alter table ・・・ modify ・・・`
  `alter table tb1c modify name varchar(100);`  //varcharを10から100に変更。
  `ALTER TABLE tb1C MODIFY umare DATETIME FIRST;`  //umareの順番を変更。

* フィールドを追加 `alter table ・・・ add ・・・`
  `ALTER TABLE tb1c ADD birthday DATETIME;`  //生年月日を追加
  `ALTER TABLE tb1C ADD birthday DATETIME FIRST;`  //生年月日を先頭に追加

* フィールドの名前と定義を変更 `alter table ・・・ change ・・・`
  `ALTER TABLE tb1C CHANGE umare birth DATE;`

* フィールドを削除するとき `alter table ・・・ drop ・・・`
  `ALTER TABLE tb1C DROP birth;`


### 主キーを設定
* 主キーとなる項目を一つだけ設定
CREATE TABLE <テーブル名> (
  <フィールド名> <型>(桁数) PRIMARY KEY
  ,<フィールド名> <型>(桁数)
  ,<フィールド名> <型>(桁数)
)

* 主キーとなる項目を1～複数設定（こっちのほうがよく使う？）
CREATE TABLE <テーブル名> (
  <フィールド名> <型>(桁数)
  ,<フィールド名> <型>(桁数)
  ,<フィールド名> <型>(桁数)
  ,PRIMARY KEY(<フィールド名>,<フィールド名>,<フィールド名>)
)


* 一意キー（ユニークキー unique）の設定
```
CREATE TABLE uniuni(
    a INT UNIQUE  //ユニークキーを設定
  , b VARCHAR(10)
);
```
`DESC uniuni;`
`INSERT INTO uniuni(a) VALUES(NULL);`
`SELECT * FROM uniuni;`


* 自動的に連続番号が入力されるフィールドの設定
1：データ型は「 INT 」などの整数型
2：`AUTO_INCREMENT`を付ける
3：`PRIMARY KEY`などを設定して一意にする

`create table <テーブル名>( <フィールド名> <型> auto_increment primary key, <フィールド名> <型>)`
`create table renzoku(a int auto_increment primary key, b varchar(10))`
フィールドaは自動で記載されるので、bだけを指定して追加していく。
行を削除するとその番号は空き番号のまま。行を追加してもその番号は割り振られない。


* 連続番号の初期値の指定
連続番号のフィールドには自由に値が設定できます。すでに設定されている値の最大値＋１の値から番号が振られることになります。ただし、「primary key」（主キー）の属性が設定されているので、すでに存在する値を重複して入れることはできません。 すでに、登録されているデータを削除して、レコードを追加すると、レコードがなくても登録された最大の値＋１から始まります。この番号を変更したい場合は、下記のように「 auto_increment=0 」を設定します。ただし、すでに登録されている番号より大きい番号を設定する必要があります。
`alter table renzoku auto_increment = 0;`


* 行の削除
`delete from <テーブル名> where 条件;`
例）numberがA102の行を削除
`delete from tb1 where number='A102';`


* フィールドの初期値（デフォルト）を設定する
フィールドにdefaultキーワードを付ける。
新規の場合
  `create table <テーブル名>( <フィールド名> <型> DEFAULT '〇〇', <フィールド名> <型>)`
  NULLを許さない場合
  `create table <テーブル名>( <フィールド名> <型> NOT NULL, <フィールド名> <型>)`
変更する場合
  `alter table tb1 modify nama var char(10) default '氏名未入力'`


* インデックスを設定
テキストを読んで自習でまとめておく。

* テーブルのフィールド構造＋データのコピー
  `create table tb1h select * from tb1;`

* テーブルのフィールド構造だけをコピーする
  `create table <新テーブル名> like <コピー元テーブル名>;`
  `create table tb1r like tb1;`

* ほかのテーブルのレコードをコピー（構造は作成済みで中身をコピーしたい場合）
  ※上書きではなく追加である点に注意
  `insert into tb1r select * from tb1;`

* 特定のフィールドを選択してコピーする
  `INSERT INTO tb1s(name) SELECT number FROM tb1;`



### いろいろな条件で抽出 ・表示
検索系SQL
`SELECT <フィールド名>,<フィールド名>,・・・FROM <テーブル名>;`

* エイリアスを使う（別名をつける）
  `select <フィールド名> as 売上, <フィールド名> as 社員番号 from <テーブル名>;`

特定の列を取り出すことを「射影」という。

* 計算したり文字列を処理したりして表示する
  `SELECT uria * 10000 AS 売上 FROM tb;`
  as <エイリアス>はつけておこう。これがないとプログラムで取得できないらしい。

* 関数を使って計算する（avg, sum, count）
  `SELECT AVG(uria) AS 売上 FROM tb;`  //平均値
  `SELECT SUM(uria) FROM tb;`  //合計
  `SELECT COUNT(*) AS 件数 FROM tb;`  //NULLでないものの件数
  `SELECT MIN(uria) FROM tb;`  //最小値
  `SELECT MAX(uria) FROM tb;`  //最大値

テキストp.29まで完了


【以下自習】progate SQL学習コースI・II
#### プリン を含むデータを取得
```MySQL
SELECT *
FROM purchases
WHERE name like '%プリン%'
```
* %プリン…牛乳プリンは引っかかる
* プリン%…プリンパフェは引っかかる

#### プリン を含まないデータを取得
```MySQL
SELECT *
FROM purchases
WHERE NOT name like '%プリン%'
```

####  NULL
```
SELECT *
FROM purchases
WHERE price IS NULL;
```
逆はIS NOT NULL

条件にはANDとORが使える。
```
WHERE category = '食費'
AND character_name = 'ひつじ仙人';
```

####  並べ替え
ORDER BY 並べ替えたいカラム名 並べ方;
`ORDER BY price ASC;`
ASC(昇順)、DESC（降順）

#### 必要な数だけデータを取得
LIMIT データの件数;

#### 検索結果から重複するデータを除く
`SELECT DISTINCT(カラム名) FROM テーブル名`

#### グループ化
* `GROUP BY カラム名`
```
SELECT SUM(price), purchased_at
FROM purchases
GROUP BY purchased_at;
```

* WHEREとGROUP BY
```
SELECT 集計関数
FROM テーブル名
WHERE 条件
GROUP BY カラム名, カラム名;
```

* グループ化したデータを更に絞り込む
```
GROUP BY カラム名
HAVING 条件;
```

