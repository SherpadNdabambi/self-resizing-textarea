function resizeTextArea(textarea){
	numRows = (Math.max(textarea.scrollHeight, textarea.scrollHeight) - 19) / 15 + 1;
	textarea.rows = numRows;
}