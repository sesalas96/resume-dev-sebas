<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a
        class="navbar-brand js-scroll-trigger"
        href="#page-top"
        style="{z-index: 100;}"
      >
        <span
          class="d-block d-lg-none"
          style="color: white; opacity: 0.7; font-weight: bold;"
          >Resume Dev Sebas</span
        >
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.jpg"
            alt=""
          />
        </span>
      </a>
      <button
        id="toggle"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#about')"
              href="#about"
              >{{ $t("links.about") }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#education')"
              href="#education"
              >{{ $t("links.education") }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#experience')"
              href="#experience"
              >{{ $t("links.experience") }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#skills')"
              href="#skills"
              >{{ $t("links.skills") }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#interests')"
              href="#interests"
              >{{ $t("links.interests") }}</a
            >
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
              <DarkModeBtn />
            </div>
          </li>
          <li class="nav-item">
            <div style=" bottom:15px; ;z-index:100;" class="bb">
              <nuxt-link
                class="btn"
                :class="
                  this.$colorMode.preference !== 'light'
                    ? 'btn-light'
                    : 'btn-dark'
                "
                :to="switchLocalePath('en')"
                >EN</nuxt-link
              >
              <nuxt-link
                class="btn"
                :class="
                  this.$colorMode.preference !== 'light'
                    ? 'btn-light'
                    : 'btn-dark'
                "
                :to="switchLocalePath('es')"
                >ES</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="resume">
      <Resume />
    </div>
  </section>
</template>

<script>
import Resume from "@/components/Resume";
import DarkModeBtn from "@/components/DarkModeBtn";
import jump from "jump.js";

export default {
  components: {
    Resume,
    DarkModeBtn
  },
  head() {
    return {
      title: "Sebastian Salas"
    };
  },
  methods: {
    jumpTo(element) {
      this.isMobile() ? document.getElementById("toggle").click() : null;
      jump(element);
    },
    isMobile() {
      return window.innerWidth < 992;
    }
  }
};
</script>

<style scoped>
.sebas {
  display: none;
}
.btn-light {
  color: white;
  background: var(--color-primary-hover);
  border: none;
}
.btn-dark {
  color: white;
  background: var(--color-primary-hover);
  border: none;
}
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
.bb {
  position: fixed;
  right: 25px;
  margin-bottom: 5px;
}
@media (min-width: 992px) {
  .resume {
    padding-top: 0;
    padding-left: 20rem;
  }
  .bb {
    position: absolute;
    left: 200px;
  }
}
</style>
