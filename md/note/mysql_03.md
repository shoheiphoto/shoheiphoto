# MySQLの基本構文 03

## いろいろな条件で抽出・表示
検索系SQL
```
SELECT フィールド名,フィールド名,・・・FROM <テーブル名>;
```

エイリアスを使う（別名をつける）
```
select フィールド名 as 売上, フィールド名 as 社員番号 from <テーブル名>;
```

* 特定の列を取り出すことを「射影」という。

計算したり文字列を処理したりして表示する
```
SELECT uria * 10000 AS 売上 FROM tb;
```

* AS <エイリアス>はつけておこう。これがないとプログラムで取得できないらしい。

関数を使って計算する（AVG, SUM, COUNT）
平均値
```
SELECT AVG(uria) AS 売上 FROM tb;
```
合計
```
SELECT SUM(uria) FROM tb;
```

NULLでないものの件数
```
SELECT COUNT(*) AS 件数 FROM tb;
```

最小値
```
SELECT MIN(uria) FROM tb;
```

最大値
```
SELECT MAX(uria) FROM tb;
```

文字列を結合する
```
SELECT CONCAT(a,b,c) AS zenbu from tb;
```

部分取り出し
```
SUBSTRING (フィールド名, 先頭桁, 桁数)
```
2桁目から3桁分を取り出す
```
SUBSTRING (bang, 2, 3)
```

現在の日時を表示する項目にするNOW()
```
INSERT INTO ima(b)  VALUES(NOW());
```
としておくと、SELECTで取得した際に2021-01-20 09:42:21 というデータになる。

必要な数だけデータを取得
LIMIT データの件数;
なお、「○個目から×個目までを表示」という表示方法は、「OFFSET」で行う。
「OFFSET」は先頭から指定した数個進めた位置から取り出すという意味になる。
4件スキップして（5件目から）3件取り出す
```
select * from tb limit 3 offset 4;
```

### 条件をつけてデータを取得
WHERE 条件文（比較演算子やIN、BETWEEN）

比較演算子
* <>はノットイコール。

* IN
  month IN(aaa,bbb)  //aaaかbbbと等しいものを選択。　　
    month = 5 OR month =6  //上と同意。
* NOT IN
  month NOT IN(aaa,bbb)  //aaaでもbbbでもない。　　
    NOT(month = 5 OR month =6)  //上と同意。

* BETWEEN a AND b　　
aからbの間。
```
SELECT * FROM table WHERE uriage BETWEEN 50 AND 100;
```

条件文はORよりANDが優先される。　　
ORを優先させたい場合は、　　
(条件1 OR 条件2) AND 条件3 のようにパーレンを使う。


文字列のあいまい検索（LIKEと%を使う）
nameのどこかに福井が入る人
```
SELECT * FROM table WHERE name LIKE '%福井%';
```

nameのどこかに福井が入らない人
```
SELECT * FROM table WHERE name NOT LIKE '%福井%';
```


条件によって値を変えて表示する
プログラムのほうで記述するほうが良い部分なので説明は省略するとのこと。


### 並べ替え（ASC、DESC）
```
SELECT * FROM tb ORDER BY uria;
```
何も指定しないときは昇順になる。


### グループ化
GROUP BY フィールド名, フィールド名,・・・
```
SELECT bang,SUM(uria) AS うりあげ 
FROM tb GROUP BY bang 
ORDER BY SUM(uria) DESC;
```

GROUP BYを使うときにSELECTで指定できる項目
  - GROUP BYで指定したフィールド
  - 関数
のみ記述可。
numberとnameのセットを取り出したい場合は、
1. SELECTにもGROUP BYにも両方記述する。しかしこれはあまりスマートではないらしいので、  
2. SELECTでMIN(name)と関数として取り出す。  
と記述する方法も覚えておく。

### グループ化してから抽出（HAVING）
```
SELECT bang, SUM(uria) FROM tb 
GROUP BY bang 
HAVING SUM(uria)>=200;
```

### 抽出してからグループ化
```
SELECT bang, AVG(uria) FROM tb 
WHERE uria>=50 
GROUP BY bang;
```



### データを編集する
フィールドのすべての値を変更する
UPDATE テーブル名 
SET フィールド名 = '〇〇', フィールド名 = '〇〇';
```
UPDATE tb SET bikou = '特記なし';
```

行削除
DELETE FROM テーブル名 WHERE 条件;


#### 演習
```
CREATE DATABASE syain;
USE syain;
CREATE TABLE tb(
    bang VARCHAR(10)
  , uria INT
  , tuki INT
);
INSERT INTO tb 
VALUES('A103', 101, 4);

SELECT * FROM tb;
```


複数のテーブルを利用する  
構造が同じであれば、テーブルを組み合わせて取り出せる。
```
SELECT * FROM tb1 
UNION SELECT * FROM tb2;
```


別のテーブルのデータも使って処理する  
JOINとINNER JOIN、どちらでも同じ結果になるよ。
```
SELECT フィールド名, フィールド名 
FROM テーブル名1 
INNER JOIN テーブル名2 
ON 関係を持たせる条件;
```

```
SELECT *
FROM tb
INNER JOIN tb1
ON tb.bang=tb1.bang;
```

```
Column 'aaa' in field list is ambiguous
``` 
というエラーメッセージがでる場合。  
aaaというフィールドが重複してますよ！というエラーなので、どちらのテーブルのものなのか明示してあげる。  
例）
```
select tb.bang,name from tb 
inner join tb1 on tb.bang=tb1.bang;
```

【検索系SQLまとめ】  
SELECT フィールド名, フィールド名 AS 別名  
  FROM テーブル名  
  INNER JOIN  
  WHERE 条件文  
  GROUP BY フィールド名, フィールド名  
  HAVING 条件（集約結果をさらに選択する）  
  ORDER BY フィールド名, フィールド名



---
update:2021/01/21