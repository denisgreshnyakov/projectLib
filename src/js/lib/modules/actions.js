import $ from "../core";

$.prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;

  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const findMyIndex = (item) => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector); //находим элементы
    if (arr.length == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      //записываем их по порядку
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    //удаляем хвостик
    delete this[numberOfItems];
  }
  return this;
};

$.prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    let result = this[i].closest(selector);
    // мое условие, чтобы не было null, но все же что-то записывалось
    if (result !== null) {
      this[i] = result;
    } else {
      this[i] = "";
    }

    counter++;
  }

  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    //удаляем хвостик
    delete this[counter];
  }

  return this;
};

$.prototype.siblings = function () {
  let numberOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children; //находим элементы

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      //записываем их по порядку
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;

  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    //удаляем хвостик
    delete this[numberOfItems];
  }
  return this;
};
