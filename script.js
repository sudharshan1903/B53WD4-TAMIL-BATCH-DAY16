const countdown = document.getElementsByClassName("count")[0];
const words = document.getElementById("words");


const startCountdown = (count, callback)=>{
    setTimeout(()=> {
        console.log(count);
        countdown.innerText = count;
        callback();
    }, 1000);
}

const countDownFromTen = ()=> {
    startCountdown(10,  ()=> {
        startCountdown(9, ()=> {
            startCountdown(8, ()=> {
                startCountdown(7, ()=> {
                    startCountdown(6, ()=> {
                        startCountdown(5, ()=> {
                            startCountdown(4, ()=> {
                                startCountdown(3, ()=> {
                                    startCountdown(2, ()=> {
                                        startCountdown(1, ()=> {
                                            words.innerText = "Happy Independence Day"
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Start the countdown
countDownFromTen();
