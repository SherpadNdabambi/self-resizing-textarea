function resizeTextArea(textarea){
	numRows = (textarea.scrollHeight - 19) / 15 + 1;
	textarea.rows = numRows;
	displayStats(textarea.scrollHeight, numRows);
}