$(document).ready(function() {
    setFooterYear();
});

function setFooterYear() {
    let date = new Date(), year = date.getFullYear();
    $("#footerYear").text(year.toString());
}

function resizeTextArea(textarea){
	numRows = Math.floor((textarea.scrollHeight - 36) / 24) + 1;
	textarea.rows = numRows;
}
