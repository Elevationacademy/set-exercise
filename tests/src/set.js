

////////////////////////////
// Set using an array
////////////////////////////

var ArraySet = function () {
  this.data = [];
};

ArraySet.prototype.print = function () {
  var length = this.data.length
  var s = "{";
  this.data.forEach(function (e, i) {
    if (i < length - 1) {
      s = s + e + ", ";
    }
  });
  s = s + this.data[length - 1] + "}";
  return s;
}

ArraySet.prototype.length = function () {
  // TODO
  return undefined;
}

ArraySet.prototype.add = function (o) {
  // TODO
  return undefined;
}

ArraySet.prototype.delete = function (o) {
  // TODO
  return undefined;
}

ArraySet.prototype.contains = function (o) {
  // TODO
  return undefined;
}

ArraySet.prototype.isSubset = function (s) {
  // TODO
  return undefined;
}

ArraySet.prototype.union = function (s) {
  // TODO
  return undefined;
}

ArraySet.prototype.intersect = function (s) {
  // TODO
  return undefined;
}

////////////////////////////
// Set using a hash
////////////////////////////

var HashSet = function () {
  this.data = {};
};

HashSet.prototype.print = function () {
  var length = this.length();
  var s = "{";


  var arr = [];

  for(var o in this.data) {
    arr.push(o);
  }

  arr.forEach(function (e, i) {
    if (i < length - 1) {
      s = s + e + ", ";
    }
  });
  s = s + arr[length - 1] + "}";

  return s;
}

HashSet.prototype.length = function () {
  var len = 0;

  for(var o in this.data) {
    if (this.data.hasOwnProperty(o))
      ++len;
  }

  return len;
}

HashSet.prototype.add = function (o) {
  // TODO
  return undefined;
}

HashSet.prototype.delete = function (o) {
  // TODO
  return undefined;
}

HashSet.prototype.contains = function (o) {
  // TODO
  return undefined;
}

HashSet.prototype.isSubset = function (s) {
  // TODO
  return undefined;
}

HashSet.prototype.union = function (s) {
  // TODO
  return undefined;
}

HashSet.prototype.intersect = function (s) {
  // TODO
  return undefined;
}

