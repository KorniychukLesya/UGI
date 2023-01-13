<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    data: {
      type: Array,
      default: () => [1, 1, 1, 1, 1],
    },
  },
  data() {
    return {
      chartData: {
        labels: Object.values(this.data),
        datasets: [
          {
            data: Object.values(this.data),
            label: "emails",
            backgroundColor: "#1238C0",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  mounted() {
    console.log(this.data);
  },
};
</script>
