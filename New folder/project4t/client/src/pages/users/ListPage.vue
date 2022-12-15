<template>
  <div class="q-pa-md">
    <q-breadcrumbs gutter="sm">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Quản lý người dùng" />
      <q-breadcrumbs-el label="Danh sách người dùng" />
    </q-breadcrumbs>

    <q-card class="search___condition tw-mt-2">
      <q-card-section>
        <div class="tw-grid tw-grid-rows-2 tw-gap-y-2">
          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-4">
            <div>
              <q-input outlined v-model="searchForm.name" label="Tên" dense />
            </div>
            <div>
              <q-input outlined v-model="searchForm.email" label="Email" dense />
            </div>
            <div>
              <q-input outlined v-model="searchForm.phone" label="Điện thoại" dense />
            </div>
          </div>

          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-x-4 tw-justify-items-end">
            <div class="tw-col-span-3">
              <q-btn color="primary" label="Tìm kiếm" @click.prevent="getListUsers" />
            </div>
          </div>
      </div>
      </q-card-section>
    </q-card>
    <q-card class="search___list___result tw-mt-2">
      <q-card-section>
        <q-table
          :grid="$q.screen.xs"
          class="users-list-header-table"
          :rows="listUsers"
          :columns="columns"
          :rows-per-page-options="[0]"
          @row-dblclick="viewUser"
          row-key="id"
          flat
          bordered
        >
          <template v-slot:top-right>
            <q-btn
              color="primary"
              icon-right="add"
              label="Thêm mới người dùng"
              no-caps
              @click="addUser"
            />
          </template>
      </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 1) ======= INITIALIZATION ========
const router = useRouter();
const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
  }, {
    name: 'name',
    label: 'Name',
    align: 'left',
    field: 'name',
    classes: 'cursor-pointer',
  },
  {
    name: 'username',
    label: 'Username',
    align: 'left',
    field: 'username',
    classes: 'cursor-pointer',
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left',
    field: 'email',
    classes: 'cursor-pointer',
    headerStyle: 'width: 500px',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    align: 'left',
    field: 'phone',
    classes: 'cursor-pointer',
  },
  {
    name: 'city',
    label: 'City',
    align: 'left',
    field: 'city',
    classes: 'cursor-pointer',
  },
  {
    name: 'zipcode',
    label: 'Zipcode',
    align: 'left',
    field: 'zipcode',
    classes: 'cursor-pointer',
  },
  {
    name: 'role',
    required: true,
    label: 'Role',
    align: 'left',
    field: 'role',
  },
];

// ==> 1.1) state and getters
// ==> 1.2) actions
// ==> 1.3) Others

// 2) ======= VARIABLE REF ========

const searchForm = ref({
  name: '',
  email: '',
  phone: '',
});

const listUsers = ref([]);
// khai bao listUser
// 3) ======= METHOD/FUNCTION ========

const getListUsers = async () => {
  // lay danh sach user
  const res = await fetch('http://localhost:5000/crud');
  listUsers.value = await res.json();
};

const addUser = () => {
  router.push('/add');
};

const viewUser = (event, row, index) => {
  // hien thi thong tin chi tiet user
  console.log('Xem chi tiết thông tin người dùng', event, row, index);
  router.push({ name: 'users-view', params: { id: row.id } });
};

// 4) ======= VUEJS LIFECYCLE ========
onMounted(() => {
  getListUsers();
});
</script>

<style lang="sass">
.users-list-header-table
  /* height or max-height is important */
  height: 40rem

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    // background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  td:nth-child(2)
    background-color: #1976D2 !important
    color: white

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
