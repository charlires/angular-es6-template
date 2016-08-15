class BtnCtrl {
  constructor($state) {
    'ngInject';

  }

  submit() {
    console.log('Click')
  }

}

let Btn= {
  transclude: true,
  controller: BtnCtrl,
  templateUrl: 'components/buttons/btn.html'
};

export default Btn;
