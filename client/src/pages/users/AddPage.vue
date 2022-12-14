<template>
    <div class="q-pa-md">
      <q-breadcrumbs gutter="sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="Quản lý người dùng" />
        <q-breadcrumbs-el label="Danh sách người dùng" />
        <q-breadcrumbs-el label="Thêm mới người dùng" />
      </q-breadcrumbs>
    </div>
    <div class="tw-grid tw-mx-auto tw-mt-20 registor--form tw-max-w-[1100px] font-mono">
      <div class="tw-text-[30px] tw-font-[500] ">Đăng Ký</div>
      <div class="tw-border-solid tw-border-b-2 tw-border-zinc-900">Nhanh chóng và dễ dàng</div>
      <div class="tw-grid-cols-6 tw-grid tw-gap-4 tw-mt-10">
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <p>Name</p>
          <q-input outlined v-model="userForm.name" dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <p>Username</p>
          <q-input v-model="userForm.username" outlined dense/>
        </div>
        <div class="tw-col-span-6">
          <p>Email *</p>
          <q-input v-model="userForm.email" outlined dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-2 md:tw-col-span-2">
          <p>Password</p>
          <q-input v-model="userForm.password" outlined dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-2 md:tw-col-span-2">
          <p>Role</p>
          <q-input v-model="userForm.role" outlined dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-2 md:tw-col-span-2">
          <p>City</p>
          <q-select outlined v-model="userForm.city" dense :options="options">
          </q-select>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <p>Zipcode</p>
          <q-input v-model="userForm.zipcode" outlined dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <p>Phone</p>
          <q-input v-model="userForm.phone" outlined dense/>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <q-btn @click="beforeSubmmit()" class="tw-text-[18px] tw-font-[500] tw-w-[100%]" color="blue-7">Đăng kí</q-btn>
        </div>
        <div class="tw-col-span-6 xl:tw-col-span-3 md:tw-col-span-3">
          <q-btn :outline="true" @click="beforeCancel()" class="tw-text-[18px] tw-font-[500] tw-w-[100%]" color="grey-11" text-color="grey-10">Huỷ</q-btn>
        </div>
      </div>
      <div>
        <q-dialog v-model="promptSubmit" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h5">Xác Nhận</div>
              <div class="text-h7">Bạn có đồng ý đăng ký?</div>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Ok" v-close-popup @click="submit()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
      <div>
        <q-dialog v-model="promptCancel" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h5">Xác Nhận Huỷ</div>
              <div class="text-h7">Bạn có đồng ý huỷ đăng ký?</div>
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Ok" v-close-popup @click="Cancel()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  // import toast from 'utilities/toast';
  
  // 1) ======= INITIALIZATION ========
const router = useRouter();
  // // ==> 1.1) state and getters
  // ==> 1.2) actions
  // const { setLoading } = useAppStore();
  // 2) ======= VARIABLE REF ========
const userForm = ref({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    zipcode: '',
    city: '',
    role: '',
  });
  
  const promptSubmit = ref(false);
  // khai bao bien promptSubmit cho dialog submit
  const promptCancel = ref(false);
  // khai bao bien promptCancel cho dialog cancel
  const options = ref(['Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield', 'Baltimore', 'Barnstable', 'Baton Rouge', 'Beaumont', 'Bel Air', 'Bellevue', 'Berkeley', 'Bethlehem', 'Billings', 'Birmingham', 'Bloomington', 'Boise', 'Boise City', 'Bonita Springs', 'Boston', 'Boulder', 'Bradenton', 'Bremerton', 'Bridgeport', 'Brighton', 'Brownsville', 'Bryan', 'Buffalo', 'Burbank', 'Burlington', 'Cambridge', 'Canton', 'Cape Coral', 'Carrollton', 'Cary', 'Cathedral City', 'Cedar Rapids', 'Champaign', 'Chandler', 'Charleston', 'Charlotte', 'Chattanooga', 'Chesapeake', 'Chicago', 'Chula Vista', 'Cincinnati', 'Clarke County', 'Clarksville', 'Clearwater', 'Cleveland']);
  // khai bao phần tử options có giá trị là 1 mảng chứa tên các thành phố
  // 3) ======= METHOD/FUNCTION ========
  const beforeSubmmit = () => {
    promptSubmit.value = true;
  };
  const beforeCancel = () => {
    promptCancel.value = true;
  };
  const submit = async () => {
    console.log(userForm.value);
    const requestOptions ={
    method: "POST",
    headers : {
      "Content-Type":"application/json" 
    },
    body: JSON.stringify({
      name: userForm.value.name,
      username: userForm.value.username,
      password: userForm.value.password,
      email: userForm.value.email,
      phone: userForm.value.phone,
      zipcode: userForm.value.zipcode,
      city: userForm.value.city,
      role: userForm.value.role
    })
  }
  console.log({requestOptions});
  const result = await fetch("http://localhost:5000/crud/new", requestOptions);
    router.push('/users');
    promptSubmit.value = false;
  };
const Cancel = () => {
    router.push('/users');
    promptCancel.value = false;
  };
</script>
<style lang="sass">
.registor--form
    margin: auto
    padding: 1.5rem
    border-radius: 0.5rem
    background-color: rgb(255,255,255)
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
</style>
  