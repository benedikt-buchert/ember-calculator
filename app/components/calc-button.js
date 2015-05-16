import Ember from 'ember';

export default Ember.Component.extend({
	action: 'useValue',

  buttonID: function() {
    var id = this.value;
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

  classNameBindings: ['isOrange','isZero'],

  isZero: function() {
  }.property("isZero"),

  isOrange: function() {
  }.property("isOrange"),

  value: null,

  click: function() {
    var value = this.value;
    this.sendAction("action", value);
  },

  //Keyboard Shortcuts

  keyDown: function(event) {
    var key = event.keyCode;
    switch(key) {
      case 48:
      case 96:  key = 0;
      break;
      case 49:
      case 97: key = 1;
      break;
      case 50:
      case 98: key = 2;
      break;
      case 51:
      case 99: key = 3;
      break;
      case 52:
      case 100: key = 4;
      break;
      case 53:
      case 101: key = 5;
      break;
      case 54:
      case 102: key = 6;
      break;
      case 55:
      case 103: key = 7;
      break;
      case 56:
      case 104: key = 8;
      break;
      case 57:
      case 105: key = 9;
      break;
      case 110:
      case 188:
      case 190: key = ".";
      break;
      default: key = "";
    }
    this.sendAction("action", key);

  }
});