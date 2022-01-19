/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/html-quotes */
/* eslint-disable vue/html-quotes */
<template>
  <section class="app-sidebar">
    <nav id="sidebar" class="sidebar sidebar-offcanvas">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <div class="nav-profile-image">
              <img :src="require('../../assets/images/faces/face1.jpg').default" alt="profile">
              <span class="login-status online" />
            </div>
            <div class="nav-profile-text d-flex flex-column">
              <span class="font-weight-bold mb-2">{{ this.$store.state.User.user.name }}</span>
              <span class="text-secondary text-small capitalize">{{ this.$store.state.User.user.roles[0] }}</span>
            </div>
            <i class="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li class="nav-item" @click="collapseAll">
          <router-link class="nav-link" to="/">
            <span class="menu-title">Dashboard</span>
            <i class="mdi mdi-home menu-icon" />
          </router-link>
        </li>
        <!-- <li class="nav-item" @click="collapseAll">
          <router-link class="nav-link" to="/settings">
            <span class="menu-title">Settings</span>
            <i class="mdi mdi-setting menu-icon" />
          </router-link>
        </li> -->
        <li class="nav-item">
          <span v-b-toggle="'charts-dropdown'" class="nav-link">
            <span class="menu-title">Settings</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="charts-dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/team">Team</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'sidebar',
  data() {
    return {
      collapses: [
        { show: false },
        { show: false },
        { show: false },
      ],
    };
  },
  watch: {
    $route() {
      document.querySelector('#sidebar').classList.toggle('active');
    },
  },
  mounted() {
    const body = document.querySelector('body');
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function(el) {
      el.addEventListener('mouseover', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName('show');
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit('bv::toggle::collapse', elm_id);
      }
    },
  },
};
</script>
