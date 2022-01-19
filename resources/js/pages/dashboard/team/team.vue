/* eslint-disable vue/name-property-casing */
<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">
        Your team
      </h3>
      <div class="">
        <b-button v-b-modal="'my-modal'" class="btn btn btn-gradient-primary btn-fw btn-secondary">
          <i class="mdi mdi-account-plus" />
          Add New Team Member
        </b-button>
      </div>
    </div>
    <b-modal id="my-modal" hide-footer>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-row>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="Recipients Role"
                label="Role"
                label-for="role"
              >
                <b-form-select id="role" v-model="newTeam.role" :options="options" size="md" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="Recipients Email"
                label="Email"
                label-for="input-1"
                :state="state"
              >
                <b-form-input id="input-1" v-model="newTeam.email" :state="state" :type="`email`" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-button type="submit" variant="primary">Invite</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-container>
    </b-modal>

    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <!-- <h2 class="card-title">Personal Details</h2>
            <button type="button" class="btn btn btn-gradient-primary btn-rounded btn-icon btn-secondary position-absolute editbtn">
              <i class="mdi mdi-pencil" />
            </button> -->
            <b-table responsive :items="items" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      items: [
        {
          Name: this.$store.state.User.user.name,
          Email: this.$store.state.User.user.email,
          AccessType: this.$store.state.User.user.roles[0],
        },
      ],
      options: [
        { value: 'admin_1', text: 'Admin level 1' },
        { value: 'admin_2', text: 'Admin level 2' },
        { value: 'admin_3', text: 'Admin level 3' },
      ],
      newTeam: {
        role: '',
        email: '',
      },
    };
  },
  computed: {
    state() {
      if (this.newTeam.email !== ''){
        return true;
      } else {
        return null;
      }
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.newTeam);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.newTeam.email = '';
      this.newTeam.role = '';
    },
  },
};

</script>

<style scoped>
    .editbtn{
        top:30px;
        right:30px;
    }
</style>
