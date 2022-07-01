const qalist = [
    [
        ["会場はどこですか？"],
        ["参加費などはありますか？"],
        ["いつ開催されますか？"],
        ["チーム通話は何を使うんですか？"],
        ["参加取り消しはどうすればいいんですか？"]
    ],
    [
        ["近畿大学 Eキャンパス E館1階eスポーツアリーナです。"],
        ["完全無料です！"],
        ["8月8日の月曜日です！　14時開始です！"],
        ["Discordです！"],
        ["参加フォームを編集して、「参加しますか？」の質問を「いいえ」で答えてください。"]
    ]
];

const index = [
    [
        ["#index"],
        ["#QAlist"],
        ["#formjoin"],
        ["#formquestion"],
    ],
    [
        ["目次"],
        ["Q & A"],
        ["参加フォーム"],
        ["質問フォーム"]
    ]
];

//生成テンプレート
function indextemplate(num){
    let words = '<div id = "index'+num+'" class="index whiteblock"><a class="linkwhite" href='+index[0][num]+'head>'+index[1][num]+'</a></div>';
    return words;
}
function QAindextemplate(num){
    let words = '<div id = "QAlist'+num+'" class = "QAindex whiteblock"><a class="linkwhite" href=#QA'+num+'>Q. '+qalist[0][num]+'</a></div>'
    return words;
}
function QAtemplate(num){
    let words1 = '<div id = "Q'+num+'">Q. '+qalist[0][num]+'</div>'
    ,words2 = '<div id = "A'+num+'">A. '+qalist[1][num]+'</div>'
    ,unit = '<div id = "QA'+num+'"class = "QA whiteblock">'+words1+words2+'</div>'

    return unit;
}

//生成
function createIndex(){
    document.getElementById("index").innerHTML +="<br>";
    for(let i=0;i<index[1].length;i++){
        document.getElementById("index").innerHTML += indextemplate(i);
    }
}

function createQAIndex(){
    for(let i=0;i<qalist[1].length;i++){
        document.getElementById("QAindex").innerHTML += QAindextemplate(i);
    }
}

function createQA(){
    for(let i=0;i<qalist[1].length;i++){
        document.getElementById("QA").innerHTML += QAtemplate(i);
    }
}


window.onload = function(){
    createIndex();
    createQAIndex();
    createQA();
}