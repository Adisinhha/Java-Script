function comp() {
    const names =['rock','paper','scissor'];
    const randindex = Math.floor(Math.random() *names.length);
    return names[randindex];
    }
    // document.write(randname);
    // document.write(entry1);
    function play(entry1,entry2){
        if (entry1==entry2) {
            return "It'a tie"
        } else if ((entry1 ==="rock" && entry2 ==="scissor")||
                  (entry1==="paper"&& entry2==="rock")||
                  (entry1==="scissor"&& entry2==="paper")
                  )
         {
             return"You win"
         } else {
             return"You Lose"
         } 

    }
    const entry1 =prompt("Enter Your Choice").toLowerCase();
     const entry2 = comp();
     console.log(`You choose ${entry1}.`);
     console.log(`Computer choose ${entry2}.`);