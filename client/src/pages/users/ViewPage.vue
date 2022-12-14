<template>
  <div>
    <q-breadcrumbs gutter="sm">
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Quản lý người dùng" />
      <q-breadcrumbs-el label="Danh sách người dùng" />
      <q-breadcrumbs-el label="Thông tin người dùng" />
    </q-breadcrumbs>
  </div>
  <div class="grid grid-cols-1 gap-6 xl:grid-flow-col xl:grid-rows-2 xl:gap-4 lg:grid-rows-2 infor-user">
  <div class="grid grid-cols-2 xl:gap-16">
    <div class="mx-auto"><img src="../../assets/avatar-facebook-mac-dinh-nam.jpeg" alt=""></div>
    <div class="grid gap-12 md:grid-cols-2 infor-element">
      <div class="element">
        <div class="icon">
            <q-icon name="abc" size="3em"/>
        </div>
        <div>
            <p class="header">Name</p>
            <p>{{user[0]?.name}}</p>
        </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="person" size="3em"/>
          </div>
          <div>
            <p class="header">UserName</p>
            <p>{{user[0]?.username}}</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="email" size="3em"/>
          </div>
          <div>
            <p class="header">Email</p>
            <p>{{user[0]?.email}}</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="home" size="3em"/>
          </div>
          <div>
            <p class="header">Password</p>
            <p>{{user[0]?.password}}</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="123" size="3em"/>
          </div>
          <div>
            <p class="header">Role</p>
            <p v-if="user[0]?.role==1">Staff</p>
            <p v-else>ADMIN</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="123" size="3em"/>
          </div>
          <div>
            <p class="header">ZipCode</p>
            <p>{{user[0]?.zipcode}}</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="call" size="3em"/>
          </div>
          <div>
            <p class="header">Phone</p>
            <p>{{user[0]?.phone}}</p>
          </div>
      </div>
      <div class="element">
        <div class="icon">
            <q-icon name="apartment" size="3em"/>
          </div>
          <div>
            <p class="header">City</p>
            <p>{{user[0]?.city}}</p>
          </div>
      </div>
    </div>
  </div>
  <div class="grid gap-4 xl:grid-cols-4 xl:gap-8 md:grid-cols-2">
    <div class="xl:col-start-2">
      <q-btn  style="width: 100%;" @click="editUser()" color="green-6">
        <q-icon name="edit"/>
        <p>EDIT</p>
      </q-btn>
    </div>
    <div>
      <q-btn style="width: 100%;" @click="beforeDeleteUser()" color="red-10">
        <q-icon name="delete"/>
        <p>DELETE</p>
      </q-btn>
    </div>
  </div>
</div>
  <div>
        <q-dialog v-model="promptDelete" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h5">Xác Nhận Xoá</div>
              <div class="text-h7">Bạn có đồng ý xoá user này?</div>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Ok" v-close-popup @click="deleteUser()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

// 1) ======= INITIALIZATION ========
const router = useRouter();
const props = defineProps({
  id: Number,
});
// 2) ======= VARIABLE REF ========
const promptDelete = ref(false);
const user = ref({});
// 3) ======= METHOD/FUNCTION ========
const getInfoUser = async () => {
  const res = await fetch("http://localhost:5000/crud/"+ props.id);
  user.value = await res.json();
};
const editUser = () => {
  router.push({ name: 'users-edit', params: { id: props.id } });
};
const beforeDeleteUser = () => {
  promptDelete.value = true;
};
const deleteUser = async () => {
  await fetch("http://localhost:5000/crud/delete/" + props.id, {method: "DELETE"});
  router.push('/users');
  
};
// 4) ======= VUEJS LIFECYCLE ========
// onmouted
onMounted(() => {
  getInfoUser();
});
</script>
<style lang="sass">
.view--infor
  padding: 1.5rem
  border-radius: 0.5rem
  background-color: rgb(255,255,255)
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
.infor-user
  max-width: 1100px
  min-width: 350px
  margin: auto
  margin-top: 100px
.icon
  margin-right: 20px
.header
  font-size: 20px
  font-weight: 500
.element
  display: flex
.infor-element
  margin-top: 50px
</style>
