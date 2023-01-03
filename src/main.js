import { createSiteProfileRatingTemplate } from './view/profile-rating.js';
import { createSiteMenuTemplate } from './view/site-menu.js';
import { createSiteSortingTemplate } from './view/site-sorting.js';
import { createSiteFilmsContainerTemplate } from './view/site-films-container.js';
import { createSiteFilmsListTemplate } from './view/siteFilmsList.js';
import { createSiteFilmsListTopTemplate } from './view/site-films-list-top.js';
import { createSiteFilmsListRatedTemplate } from './view/site-films-list-rated.js';
import { createCardTemplate } from './view/card.js';
import { createShowMoreButtonTemplate } from './view/show-more-button.js';
import { createPopupTemplate } from './view/popup.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(siteHeaderElement, createSiteProfileRatingTemplate(), 'beforeend');
render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createSiteSortingTemplate(), 'beforeend');
render(siteMainElement, createSiteFilmsContainerTemplate(), 'beforeend');

const siteFilmsContainer = siteMainElement.querySelector('.films');

render(siteFilmsContainer, createSiteFilmsListTemplate(), 'beforeend');

const TASK_COUNT = 5;
const siteFilmsList = siteFilmsContainer.querySelector('.films-list__container');

for(let i = 0; i < TASK_COUNT; i++) {
  render(siteFilmsList, createCardTemplate(), 'beforeend');
}

render(siteFilmsContainer, createSiteFilmsListTopTemplate(), 'beforeend');

const TASK_SPECIAL_COUNT = 2;
const siteFilmsListTop = siteFilmsContainer.querySelector('.films-list--extra .films-list__container');

for (let i = 0; i < TASK_SPECIAL_COUNT; i++) {
  render(siteFilmsListTop, createCardTemplate(), 'beforeend');
}

render(siteFilmsContainer, createSiteFilmsListRatedTemplate(), 'beforeend');

const siteFilmsListRated = siteFilmsContainer.querySelector('#rated .films-list__container');

for(let i = 0; i < TASK_SPECIAL_COUNT; i++) {
  render(siteFilmsListRated, createCardTemplate(), 'beforeend');
}

render(siteFilmsList, createShowMoreButtonTemplate(), 'beforeend');
render(siteMainElement, createPopupTemplate(), 'beforeend');
