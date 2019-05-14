<template>
  <card title="Current Tasks" sub-title="Fulfill these tasks to grow your trees fast">
    <div>
      <div class="row">
        <div class="col-sm-12">
          <div v-for="task in tasks" :key="task" class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-bell"></span>
            <span data-notify="message">{{ task.type }}</span>
          </div>
          <!--<div class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-pie-chart"></span>
            <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
          </div>-->
        </div>
      </div>
      <br>
      <br>

    </div>
  </card>
</template>

<script>
    export default {
      name: "Tasks",
      data () {
        return {

          /* Our Code*/
          tasks: [
            {
              type: "Plant",
              date: "2019-02-18",
              area: "xyz"
            },
            {
              type: "Prune",
              date: "2019-02-18",
              trees: [111,222,333,444]
            },
            {
              type: "Delete",
              date: "2019-02-18",
              trees: [123,456]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
