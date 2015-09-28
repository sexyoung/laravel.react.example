"use strict";

function load_messages(){
	$.getJSON("/messages", function(json) {
		var messages = jsonToMessage(json);
		$("#messages").html(messages);
	});
}

function jsonToMessage(json){
	var messages = json.map(function(m) {
		var div = "<div class='message'>";
				div += 	"<div class='name'>" + m.name + "</div>";
				div += 	"<div class='content'>" + m.content + "</div>";
				div += "</div>";
		return div;
	});
	return messages;
}

function post_message(e){
	e.preventDefault();
	$.post(this.action, $(this).serialize(), function(json) {
		var messages = jsonToMessage(json);
		$("#messages").html(messages);
	});
}