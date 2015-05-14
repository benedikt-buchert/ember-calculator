import Ember from 'ember';

export default Ember.Controller.extend({

	currentOperator: null,
	currentValue: "",
	total: 0,

  formatNumber: function(value) {
    if (typeof value === "string") {
    	value = value ? parseFloat(value) : 0;
    }
    value = parseFloat(value.toFixed(10));
    return value.toString();
  },

  frmtCurrentValue: function() {
    return this.formatNumber( this.get("currentValue") );
  }.property("currentValue"),

  frmtTotal: function() {
    return this.formatNumber( this.get("total") );
  }.property("total"),

  actions: {
    clear: function() {
      this.set("currentOperator", null);
      this.set("currentValue", "");
      this.set("total", 0);
      
	},

    setOperator: function(operator) {
      var currentValue = this.get("currentValue");
      
    	if ( currentValue ) {

	        currentValue = parseFloat( currentValue );
	        var currentOperator = this.get("currentOperator");
	        var total = this.get("total");

	        if ( currentOperator ) {
	          switch(currentOperator) {
	            case "+":
	              total += currentValue;
	              break;
	            case "-":
	              total -= currentValue;
	              break;
	            case "/":
	            	total /= currentValue;
	            	break;
	            case "*":
	            	total *= currentValue;
	            	break;
	            }
	        }
	        else {
	          total = currentValue;
	        }

	        this.set("currentValue", total);
	        this.set("total", total);
    	}

		if ( operator === "=" ) {
        	this.set("currentOperator", null);
		} else {
        	this.set("currentOperator", operator);
		}

    },

    percent: function() {
    	var total = this.get("total");
    	var currentValue = this.get("currentValue");
    	total = currentValue/100;
    	this.set("currentValue", total);
	    this.set("total", total);
    },

    plusMinus: function() {
    	var total = this.get("total");
    	var currentValue = this.get("currentValue");
    	total = currentValue*-1;
    	this.set("currentValue", total);
	    this.set("total", total);
    },

    useValue: function(value) {
      var cv = this.get("currentValue");
      this.set("currentValue", cv + value);
    }
  }
});
