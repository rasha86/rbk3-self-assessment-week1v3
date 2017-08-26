function extendArray(array) {
 var newArray=[]

extend(newArray,method)
 return newArray
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var method= [];
method.first= function(){
 var first= this.array[0]
}
method.last= function(){
	var index = this.array.length.
 var last= this.array[index-1]
}