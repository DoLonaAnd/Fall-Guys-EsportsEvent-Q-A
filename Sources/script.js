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

function createQAIndex(){
    for(var i=0;i<qalist[1].length;i++){
        document.getElementById("QAindex").innerHTML += QAindextemplate(i);
    }
}

function createQA(){
    for(var i=0;i<qalist[1].length;i++){
        document.getElementById("QA").innerHTML += QAtemplate(i);
    }
}

window.onload = function(){
    createQAIndex();
    createQA();
}