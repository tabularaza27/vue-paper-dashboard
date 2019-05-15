<template>
  <div>
    <card v-for="task of tasks" :key="task" v-on:click="greet">
      <table style="width:100%;">
        <tr>
          <td style="width: 100px;">
            <span class="stats">{{task.date}}</span>
          </td>
          <td>
            <span class="card-title">{{task.type}}</span>
          </td>
          <td style="width:40px;">
            <button class="ti-map" style="border: none; float:right;"></button>
          </td>
          <td style="width:40px;">
            <button type="button" aria-hidden="true" style="text-align:right; float:right; margin-top:-5px; color:black;" class="close">×</button>
          </td>
        </tr>
      </table>
    </card>
  </div>
</template>

<script>
  export default {
    name: "Tasks",
    data () {
      return {

        /* Our Code*/
        tasks: [
          {
            id:"123",
            type: "Updating",
            date: "2019-02-18",
            trees: [111,222,333,444]
          },
          {
            id:"456",
            type: "Pruning",
            date: "2019-02-18",
            trees: [111,222,333,444]
          },
          {
            id:"789",
            type: "Thinning",
            date: "2019-02-18",
            trees: [123,456]
          }
        ]
      }
    }
  }
</script>


<style>
  .card-title{ font-size: 18px;}
</style>
