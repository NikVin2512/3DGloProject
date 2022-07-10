import timer from './modules/timer';
import menuburg from './modules/menuburg';
import modal from './modules/modal';
import form from './modules/form';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('25 jule 2022');
menuburg();
modal();
form();
tabs();
slider();
calc(100);
sendForm({ formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({ formId: 'form2',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({ formId: 'form3',
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});