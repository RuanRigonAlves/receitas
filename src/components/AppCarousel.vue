<template>
  <div class="py-5">
    <swiper
      :modules="modules"
      :breakpoints="currentConfig.breakpoints"
      :autoplay="currentConfig.autoplay"
      :space-between="currentConfig.spaceBetween"
      :loop="currentConfig.loop"
      :grab-cursor="true"
      :pagination="currentConfig.pagination"
    >
      <swiper-slide v-for="dado in props.dados" class="swiper-slide">
        <slot :item="dado"> </slot>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDisplay } from "vuetify";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
const { mobile } = useDisplay();

const props = defineProps({
  dados: Array,
  default: () => [],

  variant: {
    default: "default",
  },
});

const breakpoints = {
  breakpointPrincipal: {
    0: {
      slidesPerView: 1,
    },
    1150: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
    2400: {
      slidesPerView: 4,
    },
  },
  breakpointSecundario: {
    0: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 4,
    },
    1150: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 7,
    },
    1900: {
      slidesPerView: 8,
    },

    2400: {
      slidesPerView: 10,
    },
  },
};

const variants = {
  principal: {
    breakpoints: breakpoints.breakpointPrincipal,
    autoplay: { delay: 3500, disableOnInteraction: false },
    loop: true,
    pagination: { clickable: true },
    spaceBetween: 10,
  },
  secundaria: {
    breakpoints: breakpoints.breakpointSecundario,
    autoplay: false,
    loop: false,
    pagination: false,
    spaceBetween: 4,
  },
};

const currentConfig = computed(() => {
  return variants[props.variant] ?? variants.principal;
});
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
}

:deep(.swiper-pagination) {
  position: static !important;
}

:deep(.swiper-pagination-bullet) {
  background: #b69583;
}

:deep(.swiper-pagination-bullet-active) {
  background: #703416;
  transform: scale(1.3);
}
</style>
