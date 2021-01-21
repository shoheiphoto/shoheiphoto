# マークダウン方式

## よく使う記述


### 見出し
1個から6個シャープで見出しを記述する。
```
#### 見出し4
```
#### 見出し4


```
###### 見出し6
```
###### 見出し6

---

### 箇条書き
```
* 1
* 2
* 3
```
* 1
* 2
* 3

```
- 1
  - 1_1
- 2
```
- 1
  - 1_1
- 2

```
1. 番号付き
1. 番号付き
```
1. 番号付き
1. 番号付き

---

### 引用
```
> こんにちは！
>
> Hello!
>> こんにちは！
>> Hello!
```
> こんにちは！
>
> Hello!
>> こんにちは！
>> Hello!

---

### code記法
```
これは `gem install hoge` です
```
これは `gem install hoge` です

---

### 強調
強調（斜体）
```
- normal *italic* normal
- normal _italic_ normal
```
- normal *italic* normal
- normal _italic_ normal


強調（太字）
```
- normal **bold** normal
- normal __bold__ normal
```
- normal **bold** normal
- normal __bold__ normal


強調（太字かつ斜体）
```
- normal ***bold*** normal
- normal ___bold___ normal
```
- normal ***bold*** normal
- normal ___bold___ normal


### 水平線
アンダースコア、アスタリスク、ハイフンなどを3つ以上連続して記述することで水平線を表示します。

```
***
```

***

```
___
```

___


```
---
```

---



---

### リンク先
```
[Google先生](https://www.google.co.jp/)
```
[Google先生](https://www.google.co.jp/)

___


## GitHub Flavored Markdown(GFM)
GitHub Flavored Markdown(GFM)はGitHubの独自仕様を加えたMarkdown記法。

### GFM:リンクテキスト簡易記法
URLは記述するだけで自動的にリンクになります。
```
https://www.google.co.jp/
```
https://www.google.co.jp/


### GFM:pre記法(バッククォート×3, シンタックスハイライト))

```
　class Hoge
　  def hoge
　    print 'hoge'
　  end
　end
```

```bash
git checkout -b develop
git checkout -b feature-lesson_02
```

~~~ruby
class Hoge
  def hoge
    print 'hoge'
  end
end
~~~


### GFM:取り消し線
```
~~なんてこった~~
```
~~なんてこった~~


### GFM:表組み
```
|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|
```
|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

