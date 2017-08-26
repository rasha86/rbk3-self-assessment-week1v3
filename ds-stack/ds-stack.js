var Stack = function(value) {
	this.first = 0;
	this.last=0;
    this._storage = [];
    Stack.prototype.add = function(){

    	storage[this.first] = this.value;
    	this.first++    };

    Stack.prototype.remove = function() {
    		if(this.first - this.last > 0){
    			var x = storage[this.first - this.last-1];
    			delete x;
    			this.first --;
    			return x;
    		}
    		else 
    			this.last = 0;    };
    	};
