export default function(){
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('lf-drawer1'),
    this.use('explode', {
      pick: '.lm-container',
      use: ['toUp', {duration: 500 }]
    }),
    this.reverse('explode', {
      pick: '.lm-container',
      use: ['toDown', {duration: 500 }]
    }),
    this.debug()
  );
  this.transition(
    this.inHelper('liquid-modal'),
    this.toModal('lf-drawer2'),
    this.use('explode', {
      pick: '.lm-container',
      use: ['cssSlide', 'animation-drawer']
    }),
    this.reverse('explode', {
      pick: '.lm-container',
      use: ['cssSlide', 'animation-drawer']
    }),
    this.debug()
  );
}
