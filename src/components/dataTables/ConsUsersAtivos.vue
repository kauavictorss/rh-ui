<template>
  <div class="card">
    <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
      <Column field="code" header="Code" sortable="" style="width: 20%"></Column>
      <Column field="name" header="Name" sortable="" style="width: 20%"></Column>
      <Column field="price" header="Price" :sortable="true">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="Category" sortable="" style="width: 20%"></Column>
      <Column field="quantity" header="Quantity" sortable="" style="width: 20%"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

</script>
