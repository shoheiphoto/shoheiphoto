# MySQLの基本構文 01

* すでに登録されているデータベースを確認するためには、下記のコマンドを入力。
`show databases;`

* 現在使用しているデータベースの名前を確認。
`select database();`

* 確認して表示が出たら、使用するデータベースを変更する。使用するデータベースはuseコマンドを利用することで変更できる。  
  useはSQLではないので最後のセミコロン不要。
`use mysql`

* 選択しているデータベース内のテーブルの表示。
`show tables;`

* データベースの作成（試しにmemberというデータベースを作成）
`create database member;`

* データベースの削除
`drop database member;`
`drop database <テーブル名> if exists <テーブル名>;`


* テーブルの作成（テーブルの名前およびテーブル内のフィールドの名前とデータの型を指定する。charset=utf8はなくてもよい。
  - varcharではなくcharを使用すると文字数を固定してしまうため、varcharを使おう。
`create table <テーブル名>(<フィールド名>　<型>(<桁数>), <フィールド名>　<型>(<桁数>)) charset=utf8`
`create table tb1(number varchar(10), name varchar(10), age int) charset=utf8;`

* テーブルができたかを確認する。`show tables;`
* テーブル内のデータ構造を確認する。`desc tb1;`

* テキストファイルにテーブル作成などのコマンドを書いておいて、`source `と入力後にテキストファイルをドラッグでも作成できる。

* データ1件追加
`insert into <テーブル名>(<フィールド名1>,<フィールド名2>) values('aaa','bbb')`
  数値は''で囲まなくてよい。
  valuesに全項目記入している場合は、テーブル名の後ろのフィールド名は省略できる。  
  ※日本語を入力する前には`SET NAMES cp932;`を入力する。
  例）`INSERT INTO tb1 VALUES('A101', '佐藤', 40);`

* テーブル内の情報をすべてを表示。
`SELECT * FROM tb1;`

* テーブル削除
`drop table tb1A;`
`drop table <テーブル名> if exists <テーブル名>;`


* 表示方法がかわる
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