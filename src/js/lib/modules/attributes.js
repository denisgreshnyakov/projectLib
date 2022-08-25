import $ from "../core";

$.prototype.addAttr = function (attrNames, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attrNames)) {
      continue;
    }
    this[i].setAttribute(attrNames, value);
  }
  return this;
};

$.prototype.removeAttr = function (attrNames, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(attrNames)) {
      continue;
    }
    this[i].removeAttribute(attrNames);
  }
  return this;
};

$.prototype.toggleAttr = function (attrNames) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attrNames)) {
      this[i].removeAttribute(attrNames);
    } else {
      this[i].setAttribute(attrNames, "undefined");
    }
  }

  return this;
};
