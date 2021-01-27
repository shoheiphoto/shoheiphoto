# MySQLの基本構文 02

## テーブルを改造する

テーブルのフィールドの構造を変更するコマンド（基本的にシステム運用管理者が行う）  
`ALTER TABLE`コマンド  

* フィールドの定義を変更
```sql
ALTER TABLE ・・・ MODIFY ・・・
```

* VARCHARを10から100に変更。
```sql
ALTER TABLE tb1c MODIFY name VARCHAR(100);
```

* umareの順番を変更。
```sql
ALTER TABLE tb1C MODIFY umare DATETIME FIRST;
```

* フィールドを追加
```sql
ALTER TABLE ・・・ ADD ・・・
```

* 生年月日を追加
```sql
ALTER TABLE tb1c ADD birthday DATETIME;
```

* 生年月日を先頭に追加
```sql
ALTER TABLE tb1C ADD birthday DATETIME FIRST;
```

* フィールドの名前と定義を変更
```sql
alter table ・・・ change ・・・
```
```sql
ALTER TABLE tb1C CHANGE umare birth DATE;
```

* フィールドを削除するとき
```sql
ALTER TABLE ・・・ DROP ・・・
```
```sql
ALTER TABLE tb1C DROP birth;
```

---


### 主キーを設定
* 主キーとなる項目を一つだけ設定
```sql
CREATE TABLE テーブル名 (
  フィールド名 型(桁数) PRIMARY KEY
  ,フィールド名 型(桁数)
  ,フィールド名 型(桁数)
)
```

* 主キーとなる項目を1～複数設定（こっちのほうがよく使う？）
```sql
CREATE TABLE テーブル名 (
  フィールド名 型(桁数)
  ,フィールド名 型(桁数)
  ,フィールド名 型(桁数)
  ,PRIMARY KEY(フィールド名,フィールド名,フィールド名)
)
```

* 一意キー（ユニークキー unique）の設定
```sql
CREATE TABLE uniuni(
    a INT UNIQUE  //ユニークキーを設定
  , b VARCHAR(10)
);
```

```sql
DESC uniuni;
```

```sql
INSERT INTO uniuni(a) VALUES(NULL);
```


```sql
SELECT * FROM uniuni;
```


* 自動的に連続番号が入力されるフィールドの設定
1：データ型は「 INT 」などの整数型
2：`AUTO_INCREMENT`を付ける
3：`PRIMARY KEY`などを設定して一意にする

```sql
CREATE TABLE テーブル名(フィールド名 型 AUTO_INCREMENT PRIMARY KEY, フィールド名 型)
```

```sql
CREATE TABLE renzoku(a INT AUTO_INCREMENT PRIMARY KEY, b VARCHAR(10))
```
フィールドaは自動で記載されるので、bだけを指定して追加していく。  
行を削除するとその番号は空き番号のまま。行を追加してもその番号は割り振られない。


* 連続番号の初期値の指定
連続番号のフィールドには自由に値が設定できます。すでに設定されている値の最大値＋１の値から番号が振られることになります。ただし、「primary key」（主キー）の属性が設定されているので、すでに存在する値を重複して入れることはできません。 すでに、登録されているデータを削除して、レコードを追加すると、レコードがなくても登録された最大の値＋１から始まります。この番号を変更したい場合は、下記のように「 auto_increment=0 」を設定します。ただし、すでに登録されている番号より大きい番号を設定する必要があります。

```sql
ALTER TABLE renzoku AUTO_INCREMENT = 0;
```


* 行の削除
```sql
DELETE FROM テーブル名 WHERE 条件;
```
例）numberがA102の行を削除
```sql
DELETE FROM tb1 WHERE number='A102';
```


* フィールドの初期値（デフォルト）を設定する
フィールドにdefaultキーワードを付ける。
新規の場合
```sql
CREATE TABLE テーブル名( フィールド名 型 DEFAULT '〇〇', フィールド名 型)
```

 NULLを許さない場合
```sql
CREATE TABLE テーブル名( フィールド名 型 NOT NULL, フィールド名 型)
```

変更する場合
```sql
ALTER TABLE tb1 MODIFY nama VARCHAR(10) DEFAULT '氏名未入力'
```


* インデックスを設定
テキストを読んで自習でまとめておく。

* テーブルのフィールド構造＋データのコピー
```sql
CREATE TABLE tb1h SELECT * FROM tb1;
```

* テーブルのフィールド構造だけをコピーする
```sql
CREATE TABLE <新テーブル名> LIKE <コピー元テーブル名>;
```

```sql
CREATE TABLE tb1r LIKE tb1;
```

* ほかのテーブルのレコードをコピー（構造は作成済みで中身をコピーしたい場合）
  ※上書きではなく追加である点に注意
```sql
INSERT INTO tb1r SELECT * FROM tb1;
```

* 特定のフィールドを選択してコピーする
```sql
INSERT INTO tb1s(name) SELECT number FROM tb1;
```



---
[HOMEへ戻る](../index.md)  

---
update:2021/01/22