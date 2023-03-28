const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const More = document.getElementById("more");
const Cat = document.getElementById("cat");
const Sharp = document.getElementById("sharp");
const Sharpen = document.getElementById("sharpen");
const btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;

    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i <= 0; i++) {
                const element = data[i];
                result.innerHTML = `
                    <div class="word">
                        <h3>${element.word}</h3>
                        <button class="sound" onclick="plad()">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                    <div class="details">
                        <p>${element.meanings[0].partOfSpeech}</p>
                        <p>/${element.phonetic}/</p>
                    </div>
                    <p class="word-meaning">
                        ${element.meanings[0].definitions[0].definition}
                    </p>
                    <p class="word-example">
                        ${element.meanings[0].definitions[0].example || ""}
                    </p>
                    <div class="ee">
                        <button onclick="showMore()" id="sharp" class="more-btn">More</button>
                    </div>
                    `;
                sound.setAttribute("src", `${element.phonetics[0].audio}`);
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word, <br /> Kindly Check the word carefully</h3>`
        });
        set()
});

function set(){
    More.innerHTML = ""
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 1; i < data.length; i++) {

                const element = data[i];
                
                More.innerHTML += `
                    <div class="word">
                        <h3>${element.word}</h3>
                        <button class="sound" onclick="plad()">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </div>
                    <div class="details">
                        <p>${element.meanings[0].partOfSpeech}</p>
                        <p>/${element.phonetic}/</p>
                    </div>
                    <p class="word-meaning">
                        ${element.meanings[0].definitions[0].definition}
                    </p>
                    <p class="word-example">
                        ${element.meanings[0].definitions[0].example || ""}
                    </p>
                    `;
                sound.setAttribute("src", `${element.phonetics[0].audio}`);
            }
        })
}

function showMore() {
   set()
        // if(More.innerHTML= " "){
        //     More.innerHTML=`<h2 class="error mac">No more meaning</h2>`
        // }else(
        //     More.innerHTML=`<h2 class="error mac">More meaning</h2>`
        // )
        Cat.classList.toggle('block')
}


function plad() {
    sound.play()
}
