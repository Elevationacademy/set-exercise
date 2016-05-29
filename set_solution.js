
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
  return this.data.length;
}

ArraySet.prototype.add = function (o) {
  if (!this.data.includes(o)) {
    this.data.push(o);
  }
}

ArraySet.prototype.delete = function (o) {
  var i = this.data.indexOf(o);
  if (i >= 0) {
    this.data.splice(i, i+1);
  }
}

ArraySet.prototype.contains = function (o) {
  return this.data.includes(o);
}

ArraySet.prototype.isSubset = function (s) {
  // Checks that every element is also in s.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  return this.data.every(function (e) {
    return s.contains(e);
  });
}

ArraySet.prototype.union = function (s) {
  var sNew = new ArraySet();
  this.data.forEach(function (e) { sNew.add(e) });
  s.data.forEach(function (e) { sNew.add(e) });
  return sNew;
}

ArraySet.prototype.intersect = function (s) {
  var that = this;

  var sNew = new ArraySet();
  this.data.forEach(function (e) {
    if (s.contains(e)) {
      sNew.add(e);
    }
  });
  s.data.forEach(function (e) {
    if (that.contains(e)) {
      sNew.add(e);
    }
  });

  return sNew;
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
  this.data[o] = true;
}

HashSet.prototype.delete = function (o) {
  delete this.data[o];
}

HashSet.prototype.contains = function (o) {
  return this.data[o] !== undefined;
}

HashSet.prototype.isSubset = function (s) {
  for (var o in this.data) {
    if (!s.contains(o)) {
      return false;
    }
  }

  return true;
}

HashSet.prototype.union = function (s) {
  var hs = new HashSet();

  for (var o in this.data) {
    hs.add(o);
  }
  for (var o in s.data) {
    hs.add(o);
  }

  return hs;
}

HashSet.prototype.intersect = function (s) {
  var hs = new HashSet();
  var that = this;

  for (var o in this.data) {
    if (s.contains(o)) {
      hs.add(o);
    }
  }
  for (var o in s.data) {
    if (that.contains(o)) {
      hs.add(o);
    }
  }

  return hs;
}