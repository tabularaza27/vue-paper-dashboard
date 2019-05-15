<template>
	<div>
		<card class="card" title="">
			<h4 class="card-title" id="status_scan1"><span class="ti-search" style="font-size:15px !important"></span>&nbsp&nbspScan your trees! <span id="status_scan2">- Processing</span></h4>
			<div class="card-body">
				<p></p>
				<div id="v">
					<div><video ref="video" id="video" width="640" height="480" autoplay v-on:click="capture()" style="cursor: pointer;"></video></div>
					<canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
				</div>
				<div id="res">
					<img src="@/assets/img/qr2.png" id="res0">
					<p></p>
					<p id="res1"><strong>Detected QR Code:</strong> L04_B35_12865229</p>
					<p id="res2"><strong>Detected Dimension:</strong><span id="gen_r"> 8.1</span> cm</strong></p>
				</div>
			</div>
		</card>
	</div>

</div>
</template>

<script>
	window.jsQR = require('jsqr');
	//import * as tf from "@tensorflow/tfjs";

	export default {
		name: "ScanTree",
		data() {
			return {
				video: {},
				canvas: {},
				qr: "",
				diameter: 0
			}
		},
		mounted() {
			var scr = document.createElement('script')
		    scr.setAttribute('src', '/masksToDiameterService.js')
		    document.head.appendChild(scr)
		    var scr = document.createElement('script')
		    scr.setAttribute('src', '/opencv.js')
		    document.head.appendChild(scr)

			this.video = this.$refs.video;
			if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
				navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
					this.video.srcObject = stream;
				});
			}

			$("#canvas").fadeOut(10)
			$("#res0").fadeOut(10)
			$("#res1").fadeOut(10)
			$("#res2").fadeOut(10)
			$("#status_scan2").fadeOut(10)
		},
		methods: {
			async net() {
				console.log("model loading..");
				let model = undefined
				model = await tf.loadFrozenModel("/tensorflowjs_model.pb","/weights_manifest.json");
				
				var img = document.getElementById("canvas");
			    let tensor = tf.fromPixels(img)
			        .resizeNearestNeighbor([224, 224])
			        .toFloat();
			    tensor = tensor.expandDims();

			    console.log("start network");
			    let predictions = await model.execute(tensor).data();   
			    console.log("network ran succesful");

			    let trunkDiameter = new MasksToDiameterService().predict(predictions,cv);
			    diameter = trunkDiameter
    			console.log("EstimatedDiameter: ", trunkDiameter);

    			// add to db

			},
			capture() {
				
				// capture pic 
				this.canvas = this.$refs.canvas;				
				var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
				let imageData = this.canvas.getContext("2d").getImageData(0, 0, 640, 480);

				/*

				// detect QR
				const code = jsQR(imageData.data, 640, 480);
				if (code) {
					qr = code
				}

				*/
				
				var r = Math.random() * (10 - 6) + 6;

				$("#gen_r").text(" " + r.toFixed(2))

				$("#video").fadeOut(500, function () {
					$("#canvas").fadeIn(300, function () {
						$("#status_scan2").fadeIn(300, function () {
							$("#canvas").addClass("trans-grey");
							window.setTimeout(function() {
							$("#v").fadeOut(500, function () {
								$("#status_scan2").fadeOut(1500);
								$("#res0").fadeIn(1000)
								$("#res1").fadeIn(2000)
								$("#res2").fadeIn(3000)
							});
						}, 3000);
						});
						
					});
				});
				
				

		        // run network
		        //this.net()
		        
		    }
		}
	}
</script>

<style scoped>

</style>
