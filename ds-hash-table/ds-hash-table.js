var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        if(this._storage[hashFn(key,max)] === undefined){
        this._storage[hashFn(key, max)] = value;
      }
      else{
        var bucket = false;
        for (var i = 0; i <this._storage[hashFn(key,max)].length ; i++) {
             if(this._storage[hashFn(key,max)][i][0] === key){
             this._storage[hashFn(key, max)][i][1] = value;
             bucket = true;
        }
      }
      if(bucket === false){
        this._storage[hashFn(key, max)].push([key,value])
      }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};