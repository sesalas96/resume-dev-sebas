<template>
  <div class="my-auto">
    <h2
      class="mb-5"
      data-aos="fade-up"
      data-aos-offset="-200"
      data-aos-delay="90"
      data-aos-duration="1000"
      data-aos-easing="ease-out-quad"
    >
      {{ $t("interests.title") }}
    </h2>
    <p>
      {{ $t("interests.firstBlock") }}
    </p>
    <p class="mb-0">
      {{ $t("interests.secondBlock") }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
