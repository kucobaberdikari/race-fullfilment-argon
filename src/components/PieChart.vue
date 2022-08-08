<template>
    <div class="card h-100 bg-white ">
       
        <div class="p-3 card-body ">
           <div class="pb-0 card-header border-0 mb-0 ps-3 bg-white">
            <h6>Expired Stock's</h6>
            </div>
               <div class="chart mt-4">
                <canvas id="pieChart" style="min-height: 300px; height: 300px; max-height: 300px; max-width: 100%;"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from "chart.js/auto";
import $ from "jquery";
    export default{
        name: "PieChart",
        mounted(){
                var donutData        = {
      labels: [
          'Chrome',
          'IE',
          'FireFox',
          'Safari',
          'Opera',
          'Navigator',
      ],
      datasets: [
        {
          data: [700,500,400,600,300,100],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
        }
      ]
    }
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = donutData;
    var pieOptions     = {
      maintainAspectRatio : false,
      responsive : true,
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    new Chart(pieChartCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    })

        }
    }
</script>