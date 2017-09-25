//javascript/JQuery
$(document).ready(function() {
    var randomNumber
    var userTotal = 0
    var ricks = {}
    var wins = 0
    var losses = 0


    //random number between 15-100 assigned to goal box
    function startGame() {
        function createGoalBox() {
            randomNumber = Math.floor(Math.random() * (100 - 21) + 20)
            $("#goal-display").html(randomNumber)
        }
        createGoalBox()
        console.log(randomNumber)
        //each rick assigned a random number between 1-15
        function createRickNumbers() {
            for (i = 0; i < 4; i++) {
                ricks[i] = Math.floor(Math.random() * (15 - 2) + 1)
            }
        }
        createRickNumbers()
        userTotal = 0
        $("#total").text(userTotal)

    }
    // create ricks with assigned values
    function rickDisplays() {
        $("#rick-1").html('<img src="assets/images/shwiftyrick.jpg" height="150px" width="auto" alt="schwifty-rick">')
        $("#rick-2").html('<img src="assets/images/tiny-rick-2.jpg" height="150px" width="auto" alt="tiny-rick">')
        $("#rick-3").html('<img src="assets/images/handglide-rick.jpg" height="150px" width="auto" alt="handglide-rick">')
        $("#rick-4").html('<img src="assets/images/pickle-rick.jpg" height="150px" width="auto" alt="pickle-rick">')
    }

    //Trying to refactor on click functions
    // function createRick() {
    //     for (var i = 0; i < 4; i++) {
    //         $("rick-" + (i + 1))
    //             .on("click", function() {
    //                 userTotal = userTotal + ricks[i]
    //                 checker()
    //                 console.log(userTotal)
    //             })
    //     }
    // }
    // createrick()

    //rick click handler updating total and checking for win or loss
    $("#rick-1").on("click", function() {
        userTotal = userTotal + ricks[0]
        checker()
    })
    $("#rick-2").on("click", function() {
        userTotal = userTotal + ricks[1]
        checker()
    })
    $("#rick-3").on("click", function() {
        userTotal = userTotal + ricks[2]
        checker()
    })
    $("#rick-4").on("click", function() {
        userTotal = userTotal + ricks[3]
        checker()
    })

    //win or loss checker with huser total uupdate
    function checker() {
        $("#total").text(userTotal)
        if (userTotal === randomNumber) {
            wins++
            $("#wins").text(wins)
            startGame()
            $("#result-picture").html('<img src="assets/images/wub-rick.jpg" height="300px" width="auto" alt="wub-rick">')
            $("#myModal").modal("show")
        }
        if (userTotal > randomNumber) {
            losses++
            $("#losses").text(losses)
            startGame()
            $("#result-picture").html('<img src="assets/images/wrecked-rick3.jpg" height="300px" width="auto" alt="wrecked-rick"><b>RIGGETY RIGGETY WRECKED SON!</b>')
            $("#myModal").modal("show")
        }
    }
    rickDisplays()
    startGame()
    console.log(ricks)
});
