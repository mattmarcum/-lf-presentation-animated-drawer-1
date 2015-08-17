export default function(){
  this.transition(
    this.inHelper('liquid-modal'),
    this.toValue(function(toValue, fromValue) {
      return toValue && !fromValue;
    }),
    this.use('explode', {
      pick: '.lm-container',
      use: ['toUp', {duration: 500 }]
    })
  );
  this.transition(
    this.inHelper('liquid-modal'),
    this.toValue(function(toValue, fromValue) {
      return fromValue && !toValue;
    }),
    this.use('explode', {
      pick: '.lm-container',
      use: ['toDown', {duration: 500 }]
    })
  );
}
