import { animate, stop } from "liquid-fire";

export default function () {
  var oldEl = this.oldElement;
  var newEl = this.newElement;

  if(oldEl) {
    return new Promise(function(resolve){
      oldEl.on(`transitionend.${oldEl.attr('id')}`, function(){
        resolve();
      });
      oldEl.parent().removeClass('open');
      Ember.$('body').css('overflow','auto');
      
    });
  } else {
    return new Promise(function(resolve){
      newEl.on(`transitionend.${newEl.attr('id')}`, function(){
        resolve();
      });
      newEl.css('visibility', 'visible');
      newEl.parent().addClass('open');
      Ember.$('body').css('overflow','hidden');

    });
  }
}
