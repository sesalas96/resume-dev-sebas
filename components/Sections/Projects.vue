<template>
  <div class="my-auto">
    <h2
      class="mb-5"
      data-aos="fade-up"
      data-aos-delay="90"
      data-aos-duration="1000"
      data-aos-easing="ease-out-quad"
    >
      {{ $t("projects.title") }}
    </h2>

    <CardProject
      :projectInfo="project"
      v-for="project in $t('projects.projectsInfo')"
      :key="project.name"
      class="mb-5"
    />
  </div>
</template>

<script>
import CardProject from "@/components/Sections/CardProject";

export default {
  components: { CardProject },
  data() {
    return {};
  }
};
</script>
