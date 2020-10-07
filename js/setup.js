'use strict';

const WIZARD_NAMES = ['Вашингтон Вальц', 'Иван Верон', 'Мария Мирабелла', 'Кристоф Ирвинг'];

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

let similarListElement = userDialog.querySelector('.setup-similar-list');

let similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

let wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'blue',
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: 'red',
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'yellow',
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'green',
  }
];

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
