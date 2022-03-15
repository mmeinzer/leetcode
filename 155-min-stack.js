var MinStack = function () {
  this.stack = [];
  this.min = undefined;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min === undefined || val < this.min) {
    this.min = val;
  }

  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.stack.pop();

  if (this.min === popped) {
    this.calcMin();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

MinStack.prototype.calcMin = function () {
  this.min = undefined;
  this.stack.forEach((val) => {
    if (this.min === undefined || val < this.min) {
      this.min = val;
    }
  });
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
