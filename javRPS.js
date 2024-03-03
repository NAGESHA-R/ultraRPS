let ado=document.querySelector('.bAudio');
        ado.volume=0.05;
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissor = document.querySelector('.scissor');
    let restart = document.querySelector('.restart');

    rock.addEventListener("click", rockHandle);
    paper.addEventListener("click", paperHandle);
    scissor.addEventListener("click", scissorHandle);
    restart.addEventListener("click", handler);

    let rockAudio = new Audio('./rock.mp3');
    let paperAudio = new Audio('./paper.mp3');
    let scissorAudio = new Audio('./scissor.mp3');

    let wcount = 0;
    let lcount = 0;
    let tcount = 0;

    document.addEventListener("keypress", function (event) {
        let value=event.key;
        switch (value) {
            case "s":
                if(wcount===10 || lcount===10 || tcount===10)
                {
                    alert("You can't play the game")
                }
                else{
                    rockHandle();
                }
                break;
            case "d":
                if(wcount===10 || lcount===10 || tcount===10)
                {
                    alert("You can't play the game")
                }
                else{
                paperHandle();
                }
                break;

            case "f":
                if(wcount===10 || lcount===10 || tcount===10)
                {
                    alert("You can't play the game")
                }
                else{
                scissorHandle();
                }
                break;

            default: console.log("game over");
        }
    });
    let rocksource="./rock.webp";
    let papersource="./paper.png";
    let scissorsource="./scissor.jpg";
    function handler() {;
        window.location.reload(true);
    }
    function rockHandle() {
        if(wcount===10 || lcount===10 || tcount===10)
        {
            alert("You can't play the game")
        }
        else if(wcount!==10 || lcount!==10 || tcount!==10)
        {
            document.querySelector(".playerSide").setAttribute("src",rocksource);
        }
        if (wcount < 10 && lcount < 10 && tcount < 10) {
            rockAudio.play();
            let randomNumber = Math.random();
            let computerMove = " ";
            if (randomNumber >= 0 && randomNumber < (1 / 3)) {
                computerMove = "Rock";
                document.querySelector(".computerSide").setAttribute("src",rocksource);
            }
            else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
                computerMove = "Paper";
                document.querySelector(".computerSide").setAttribute("src",papersource);
            }
            else if (randomNumber >= (2 / 3) && randomNumber < (1)) {
                computerMove = "Scissor";
                document.querySelector(".computerSide").setAttribute("src",scissorsource);
            }
            if (computerMove === "Rock") {
                tcount += 1;
                document.querySelector(".decision").innerHTML = "You:rock &nbsp;&nbsp;&nbsp;&nbsp; Computer: " + computerMove + "&nbsp;&nbsp;&nbsp;&nbsp; your tie the game";
                document.querySelector(".decision").style.color = "brown";
                document.querySelector(".tie").innerHTML = "Ties:" + tcount;
            }
            else if (computerMove === "Paper") {
                lcount += 1;
                document.querySelector(".decision").innerHTML = "You:rock &nbsp;&nbsp;&nbsp;&nbsp; Computer:" + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; your Loss the game";
                document.querySelector(".decision").style.color = "red";
                document.querySelector(".loss").innerHTML = "Loss:" + lcount;
            }
            else if (computerMove === "Scissor") {
                wcount += 1;
                document.querySelector(".decision").innerHTML = "You:rock &nbsp;&nbsp;&nbsp;&nbsp; Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; your win the game";
                document.querySelector(".decision").style.color = "green";
                document.querySelector(".win").innerHTML = "Win:" + wcount;
            }
        }
        if (wcount === 10) {
            document.querySelector(".decision").innerHTML = "YOU WIN THE GAME";
            document.querySelector(".decision").style.color = "green";
            document.querySelector(".gameOver").style.visibility = "visible";
        }
        else if (lcount === 10) {
            document.querySelector(".decision").innerHTML = "YOU LOSS THE GAME";
            document.querySelector(".decision").style.color = "red";
            document.querySelector(".gameOver").style.visibility = "visible";
        }
        else if (tcount === 10) {
            document.querySelector(".decision").innerHTML = "Game Tie";
            document.querySelector(".decision").style.color = "brown";
            document.querySelector(".gameOver").style.visibility = "visible";
        }

    }
    function paperHandle() {
        if(wcount===10 || lcount===10 || tcount===10)
        {
            alert("You can't play the game")
        }
        else if(wcount!==10 || lcount!==10 || tcount!==10)
        {
            document.querySelector(".playerSide").setAttribute("src",papersource);
        }

        if (wcount < 10 && lcount < 10 && tcount < 10) {
            paperAudio.play();
            let randomNumber = Math.random();
            let computerMove = " ";
            if (randomNumber >= 0 && randomNumber < (1 / 3)) {
                computerMove = "Rock";
                document.querySelector(".computerSide").setAttribute("src",rocksource);
            }
            else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
                computerMove = "Paper";
                document.querySelector(".computerSide").setAttribute("src",papersource);
            }
            else if (randomNumber >= (2 / 3) && randomNumber < (1)) {
                computerMove = "Scissor";

                document.querySelector(".computerSide").setAttribute("src",scissorsource);
            }
            if (computerMove === "Paper") {
                tcount += 1;
                document.querySelector(".decision").innerHTML = "You:Paper &nbsp;&nbsp;&nbsp;&nbsp; Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; your tie the game";
                document.querySelector(".decision").style.color = "brown";
                document.querySelector(".tie").innerHTML = "Ties:" + tcount;
            }
            else if (computerMove === "Scissor") {
                lcount += 1;
                document.querySelector(".decision").innerHTML = "You:Paper &nbsp;&nbsp;&nbsp;&nbsp; Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; your Loss the game";
                document.querySelector(".decision").style.color = "red";
                document.querySelector(".loss").innerHTML = "Loss:" + lcount;
            }
            else if (computerMove === "Rock") {
                wcount += 1;
                document.querySelector(".decision").innerHTML = "You:Paper &nbsp;&nbsp;&nbsp;&nbsp; Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; you Win the game";
                document.querySelector(".decision").style.color = "green";
                document.querySelector(".win").innerHTML = "Win:" + wcount;
            }
        }
        else {
            if (wcount === 10) {
                document.querySelector(".decision").innerHTML = "YOU WIN THE GAME";
                document.querySelector(".decision").style.color = "green";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
            else if (lcount === 10) {
                document.querySelector(".decision").innerHTML = "YOU LOSS THE GAME";
                document.querySelector(".decision").style.color = "red";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
            else if (tcount === 10) {
                document.querySelector(".decision").innerHTML = "Game Tie";
                document.querySelector(".decision").style.color = "brown";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
        }
    }
    function scissorHandle() {
        if(wcount===10 || lcount===10 || tcount===10)
        {
            alert("You can't play the game")
        }
        else if(wcount!==10 || lcount!==10 || tcount!==10)
        {
            document.querySelector(".playerSide").setAttribute("src",scissorsource);
        }
        
        if (wcount < 10 && lcount < 10 && tcount < 10) {
            scissorAudio.play();
            let randomNumber = Math.random();
            let computerMove = " ";
            if (randomNumber >= 0 && randomNumber < (1 / 3)) {
                computerMove = "Rock";
                document.querySelector(".computerSide").setAttribute("src",rocksource);
            }
            else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
                computerMove = "Paper";
                document.querySelector(".computerSide").setAttribute("src",papersource);
            }
            else if (randomNumber >= (2 / 3) && randomNumber < (1)) {
                computerMove = "Scissor";
                document.querySelector(".computerSide").setAttribute("src",scissorsource);
            }
            if (computerMove === "Scissor") {
                tcount += 1;
                document.querySelector(".decision").innerHTML = "You:Scssor &nbsp;&nbsp;&nbsp;&nbsp;Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; you tie the game";
                document.querySelector(".decision").style.color = "brown";
                document.querySelector(".tie").innerHTML = "Ties:" + tcount;
            }
            else if (computerMove === "Rock") {
                lcount += 1;
                document.querySelector(".decision").innerHTML = "You:Scissor &nbsp;&nbsp;&nbsp;&nbsp;Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; you Loss the game";
                document.querySelector(".decision").style.color = "red";
                document.querySelector(".loss").innerHTML = "Loss:" + lcount;
            }
            else if (computerMove === "Paper") {
                wcount += 1;
                document.querySelector(".decision").innerHTML = "You:Scissor &nbsp;&nbsp;&nbsp;&nbsp;Computer: " + computerMove + " &nbsp;&nbsp;&nbsp;&nbsp; you Win the game";
                document.querySelector(".decision").style.color = "green";
                document.querySelector(".win").innerHTML = "Win:" + wcount;
            }
        }
        else {
            if (wcount === 10) {
                document.querySelector(".decision").innerHTML = "YOU WIN THE GAME";
                document.querySelector(".decision").style.color = "green";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
            else if (lcount === 10) {
                document.querySelector(".decision").innerHTML = "YOU LOSS THE GAME";
                document.querySelector(".decision").style.color = "red";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
            else if (tcount === 10) {
                document.querySelector(".decision").innerHTML = "Game Tie";
                document.querySelector(".decision").style.color = "brown";
                document.querySelector(".gameOver").style.visibility = "visible";
            }
        }
    }
