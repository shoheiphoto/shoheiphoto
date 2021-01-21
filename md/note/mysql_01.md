# MySQLの基本構文 01

## ログイン、データベース作成

* ログインコマンド（-u:ユーザー指定、-p:パスワード）
```sql
mysql -u root -p
```

* すでに登録されているデータベースを確認する。
```sql
SHOW DATABASES;
```

* 現在使用しているデータベース名を確認。
```sql
SELECT DATABASE();
```

* 対象データベースに移動。useはSQLではないので最後のセミコロンは不要。
```sql
USE mysql
```

* 選択しているデータベース内のテーブルの表示。
```sql
SHOW TABLES;
```

* データベースの作成（試しにmemberというデータベースを作成）
```sql
CREATE DATABASE member;
```

* データベースの削除
```sql
DROP DATABASE member;
```
```sql
DROP DATABASE テーブル名 
IF EXISTS テーブル名;
```

---


## テーブル作成、確認

* テーブルの作成（テーブルの名前およびテーブル内のフィールドの名前とデータの型を指定する。CHARSET=UTF8はなくてもよい。
  - VARCHARではなくcharを使用すると文字数を固定してしまうため、VARCHARを使おう。
```sql
CREATE TABLE テーブル名(
  フィールド名　型(桁数), 
  フィールド名　型(桁数)
  ) CHARSET=UTF8;
```
```sql
CREATE TABLE tb1(
  number VARCHAR(10), 
  name VARCHAR(10), 
  age INT) CHARSET=UTF8;
```

* テーブルができたかを確認する。
```sql
SHOW TABLES;
```

* テーブル内のテーブルの型、フィールド項目、名前を確認する。
```sql
DESC テーブル名;
```

* テキストファイルにテーブル作成などのコマンドを書いておいて、
```sql
SOURCE 
```
と入力後にテキストファイルをドラッグでも作成できる。

* データ1件追加
```sql
INSERT INTO テーブル名(
  フィールド名1,
  フィールド名2
  ) VALUES('aaa','bbb')
```
数値は''で囲まなくてよい。  
valuesに全項目記入している場合は、テーブル名の後ろのフィールド名は省略できる。  
例）
```sql
INSERT INTO tb1 VALUES(
  'A101', '佐藤', 40);
```

※日本語を入力する前には
```sql
SET NAMES cp932;
```
を入力する。  

* テーブル内の情報をすべてを表示。
```sql
SELECT * FROM tb1;
```

* テーブル削除。
```sql
DROP TABLE tb1A;
```
```sql
DROP TABLE テーブル名 IF EXISTS テーブル名;
```

* 表示形式がかわる。
```sql
SELECT * FROM テーブル名;
```
↓
```
SELECT * FROM テーブル名\G
```

* テーブル内のデータの削除して確認（テーブルの器は残る）
```sql
DELETE FROM テーブル名;
SELECT * FROM テーブル名;
```

---


## 【データ型の種類について】よく使うものを抜粋
* 符号付き整数
  * INT型（だいたい-21億前後～21億前後）
* 符号なし整数(正の整数のみ、あまり使わない)
* 実数　めちゃでかいorめちゃ小さい数値
  * DOUBLE型（浮動小数点数）、近似値。
  * DECIMAL型（固定小数点数）DECIMAL(m,d)←mに全体の桁数、dに少数以下の桁数。電卓と同様の数値が得られる。
* 日付/時刻
  * DATE型（日付（年月日）のみ）
  * DATETIME型（日時（年月日と時分秒））
  * TIME型（時刻（時分秒）のみ）
* 文字列
  * CHAR型（固定長文字列　1～255文字）
  * VARCHAR型（可変長文字列　1～255文字）
