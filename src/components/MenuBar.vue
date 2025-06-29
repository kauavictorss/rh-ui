<template>
  <Menubar :model="items" />
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Cadastrar',
    icon: 'pi pi-plus',
  },
  {
    label: 'Recursos',
    icon: 'pi pi-cog',
    items: [
      {
        label: 'Atualizar',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Remover',
        icon: 'pi pi-trash',
      },
      {
        label: 'Consultar',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Ativos',
            icon: 'pi pi-check',
            to: '/funcionarios-ativos'
          },
          {
            label: 'Intivos',
            icon: 'pi pi-times',
          },
          {
            label: 'Cpf',
            icon: 'pi pi-id-card',
          },
          {
            label: 'Dados da Conta',
            icon: 'pi pi-wallet',
          },
          {
            label: 'Tipo de Conta',
            icon: 'pi pi-credit-card',
          },
          {
            label: 'Especialidade',
            to: '/consulta-funcionarios-ativos'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);
</script>
