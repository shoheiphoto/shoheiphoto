# MySQL

* 文字列を結合する  
`SELECT CONCAT(a,b,c) AS zenbu from tb;`  

* 部分取り出し  
`SUBSTRING (フィールド名, 先頭桁, 桁数)`  
`SUBSTRING (bang, 2, 3)`  //2桁目から3桁分を取り出す  

* 現在の日時を表示する項目にするNOW()  
`INSERT INTO ima(b)  VALUES(NOW());`  
 としておくと、SELECTで取得した際に2021-01-20 09:42:21 というデータになる。  

* 必要な数だけデータを取得  
LIMIT データの件数;  
なお、「○個目から×個目までを表示」という表示方法は、「OFFSET」で行う。「OFFSET」は先頭から指
定した数個進めた位置から取り出すという意味になる。  
`select * from tb limit 3 offset 4;`  //4件スキップして（5件目から）3件取り出す  

20210120