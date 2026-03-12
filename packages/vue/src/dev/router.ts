import { createRouter, createWebHistory } from 'vue-router';
import TypographyPage from './pages/TypographyPage.vue';
import ButtonsPage from './pages/ButtonsPage.vue';
import FormsPage from './pages/FormsPage.vue';
import CardsPage from './pages/CardsPage.vue';
import InteractivePage from './pages/InteractivePage.vue';
import TokensPage from './pages/TokensPage.vue';

const routes = [
  { path: '/', redirect: '/typography' },
  { path: '/typography', name: 'Typography', component: TypographyPage },
  { path: '/buttons', name: 'Buttons', component: ButtonsPage },
  { path: '/forms', name: 'Forms', component: FormsPage },
  { path: '/cards', name: 'Cards & Layout', component: CardsPage },
  { path: '/interactive', name: 'Interactive', component: InteractivePage },
  { path: '/tokens', name: 'Tokens', component: TokensPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
