<template>
  <div class="hello" ref="chartdiv"></div>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

document.title = "Аналитика";

export default {
  mounted() {
    if (localStorage.getItem("leadhit-site-id") === null) {
      this.$router.push("/");
    } else {
      let root = am5.Root.new(this.$refs.chartdiv);

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );

      // Define data
      let data = [
        { date: "2020-07-01", visits: 213 },
        { date: "2020-07-02", visits: 249 },
        { date: "2020-07-03", visits: 179 },
        { date: "2020-07-04", visits: 170 },
        { date: "2020-07-05", visits: 184 },
        { date: "2020-07-06", visits: 202 },
        { date: "2020-07-07", visits: 198 },
        { date: "2020-07-08", visits: 168 },
        { date: "2020-07-09", visits: 176 },
        { date: "2020-07-10", visits: 171 },
        { date: "2020-07-11", visits: 190 },
        { date: "2020-07-12", visits: 154 },
        { date: "2020-07-13", visits: 246 },
        { date: "2020-07-14", visits: 250 },
        { date: "2020-07-15", visits: 227 },
        { date: "2020-07-16", visits: 140 },
        { date: "2020-07-17", visits: 170 },
        { date: "2020-07-18", visits: 125 },
        { date: "2020-07-19", visits: 106 },
        { date: "2020-07-20", visits: 207 },
        { date: "2020-07-21", visits: 222 },
        { date: "2020-07-22", visits: 198 },
        { date: "2020-07-23", visits: 204 },
        { date: "2020-07-24", visits: 213 },
        { date: "2020-07-25", visits: 145 },
        { date: "2020-07-26", visits: 166 },
        { date: "2020-07-27", visits: 163 },
        { date: "2020-07-28", visits: 135 },
        { date: "2020-07-29", visits: 45 },
      ];

      // Заголовок таблицы
      chart.topAxesContainer.children.push(
        am5.Label.new(root, {
          text: "Аналитика по визитам",
          fontSize: 30,
          fontWeight: "500",
          x: am5.p50,
          centerX: am5.p50,
        })
      );

      // Ось Y (Y-axis)
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
          locationX: 0,
        })
      );

      // Ось X (X-Axis)
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "date",
          locationX: 0,
        })
      );
      xAxis.data.setAll(data);

      // График
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Посещения",
          stroke: am5.color(0xff4402),
          fill: am5.color(0xff4402),
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "visits",
          categoryXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "vertical",
            labelText: "{valueY}: {categoryX}",
          }),
        })
      );

      // Фон графика
      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      // Точки
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: am5.color(0xff4402),
          }),
        });
      });

      series.data.setAll(data);

      // Курсор
      chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          xAxis: xAxis,
        })
      );

      chart.get("cursor").lineX.setAll({
        visible: false,
      });

      chart.get("cursor").lineY.setAll({
        visible: false,
      });
    }
  },
};
</script>

<style scoped>
.hello {
  margin: 20px;
  height: 500px;
}
</style>
