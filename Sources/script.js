const qalist = [
    [
        ["会場はどこですか？"],
        ["参加費などはありますか？"]
    ],
    [
        ["近畿大学 Eキャンパス E館1階eスポーツアリーナです。"],
        ["完全無料です！"]
    ]
];

const index = [
    [
        ["#index"],
        ["#QAlist"],
        ["#form"]
    ],
    [
        ["目次"],
        ["Q & A"],
        ["質問フォーム"]
    ]
];

//生成テンプレート
function indextemplate(num){
    let words = '<div class="index"'+num+'><a href='+index[0][num]+'>'+index[1][num]+'</a></div>';
    return words;
}
function QAindextemplate(num){
    let words = '<div id = "QAlist'+num+'" class = "QAindex"><a href=#QA'+num+'>Q.'+qalist[0][num]+'</a></div>'
    return words;
}
function QAtemplate(num){
    let words1 = '<div id = "Q'+num+'">Q. '+qalist[0][num]+'</div>'
    ,words2 = '<div id = "A'+num+'">A. '+qalist[1][num]+'</div>'
    ,unit = '<div id = "QA'+num+'"class = "QA">'+words1+words2+'</div>'

    return unit;
}

//生成
function createIndex(){
    document.getElementById("index").innerHTML +="<br>";
    for(let i=0;i<index[1].length;i++){
        document.getElementById("index").innerHTML += indextemplate(i);
    }
    document.getElementById("index").innerHTML +="<br>";
}

function createQAIndex(){
    for(let i=0;i<qalist[1].length;i++){
        document.getElementById("QAindex").innerHTML += QAindextemplate(i);
    }
    document.getElementById("QAindex").innerHTML +="<br>";
}

function createQA(){
    for(let i=0;i<qalist[1].length;i++){
        document.getElementById("QA").innerHTML += QAtemplate(i);
    }
    document.getElementById("QA").innerHTML +="<br>";
}


window.onload = function(){
    createIndex();
    createQAIndex();
    createQA();
}