var gen_quotes_btn = document.querySelector(".gen_quotes");

var text = document.querySelector(".quotes");

var author = document.querySelector(".author");

var main_scr=document.querySelector(".main_scr");

function quotes_from_api() {
    
    var data = fetch("https://type.fit/api/quotes");

    data.then((value) => {
        return value.json();
    }).then((value) => {

        var ran_no = Math.floor(Math.random() * (1642 - 0) + 0);

        if (value[ran_no].author === null && value[ran_no].text !== null) {
            text.innerText = "\""+value[ran_no].text+"\"";
            author.innerText = "No author";
        }

        else if (value[ran_no].text === null && value[ran_no].author !== null) {
            quotes_from_api();
            return;
        }

        else {
            text.innerText ="\""+ value[ran_no].text +"\"";
            author.innerText = "\""+value[ran_no].author+"\"";
        }
    })
}

quotes_from_api();

gen_quotes_btn.addEventListener("click", quotes_from_api);