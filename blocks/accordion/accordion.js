$(document).ready(function() {
$(".accordion-wrapper .item-content:not(:first)").css("display", "none");
$(".accordion-wrapper .item-title").click(function() {
	var isOpen = $(this).hasClass("open");
	$(".accordion-wrapper .item-title").removeClass("open");
	if (!isOpen) {
		$(this).removeClass("open");
	} else {
		$(this).addClass("open");
	}
   //$(this).toggleClass("open");
   $(this).next(".item-content").css("display", function(_, value) {
     return value === "none" ? "block" : "none";
   });
   $(".accordion-wrapper .item-content").not($(this).next()).css("display", "none");
});
});
