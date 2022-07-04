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

//隠しコマンド用(隠せてない)

let com = "";

//大文字を小文字に変換する関数
function UtoL(str) {
    return str.replace(/A/g, "a").replace(/B/g, "b").replace(/C/g, "c").replace(/D/g, "d").replace(/E/g, "e").replace(/F/g, "f").replace(/G/g, "g").replace(/H/g, "h").replace(/I/g, "i").replace(/J/g, "j").replace(/K/g, "k").replace(/L/g, "l").replace(/M/g, "m").replace(/N/g, "n").replace(/O/g, "o").replace(/P/g, "p").replace(/Q/g, "q").replace(/R/g, "r").replace(/S/g, "s").replace(/T/g, "t").replace(/U/g, "u").replace(/V/g, "v").replace(/W/g, "w").replace(/X/g, "x").replace(/Y/g, "y").replace(/Z/g, "z");
}

function SHIFT(str) {
    return str.replace("1", "!").replace("2", '"').replace("3", "#").replace("4", "$").replace("5", "%").replace("6", "&").replace("7", "'").replace("8", '(').replace("9", ")").replace("-", "=").replace("^", "~").replace("¥", "|").replace("/", "?").replace("@", "`").replace("[", "{").replace("]", "}").replace(":", "*").replace(";", "+").replace(",", "<").replace(".", ">");
}

function symbol(str) {
    return str.replace("Minus", "-").replace("Equal", "^").replace("IntlYen", "¥").replace("BracketLeft", "@").replace("BracketRight", "[").replace("Backslash", "]").replace("Quote", ":").replace("Semicolon", ";").replace("Comma", ",").replace("Period", ".").replace("Slash", "/").replace("ArrowUp", "↑").replace("ArrowDown", "↓").replace("ArrowLeft", "←").replace("ArrowRight", "→").replace("Backquote", "かな↔英数").replace("Tab", "→|").replace("MetaLeft", "🔍").replace("NonConvert", "英数").replace("Convert", "かな").replace("Backspace", "⌫").replace("Enter", "↲");
}

function wi(a) {
    com += a;
}

function kcc(e) {
    var c = e.code;
    var shift = e.shiftKey;
    var alt = e.altKey;
    var ctrl = e.controlKey;
    if (c.match(/Key/)) {
        var r = c.replace("Key", "");
        if (shift == false) {
            var r = UtoL(r);
        }
        wi(r);
    } else if (c.match(/Digit/)) {
        var r = c.replace("Digit", "");
        if (shift == true) {
            var r = SHIFT(r);
        }
        wi(r);
    } else if (c == "Space") {
        wi(" ");
    }
    else if (c == "ShiftLeft" || c == "ShiftRight" || c == "AltLeft" || c == "AltRight" || c == "ControlLeft" || c == "ControlRight") {
    } else {
        var r = symbol(c);
        if (shift == true) {
            var r = SHIFT(r);
        }
        wi(r);
    }
    var COM = UtoL(com);
    var E = "Enter";

    function li(a) {
        com = UtoL(com).replace(a, "");
    }
    if (COM.match(/fall guys/)) {
        if (c == E) {
            li("fall guys");
            window.open("https://www.fallguys.com/ja", "twitter", "width:200px;height:100px;");
        }
    } else if (COM.match(/totwitter/)) {
        if (c == E) {
            li("totwitter");
            window.open("https://twitter.com", "twitter", "width:200px;height:100px;");
        }
    }
}
window.addEventListener("keydown", kcc);


//生成テンプレート
function indextemplate(num) {
    let words = '<div id = "index' + num + '" class="index whiteblock"><a class="linkwhite" href=' + index[0][num] + 'head>' + index[1][num] + '</a></div>';
    return words;
}

function QAindextemplate(num) {
    let words = '<div id = "QAlist' + num + '" class = "QAindex whiteblock"><a class="linkwhite" href=#QA' + num + '>Q. ' + qalist[0][num] + '</a></div>'
    return words;
}

function QAtemplate(num) {
    let words1 = '<div id = "Q' + num + '">Q. ' + qalist[0][num] + '</div>',
        words2 = '<div id = "A' + num + '">A. ' + qalist[1][num] + '</div>',
        unit = '<div id = "QA' + num + '"class = "QA whiteblock">' + words1 + words2 + '</div>'

    return unit;
}

//生成
function createIndex() {
    document.getElementById("index").innerHTML += "<br>";
    for (let i = 0; i < index[1].length; i++) {
        document.getElementById("index").innerHTML += indextemplate(i);
    }
}

function createQAIndex() {
    for (let i = 0; i < qalist[1].length; i++) {
        document.getElementById("QAindex").innerHTML += QAindextemplate(i);
    }
}

function createQA() {
    for (let i = 0; i < qalist[1].length; i++) {
        document.getElementById("QA").innerHTML += QAtemplate(i);
    }
}


window.onload = function () {
    createIndex();
    createQAIndex();
    createQA();
}