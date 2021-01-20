# マークダウン方式

## よく使う記述


### 見出し
1個から6個シャープで見出しを記述する。
#### 見出し4
###### 見出し6


### 箇条書き
* 1
* 2
* 3

- 1
  - 1_1
- 2

1. 番号付き
1. 番号付き


### 引用
> こんにちは！
>
> Hello!
>> こんにちは！
>> Hello!


### code記法
インストールコマンドは `gem install hoge` です


### 強調
アスタリスクもしくはアンダースコア1個で文字列を囲むことで強調します。見た目は斜体になります。
- normal *italic* normal
- normal _italic_ normal

アスタリスクもしくはアンダースコア2個で文字列を囲むことで強調にします。見た目は太字になります。
- normal **bold** normal
- normal __bold__ normal

アスタリスクもしくはアンダースコア3個で文字列を囲むことで em と strong による強調を両方適用します。見た目は斜体かつ太字になります。
- normal ***bold*** normal
- normal ___bold___ normal


### 水平線
アンダースコア、アスタリスク、ハイフンなどを3つ以上連続して記述することで水平線を表示します。
***
___

---

*    *    *


### リンク先
[Google先生](https://www.google.co.jp/)

___


## GitHub Flavored Markdown(GFM)
GitHub Flavored Markdown(GFM)はGitHubの独自仕様を加えたMarkdown記法。

### GFM:リンクテキスト簡易記法
URLは記述するだけで自動的にリンクになります。
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
~~なんてこった~~


### GFM:表組み
|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

