var Textarea = Textcomplete.editors.Textarea;

var textareaElement = document.getElementById('textarea1')
var editor = new Textarea(textareaElement);

var textcomplete = new Textcomplete(editor, {
	dropdown: {
		maxCount: Infinity
	}
})

textcomplete.register([{
	// Emoji strategy
	match: /(^|\s)(\w+)$/,
	search: function (term, callback) {
		$.ajax({
			method: "POST",
			url: "/filter_list",
			data: { term: term }
		})
		.done(callback)
		.fail([]);
	},
	replace: function (value) {
		return value
	}
}]);