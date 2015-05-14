import Ember from 'ember';

export default Ember.Controller.extend({

	currentOperator: null,
	currentValue: "",
	total: 0,

  formatNumber: function(value) {
	value = value ? parseFloat(value) : 0;
    value = parseFloat(value.toFixed(10));
    return value.toString();
  },

  frmtCurrentValue: function() {
    return this.formatNumber( this.currentValue );
  }.property("currentValue"),

  frmtTotal: function() {
    return this.formatNumber(this.total);
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
    		if (currentValue) {
    			total = currentValue;
    		}
    		this.set("currentValue", "");
    		this.set("total", total);    	
	    },

	    equal: function(){
	    	var currentOperator = this.currentOperator;
	    	var currentValue = this.currentValue;
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
		            default:
		            	total = currentValue;
	    	}

	        this.set("currentValue", total);
	        this.set("total", total);
	        this.set("currentOperator", null);

	    },

	    imdiateCalc: function(operator) {
	    	var currentValue = this.currentValue;
    		var total = this.total;
    		if (currentValue) {
    			switch(operator) {
		            case "+/-":
		              total = currentValue*-1;
		              break;
		            case "%":
		              total = currentValue/100;
		              break;
	        	}
    		} 
    		
	        this.set("currentValue", total);

	    },

	    useValue: function(value) {
	      var cv = this.currentValue;
	      this.set("currentValue", cv + value);
	    }
	}
});