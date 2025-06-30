import { createRouter, createWebHistory } from 'vue-router';
import ConsFuncAtivos from '@/components/dataTables/ConsFuncAtivos.vue';
import ConsFuncInativos from '@/components/dataTables/ConsFuncInativos.vue';

const routes = [
  {
    path: '/funcionarios-ativos',
    name: 'FuncionariosAtivos',
    component: ConsFuncAtivos
  },
  {
    path: '/funcionarios-inativos',
    name: 'FuncionariosInativos',
    component: ConsFuncInativos
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
