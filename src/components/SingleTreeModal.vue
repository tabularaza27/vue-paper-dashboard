<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h5>Tree - {{ this.tree.id }}</h5>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="row">
                <div class="col-12">
                  <card title="Tree Overview" subTitle="">
                    <div slot="raw-content" class="table-responsive">
                      <paper-table v-bind:data="this.tableData" :columns="['Property', 'Value']">

                      </paper-table>
                    </div>
                  </card>
                </div>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    import { PaperTable } from "@/components";

    export default {
        name: "SingleTreeModal",
        data () {
          return {
            columns: ["_id"]
          }
        },
        props: ['tree'],
        computed: {
          tableData () {
            let x = [
              {property: 'id', value: this.tree.id},
              {property: 'species', value: this.tree.species},
              {property: 'height', value: this.tree.height_m + ' m'},
              {property: 'diameter', value: 30 + ' cm'},
              {property: 'age', value: this.tree.age.toFixed(2) + ' years'}
            ];
            return x;
          }
        },
        components: { PaperTable }
    }
</script>

<style>
  .modal-mask {
    position: fixed;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9998;
    width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    /*width: 300px;*/
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
