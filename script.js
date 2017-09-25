
function Button(text) {
	this.text = text || 'Hello';
}
Button.prototype = {
	create: function() {
		this.$element= $('<button>');	
		var self = this;
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);	
	});
	$('body').append(this.$element);
}}

var btn1 = new Button('Hello!');
btn1.create();