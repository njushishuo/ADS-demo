<template>
  <div>

    <el-row>
      <!--Server A -->
      <el-col :span="12" align="center">
        <div class="img-container" align="center">
          <img src="../assets/shop.png">
          <p>10 fish on sale</p>
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

                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="[Data]" name="1" >
                    <div  class="large-text">
                      <div>oid = 100,  pre_site = A </div>
                      <div>name = Fish_Cnt, <span v-bind:class="{redColor: serverA.active_value}">value = {{serverA.value}}</span> </div>
                      <div v-if="serverA.isLocked" class="redColor"> LOCKED </div>
                      <div v-if="!serverA.isLocked" class="blueColor"> UNLOCKED </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{redColor: serverA.active_cmt}">committedVTS = {{serverA.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{redColor: serverA.active_History}">History[100] = {{serverA.History}}</div>
                  </el-collapse-item>
                </el-collapse>

                <el-collapse-item title="[Transaction]" name="3"  >
                  <divv v-bind:class="{ redColor : active}">
                    <div  class="large-text"  v-bind:class="{redColor: serverA.active_tx_no}"> current_tx_no = {{serverA.current_tx_no}} </div>
                    <div class="large-text" v-bind:class="{redColor: serverA.active_tx_md}"> commit_method = {{serverA.commit_method}} </div>
                    <div class="large-text" v-bind:class="{redColor: serverA.active_tx_rt}"> tx_result = {{serverA.tx_result}} </div>
                  </divv>

                </el-collapse-item>
                <el-collapse-item title="[Buffer]" name="4">
                  <div class="large-text" v-bind:class="{redColor: serverA.active_buffer}"> {{serverA.buffer}} </div>
                </el-collapse-item>

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
                <el-collapse v-model="activeNames" @change="handleChange">
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
              value : "5",
              committedVTS : "[2,3]",
              History: "<1,2> , Fish_Cnt = 5",

              isLocked:false,
              active_value:false,
              active_History:false,
              active_cmt:false,

              active_tx_no:false,
              active_tx_md:false,
              active_tx_rt:false,
              active_buffer:false
            },

            serverB:{
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
          serverB_exec() {
            this.serverB.current_tx_no = 5
            this.serverB.commit_method = "SLOW_COMMIT"
            this.serverB.buffer = "(Write) Fish_Cnt = 8"

            this.serverB.active_tx_no = true
            this.serverB.active_tx_md = true
            this.serverB.active_buffer = true
          },
        }
    }
</script>

<style scoped>
  .box-card {
    width: 650px;
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
