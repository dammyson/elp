<template>
  <div class="">
    <b-modal id="EditResident" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <b-table striped responsive hover :items="contact">
              <template #cell(Quick_actions)>
                <b-button v-b-modal.EditResident class="btn btn btn-sm btn-gradient-primary btn-rounded btn-icon btn-secondary">
                  <i class="mdi mdi-pencil" />
                </b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          Name: 'Dickerson',
          Date_of_Birth: '1st January 1990',
          Gender: 'Male',
          Age: 65,
          Admited: '1-22-2022',
          Room: 'D34',
          Mobility: 'Moderate',
          Notifications: '',
          Quick_actions: true,
        },
      ],
    };
  },
};

</script>
