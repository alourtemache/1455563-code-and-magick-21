'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

let similarListElement = userDialog.querySelector('.setup-similar-list');

let similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

let wizards = [
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAMES[0],
    coatColor: WIZARD_COAT_COLOR[0],
    eyesColor: WIZARD_EYES_COLOR[0],
  },
  {
    name: WIZARD_NAMES[1] + WIZARD_SURNAMES[1],
    coatColor: WIZARD_COAT_COLOR[1],
    eyesColor: WIZARD_EYES_COLOR[1],
  },
  {
    name: WIZARD_NAMES[2] + WIZARD_SURNAMES[2],
    coatColor: WIZARD_COAT_COLOR[2],
    eyesColor: WIZARD_EYES_COLOR[2],
  },
  {
    name: WIZARD_NAMES[3] + WIZARD_SURNAMES[3],
    coatColor: WIZARD_COAT_COLOR[3],
    eyesColor: WIZARD_EYES_COLOR[3],
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
