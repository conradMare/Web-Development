
$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keydown(function(event) {
    console.log(event.key);
})

$(document).keydown(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})

// Done in browser console:
// $("h1").before("<button>New</button>");
// ce.fn.init {0: h1.big-title.margin-50, length: 1, prevObject: ce.fn.init}
// $("h1").after("<button>New</button>");
// ce.fn.init {0: h1.big-title.margin-50, length: 1, prevObject: ce.fn.init}
// $("h1").prepend("<button>New</button>");
// ce.fn.init {0: h1.big-title.margin-50, length: 1, prevObject: ce.fn.init}
// $("h1").append("<button>New</button>");
// ce.fn.init {0: h1.big-title.margin-50, length: 1, prevObject: ce.fn.init}