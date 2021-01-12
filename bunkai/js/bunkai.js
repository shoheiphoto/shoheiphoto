
function koshin(){
    location.reload();
  }


let num = Math.round(Math.random() * 1000) ;
document.write('数値は<strong>' + num + '</strong>です。')


function pf(n) {
    let result = [];
    if (n === 1) {
        return [1];
    }
    let init = 2;
    while ( n !== 1 ) {
        let i = init;
        while (i < Number.MAX_SAFE_INTEGER) {
            if (n % i == 0) {
                result.push(i)
                n /= i;
                break;
            }
            i++;
        }
        init = i;
    }
    return result;
}


let amari = num % 2;

if(amari == 0) {
    document.write('偶数です。<br>');
} else {
    document.write('奇数です。<br>');
}

if(num === 2) {
    document.write('<h2>2です素数です！</h2>');
} else {
    for(i = 2; i < num; i++) {

        //2以上の数で割ったとき余りが0になれば false を返す。つまり素数ではない。
        if(num % i === 0) {
            document.write('<p>素数ではありません。</p>');
            document.write( '<p>以下、素因数分解してみよう。</p>' );
                for(let i = 0; i < pf(num).length; i++){
                    document.write(pf(num)[i]);
                    if(i != (pf(num).length-1)){
                        document.write(' × ');
                    }
                }
            document.write('となりますね。');
            break;
        }

        //ループが最後まで行く、つまり割れる数がなかったら true を返す。つまり素数。
        else if(i + 1 === num) {
            document.write('<h2>素数ですよ！わん！</h2>');
        }
    }
    }
