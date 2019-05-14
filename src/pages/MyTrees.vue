<template>
    <div>
      <h1>MyTrees</h1>
      <div clas="here-map">
        <div ref="map" v-bind:style="{ width: this.width, height: this.height }"></div>
        {{ this.test }}
      </div>
    </div>

</template>

<script>
    export default {
        name: "MyTrees",
        data () {
          return {
            app_id: "T6hPdKcxcsLUII1Tbioy",
            app_code: "m5btaMmGSjfmgo-tuPHAzg",
            lng: "113.362021",
            lat: "-1.376163",
            width: "100%",
            height: "400px",
            /* Trees */
            trees: [{lng: 113.33215, lat: -1.132015}, {lng: 113.332213, lat: -1.1316030000000001}, {lng: 113.332132, lat: -1.131787}, {lng: 113.33202299999999, lat: -1.131928}, {lng: 113.332, lat: -1.13186}, {lng: 113.332108, lat: -1.131678}, {lng: 113.33211499999999, lat: -1.131537}, {lng: 113.33200500000001, lat: -1.131683}, {lng: 113.33199499999999, lat: -1.1318}, {lng: 113.33195800000001, lat: -1.131838}, {lng: 113.33184299999999, lat: -1.131843}, {lng: 113.33193100000001, lat: -1.131613}, {lng: 113.376042, lat: -1.202252}, {lng: 113.332197, lat: -1.1319059999999999}, {lng: 113.332213, lat: -1.131876}, {lng: 113.33218400000001, lat: -1.131852}, {lng: 113.33214, lat: -1.131869}, {lng: 113.33215200000001, lat: -1.131782}, {lng: 113.332158, lat: -1.131726}, {lng: 113.332117, lat: -1.131733}, {lng: 113.332171, lat: -1.131723}, {lng: 113.33217900000001, lat: -1.131659}, {lng: 113.33218899999999, lat: -1.1316469999999998}, {lng: 113.33219299999999, lat: -1.131637}, {lng: 113.332176, lat: -1.131618}, {lng: 113.33214299999999, lat: -1.131627}, {lng: 113.33215, lat: -1.131642}, {lng: 113.33214299999999, lat: -1.1316540000000002}, {lng: 113.33215700000001, lat: -1.1315709999999999}, {lng: 113.332128, lat: -1.13153}, {lng: 113.33198, lat: -1.131576}, {lng: 113.376348, lat: -1.202736}, {lng: 113.33191699999999, lat: -1.131626}, {lng: 113.331873, lat: -1.131661}, {lng: 113.33186599999999, lat: -1.131683}, {lng: 113.331901, lat: -1.131833}, {lng: 113.331898, lat: -1.131879}],
            /* Here Map API */
            map: {},
            defaultLayers: {},
            plattform: {},
            /* Polygon*/
            points: [{lng: 113.331897, lat: -1.131608}, {lng: 113.332152, lat: -1.131635}, {lng: 113.332178, lat: -1.132185}, {lng: 113.331863, lat: -1.131898}, {lng: 113.331897, lat: -1.131608}],
            linestring: {},
            polyline: {},
            /* Map UI */
            ui: {},
            test: ""
          }


        },
        props: {},
        created() {
          this.platform = new H.service.Platform({
            "app_id": this.app_id,
            "app_code": this.app_code
          });
        },
        mounted() {
          this.defaultLayers = this.platform.createDefaultLayers();

          this.map = new H.Map(
            this.$refs.map,
            this.defaultLayers.satellite.map,
            {
              zoom: 17
              /**center: { lng: this.lng, lat: this.lat }*/
            }
          );
          /* Add UI Elements */
          this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers)

          /* Initialize a polyline with the linestring: */
          this.linestring = new H.geo.LineString()
          this.points.forEach(point => {
            this.linestring.pushPoint(point);
          });
          /* Add polyline to map */
          this.polyline = new H.map.Polyline(this.linestring, { style: { lineWidth: 10 }});

          /* Add the polyline to the map */
          this.map.addObject(this.polyline)
          this.test = this.polyline.getBounds()
          this.map.setViewBounds(this.polyline.getBounds())
          this.map.setZoom(18.5)

          /* Add Trees */
          let svgMarkup = '<svg width="6" height="6" ' +
            'xmlns="http://www.w3.org/2000/svg">' +
            '<rect stroke="white" fill="#FF69B4" x="1" y="1" width="22" ' +
            'height="22" /><text x="12" y="18" font-size="12pt" ' +
            'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
            'fill="white">H</text></svg>';


          for (let tree of this.trees) {
            let icon = new H.map.Icon(svgMarkup),
              coords = {lng: tree.lng, lat: tree.lat},
              marker = new H.map.Marker(coords, {icon: icon});

            // Add the marker to the map and center the map at the location of the marker:
            this.map.addObject(marker);
            // map.setCenter(coords);
          }
        }
    }
</script>

<style scoped>

</style>
