import Ember from 'ember';

export default Ember.Component.extend({
	action: 'useValue',

  buttonID: function() {
    var id = this.get("value");
    switch(id) {
      case "+": id = "Plus"; break;
      case "-": id = "Minus"; break;
      case "=": id = "Equal"; break;
      case "C": id = "Clear"; break;
      case "/": id = "Devide"; break;
      case "*": id = "Times"; break;
      case ".": id = "Comma"; break;
      case "+/-": id = "PlusMiunus"; break;
      case "%": id = "Percent"; break;
    }
    return "btn" + id;
  }.property("value"),

  classNames: ['butn'],

  classNameBindings: ['isOrange'],

  isOrange: function() {
  }.property("isOrange"),

  value: null,

  click: function() {
    var value = this.get("value");
    this.sendAction("action", value);
  }
});