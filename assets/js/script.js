$(document).ready(function () {

    //Listen for save button clicks with JQUERY
    $(".saveButton").on("click", function () {
        console.log(`it saved`);

        let timeID = $(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);

        $(".notification").addClass(`show`);

        setTimeout(function () {
            $(".notification").removeClass(`show`);
        }, 5000)

    })

    function hourUpdate() {
        let currentHour = moment().hours();
        // console.log(currentHour);

        // $(".time-block").each(function () {
        //     let blockHour = parseInt($(this).attr("id").split("-")[1]);
        //     alert(blockHour);
        // })

        for (let i = 0; i < $(".time-block").length; i++) {
            let hour = parseInt($(".time-block")[i].getAttribute('id').split("-")[1])
            console.log(hour)
            console.log(currentHour)

            if (hour - 1 < currentHour) {
                $(".time-block")[i].classList.add("past")
            } else if (hour === currentHour) {
                $(".time-block")[i].classList.add("past")
                $(".time-block")[i].classList.remove("present")
            } else {
                $(".time-block")[i].classList.remove("past")
                $(".time-block")[i].classList.remove("present")
                $(".time-block")[i].classList.add("future")
            }
        }

    }

    hourUpdate();

    let interval = setInterval(hourUpdate, 15000);

    $("hour-9 .description").val(local)

    $("currentDay").text(moment().format("dddd, MMMM, Do"))
})