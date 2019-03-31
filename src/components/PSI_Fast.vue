<template>
  <div>

    <el-row>
      <!--Server A -->
      <el-col :span="12" align="center">
        <div class="img-container" align="center">
          <img src="../assets/shop.png">
        </div>
        <el-card class="box-card" style="margin-bottom: 10px;">
          <div slot="header">
            <span>Server A [site 1]</span>
          </div>
          <div>
            <el-row>
              <el-col :span="8">
                <img src="../assets/host.png">
              </el-col>
              <el-col :span="16" align="left">

                <el-collapse v-model="serverA.activeNames" >

                  <el-collapse-item title="[Data]" name="1" >
                    <div  class="large-text">
                      <div>oid = 100,  pre_site = A </div>
                      <div>name = Fish_Cnt, <span v-bind:class="{redColor: serverA.active_value}">value = {{serverA.value}}</span> </div>
                      <div class="blueColor"> UNLOCKED </div>
                    </div>
                  </el-collapse-item>

                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{redColor: serverA.active_cmt}">committedVTS = {{serverA.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{redColor: serverA.active_History}">History[100] = {{serverA.History}}</div>
                  </el-collapse-item>

                  <el-collapse-item title="[Transaction]" name="3"  >
                      <div  class="large-text"  v-bind:class="{redColor: serverA.active_tx_no}"> current_tx_no = {{serverA.current_tx_no}} </div>
                      <div class="large-text" v-bind:class="{redColor: serverA.active_tx_md}"> commit_method = {{serverA.commit_method}} </div>
                      <div class="large-text" v-bind:class="{redColor: serverA.active_tx_rt}"> tx_result = {{serverA.tx_result}} </div>
                  </el-collapse-item>

                  <el-collapse-item title="[Buffer]" name="4">
                    <div class="large-text" v-bind:class="{redColor: serverA.active_buffer}"> {{serverA.buffer}} </div>
                  </el-collapse-item>

                </el-collapse>
              </el-col>
            </el-row>
          </div>
        </el-card>


      </el-col>
      <!--Server B -->
      <el-col :span="12" align="center" >
        <div class="img-container" align="center">
          <img src="../assets/cat1.png">
        </div>
        <el-card class="box-card">
          <div slot="header">
            <span>Server B [site 2]</span>
          </div>
          <div>
            <el-row>
              <el-col :span="8">
                <img src="../assets/host.png">
              </el-col>
              <el-col :span="16" align="left">
                <el-collapse v-model="serverB.activeNames" >
                  <el-collapse-item title="[Data]" name="1">
                    <div  class="large-text">
                      <div>oid = 100,  pre_site = A </div>
                      <div>name = Fish_Cnt, <span v-bind:class="{redColor: serverB.active_value}">value = {{serverB.value}}</span> </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{redColor: serverB.active_cmt}">committedVTS = {{serverB.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{redColor: serverB.active_History}">History[100] = {{serverB.History}}</div>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>



    <el-row>
      <div align="center">
        <el-button type="primary" @click="emulate()">go</el-button>
      </div>
    </el-row>

  </div>

</template>

<script>
    export default {
        name: "PSI_Fast",
        data(){
          return{

            currentStep:1,

            serverA:{

              activeNames:[],

              value : "5",
              committedVTS : "[2,3]",
              History: "<1,1> , Fish_Cnt = 5",
              current_tx_no : "NULL",
              commit_method: "NULL",
              tx_result:"NULL",
              buffer: "NULL",

              active_value:false,
              active_History:false,
              active_cmt:false,

              active_tx_no:false,
              active_tx_md:false,
              active_tx_rt:false,
              active_buffer:false
            },

            serverB:{


              activeNames:[],
              value : "5",
              committedVTS : "[2,3]",
              History: "NULL",

              active_value:false,
              active_History:false,
              active_cmt:false,
            },
          }
        },

        methods: {
          serverA_exec() {
            this.serverA.current_tx_no = 3
            this.serverA.commit_method = "FAST_COMMIT"
            this.serverA.buffer = "(Write) Fish_Cnt = 10"

            this.serverA.active_tx_no = true
            this.serverA.active_tx_md = true
            this.serverA.active_buffer = true
          },

          check_process(){
            //check
            this.serverA.History = "<1,3>, Fish_Cnt = 10"
            this.serverA.active_History = true
          },

          serverA_commit(){
            this.serverA.tx_result="Commit"
            this.serverA.value = 10
            this.serverA.committedVTS = "[3,3]"

            this.serverA.active_tx_rt = true
            this.serverA.active_value = true
            this.serverA.active_cmt = true

            this.serverA.active_tx_no = false
            this.serverA.active_tx_md = false
            this.serverA.active_buffer = false
            this.serverA.active_History = false

          },

          serverA_propogate(){

            this.serverB.value = 10
            this.serverB.committedVTS = [3,3]

            this.serverB.active_value = true
            this.serverB.active_cmt = true

            this.serverA.active_tx_rt = false

          },

          emulate(){
            switch (this.currentStep) {
              case 1: this.serverA_exec()
                      this.currentStep++
                      break
              case 2: this.check_process()
                      this.currentStep++
                      break
              case 3: this.serverA_commit()
                      this.currentStep++
                      break
              case 4: this.serverA_propogate()
                      this.currentStep++
                      break
            }
          }


        }
    }
</script>

<style scoped>

  .box-card {
    width: 650px;
    margin-bottom: 20px;
  }

  .large-text{
    font-size: 16px ;
    font-family: Consolas;
  }

  .img-container{
    min-height: 200px;
    margin-bottom: 10px;
  }

  .redColor{
    color : red
  }

  .blueColor{
    color : blue
  }
</style>
