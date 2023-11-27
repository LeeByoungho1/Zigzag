const vibration = (target, time) => {
    target.addClass("vibration");

    setTimeout(function () {
        target.removeClass("vibration");
    }, time);
}

// footer 아이콘
$(".icon_box").on("mouseover", function () {
    $(this).children("div").css({ "background-color": "#fff", color: "#1f1f1f" })
})

$(".icon_box").on("mouseout", function () {
    $(this).children("div").css({ "background-color": "", color: "#fff" })
})


// nav
$(".events_nav a").on("click", function (e) {
    e.preventDefault()
    $(".events_nav a").removeClass("active")
    $(this).addClass("active")

    var index = $(this).parent().index()
    var thisSection = $(".section").eq(index)
    var pos = thisSection.position().top
    $("html, body").animate({ scrollTop: pos }, 100)
})
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop()

    var mainHeight = $(".main_event_title").height() + $(".main_event_content").height()
    var navHeight = $(".events_nav").height()
    var p = mainHeight - navHeight

    if (scroll > p) {
        $(".events_nav").addClass("fixed")
    } else {
        $(".events_nav").removeClass("fixed")
    }

    if (mainHeight < scroll) {
        $(".main_event_content_logo").fadeOut()
    } else {
        $(".main_event_content_logo").fadeIn(1000)
    }
})


// 유의사항
$(".notice a").on("click", function (e) {
    e.preventDefault()
    $(this).children("i").toggleClass("fa-rotate-180")
    $(this).parent(".notice").parent(".section").next().slideToggle(250)
    $(this).toggleClass("active")
})

// 럭키딜 상품 title 너비 조절
$(".item_title").each(function (item) {
    $(this).css({ width: $(this).children(".item_title span").width() + 60 + "px" })
})

// section_btn 호버
$(".section_btn a").on("mouseover", function () {
    if (!($(this).parent().hasClass("outBtn"))) {
        $(this).parent().css({ "background-color": "#fb0fd7" })
    }
})
$(".section_btn a").on("mouseout", function () {
    if (!($(this).parent().hasClass("outBtn"))) {
        $(this).parent().css({ "background-color": "#f34edb" })
    }
})
