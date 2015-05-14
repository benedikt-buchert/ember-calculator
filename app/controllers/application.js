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
	    	this.set("currentOperator", operator);
	    	var currentValue = this.currentValue;
    		var total = this.total;
    		total = currentValue;
    		this.set("currentValue", "");
    		this.set("total", total);    	
	    },

	    equal: function(){
	    	var currentOperator = this.currentOperator;
	    	var currentValue = this.currentValue;
	    	currentValue = parseFloat( currentValue );
	    	var total = this.total;

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

	        this.set("currentValue", total);
	        this.set("total", total);
	        this.set("currentOperator", null);

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
