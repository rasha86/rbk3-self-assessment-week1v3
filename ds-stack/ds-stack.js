var Stack = function(){
	this.size = 0;
    this._storage = [];
    Stack.prototype.add = function(value){

    	this._storage[this.size] = value;
    	    this.size++   
             };

    Stack.prototype.remove = function() {
    		if(this.size > 0){
    			var x = this._storage[this.size -1];
    			delete x;
    			this.size --;
    			return x;
    		}
            
};
