// const el = $("p")
// const el1 = document.getElementsByTagName("p")
// const el2 = document.querySelectorAll("p")

// const el = $("#hello")
// const el = $(".world")

// console.log(el)
// console.log(el1)
// console.log(el2)

// .html
// const el = $("#text")
// el.html("Hello World")

// // .attr()
// const inp = $("input")
// inp.attr("type", "checkbox")

// // add & remove class
// el.addClass("red")
// el.addClass("blue")
// el.removeClass("blue")

// //css()
// inp.css({
//     border: "1px solid red",
//     marginleft: "100px"
// })

// const el = document.getElementById("text")
// el.addEventListener("mouseenter", function() {
//     el.style.border = "1px solid red"
// })

const el = $("text")
el.mouseenter(function() {
    el.css("boeder", "1px solid red")
} )

const inp = $("input")
inp.focus(function() {
    inp.css("border", "1px solid blue")
})