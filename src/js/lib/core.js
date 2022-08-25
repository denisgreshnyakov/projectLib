const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {} возвращаем пустой объект
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));

  this.length = document.querySelectorAll(selector).length;

  return this;
};

/*в прототип того объекта который будет вот здесь 
возвращаться (return this) мы записываем прототип нашей главной функции

теперь на объекте, который будет создаваться при помощи $ мы можем использовать
любые методы которые будут внутри прототипа этой функции
*/

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;
