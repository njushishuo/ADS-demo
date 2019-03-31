<template>
  <div>
    <el-row   type="flex"  justify="center"  >
      <!--Server B -->
      <el-col :span="8" align="center" >
        <div class="img-container" align="center">
          <img src="../assets/cat1.png">
          <img src="../assets/fish2.jpg">
        </div>
        <el-card class="box-card">
          <div slot="header">
            <span>Server B</span>
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
                      <div>name = Fish_Cnt, <span v-bind:class="{changingB: serverB.active_value}">value = {{serverB.value}}</span> </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingB: serverB.active_cmt}">committedVTS = {{serverB.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingB: serverB.active_History}">History[100] = {{serverB.History}}</div>
                  </el-collapse-item>
                  <el-collapse-item title="[Transaction]" name="3"  >
                    <divv v-bind:class="{ changingB : active}">
                      <div  class="large-text"  v-bind:class="{changingB: serverB.active_tx_no}"> current_tx_no = {{serverB.current_tx_no}} </div>
                      <div class="large-text" v-bind:class="{changingB: serverB.active_tx_md}"> commit_method = {{serverB.commit_method}} </div>
                      <div class="large-text" v-bind:class="{changingB: serverB.active_tx_rt}"> tx_result = {{serverB.tx_result}} </div>
                    </divv>

                  </el-collapse-item>
                  <el-collapse-item title="[Buffer]" name="4">
                    <div class="large-text" v-bind:class="{changingB: serverB.active_buffer}"> {{serverB.buffer}} </div>
                  </el-collapse-item>
                </el-collapse>

              </el-col>
            </el-row>

          </div>
        </el-card>


      </el-col>

      <!--Server A -->
      <el-col :span="8" align="center">
        <div class="img-container" align="center">
          <img src="../assets/shop.png">
          <p>10 fish on sale</p>
        </div>
        <el-card class="box-card" style="margin-bottom: 10px;">
          <div slot="header">
            <span>Server A</span>
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
                      <div>name = Fish_Cnt, <span v-bind:class="{changingB: serverA.active_value}">value = {{serverA.value}}</span> </div>
                      <div v-if="serverA.isLocked" class="redColor"> LOCKED </div>
                      <div v-if="!serverA.isLocked" class="blueColor"> UNLOCKED </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingB: serverA.active_cmt}">committedVTS = {{serverA.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingB: serverA.active_History}">History[100] = {{serverA.History}}</div>
                  </el-collapse-item>
                  <el-collapse-item title="[Vote]" name="3">
                    <div  class="large-text" v-bind:class="{changingB: serverA.active_vote_B,changingC: serverA.active_vote_C}">{{serverA.vote}}</div>
                  </el-collapse-item>
                </el-collapse>

              </el-col>
            </el-row>
          </div>
        </el-card>


      </el-col>

      <!--Server c -->
      <el-col :span="8"  align="center">

        <div class="img-container" align="center">
          <img src="../assets/fish3.jpg">
          <img src="../assets/cat2.png">
        </div>
        <el-card class="box-card">
          <div slot="header" >
            <span>Server C</span>
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
                      <div>name = Fish_Cnt, <span v-bind:class="{changingC: serverC.active_value , changingB: serverC.active_valueB}">value = {{serverC.value}}</span> </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_cmt, changingB: serverC.active_cmtB}">committedVTS = {{serverC.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_History}">History[100] = {{serverC.History}}</div>
                  </el-collapse-item>
                  <el-collapse-item title="[Transaction]" name="3">
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_tx_no}"> current_tx_no = {{serverC.current_tx_no}} </div>
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_tx_md}"> commit_method = {{serverC.commit_method}} </div>
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_tx_rt}"> tx_result = {{serverC.tx_result}} </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Buffer]" name="4">
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_buffer}"> {{serverC.buffer}} </div>
                  </el-collapse-item>
                </el-collapse>

              </el-col>
            </el-row>
          </div>
        </el-card>


      </el-col>
    </el-row>


    <div align="center">
      <el-button type="primary" @click="emulate()">go</el-button>
    </div>
  </div>





</template>

<script>
    export default {
        name: "PSI",
        data(){
          return{

            currentStep:1,

            serverA:{
              value : "10",
              committedVTS : "[3,4,5]",
              History: "<3,2> , Fish_Cnt = 10",
              vote:"NULL",

              isLocked:false,
              active_value:false,
              active_History:false,
              active_cmt:false,
              active_vote_B:false,
              active_vote_C:false
            },

            serverB:{
              value : "10",
              committedVTS : "[3,4,5]",
              History: "NULL",
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

            serverC:{
              value : "10",
              committedVTS : "[3,4,5]",
              History: "NULL",

              current_tx_no : "NULL",
              commit_method: "NULL",
              tx_result:"NULL",
              buffer: "NULL",

              active_value:false,
              active_valueB:false,
              active_History:false,
              active_cmt:false,
              active_cmtB:false,
              active_tx_no:false,
              active_tx_md:false,
              active_tx_rt:false,
              active_buffer:false
            },
          }
        },

        methods:{
          serverB_exec(){
            this.serverB.current_tx_no = 5
            this.serverB.commit_method = "SLOW_COMMIT"
            this.serverB.buffer = "(Write) Fish_Cnt = 8"

            this.serverB.active_tx_no = true
            this.serverB.active_tx_md = true
            this.serverB.active_buffer = true
          },

          serverA_vote_for_B(){
            this.serverA.vote = "YES"
            //lock
            this.serverA.isLocked = true

            this.serverA.active_vote_B = true
            this.serverA.active_vote_C = false
          },

          serverC_exec(){
            this.serverC.current_tx_no = 6
            this.serverC.commit_method = "SLOW_COMMIT"
            this.serverC.buffer = "(Write) Fish_Cnt = 7"

            this.serverC.active_tx_no = true
            this.serverC.active_tx_md = true
            this.serverC.active_buffer = true
          },

          serverA_vote_for_C(){
            this.serverA.vote = "NO Object is locked"
            this.serverA.active_vote_B = false
            this.serverA.active_vote_C = true
          },

          serverC_abort_for_lock(){
            this.serverC.tx_result = "Abort"
            this.serverA.vote="NULL"

            this.serverC.active_tx_rt = true
            this.serverA.active_vote_B = false
            this.serverA.active_vote_C = false

          },

          serverB_commit(){
            this.serverC.current_tx_no = "NULL"
            this.serverC.commit_method = "NULL"
            this.serverC.tx_result = "NULL"
            this.serverC.buffer = "NULL"

            this.serverC.active_tx_no = false
            this.serverC.active_tx_md = false
            this.serverC.active_tx_rt = false
            this.serverC.active_buffer = false

            this.serverB.tx_result="commit"
            this.serverB.value = 8
            this.serverB.committedVTS = "[3,5,5]"
            this.serverB.History = "<2,5>, Fish_Cnt = 8"

            this.serverB.active_tx_no = false
            this.serverB.active_tx_md = false
            this.serverB.active_buffer = false

            this.serverB.active_tx_rt = true
            this.serverB.active_value = true
            this.serverB.active_cmt = true
            this.serverB.active_History = true

          },

          //当接收到广播时释放锁
          serverB_propogate(){
            this.serverA.value = 8
            this.serverA.committedVTS = "[3,5,5]"
            this.serverA.History = "<2,5>, Fish_Cnt = 8"
            //release lock
            this.serverA.isLocked = false


            this.serverB.History = "NULL"
            this.serverB.active_tx_rt = false
            this.serverB.active_History = false

            this.serverA.active_value = true
            this.serverA.active_cmt = true
            this.serverA.active_History = true

          },

          serverC_exec_2(){
            this.serverC.current_tx_no = 6
            this.serverC.commit_method = "SLOW_COMMIT"
            this.serverC.buffer = "(Write) Fish_Cnt = 7"

            this.serverC.active_tx_no = true
            this.serverC.active_tx_md = true
            this.serverC.active_buffer = true
          },

          serverA_vote_for_C_2(){
            this.serverA.vote = "NO Object is modified "
            this.serverA.active_vote_B = false
            this.serverA.active_vote_C = true
          },

          serverC_abort_for_modify(){
            this.serverC.tx_result = "Abort"
            this.serverA.vote="NULL"

            this.serverC.active_tx_rt = true
            this.serverA.active_vote_B = false
            this.serverA.active_vote_C = false
          },

          serverC_receive_propogate(){
            this.serverC.current_tx_no = "NULL"
            this.serverC.commit_method = "NULL"
            this.serverC.tx_result = "NULL"
            this.serverC.buffer = "NULL"

            this.serverC.active_tx_no = false
            this.serverC.active_tx_md = false
            this.serverC.active_tx_rt = false
            this.serverC.active_buffer = false

            this.serverC.value = 8
            this.serverC.committedVTS = "[3,5,5]"
            this.serverC.active_valueB = true
            this.serverC.active_cmtB = true
          },


          emulate(){
            switch (this.currentStep) {
              case 1: this.serverB_exec()
                      this.currentStep++
                      break
              case 2: this.serverA_vote_for_B()
                      this.currentStep++
                      break
              case 3: this.serverC_exec()
                      this.currentStep++
                      break
              case 4: this.serverA_vote_for_C()
                      this.currentStep++
                      break
              case 5: this.serverC_abort_for_lock()
                      this.currentStep++
                      break
              case 6: this.serverB_commit()
                      this.currentStep++
                      break
              case 7: this.serverB_propogate()
                      this.currentStep++
                      break
              case 8: this.serverC_exec_2()
                      this.currentStep++
                      break
              case 9: this.serverA_vote_for_C_2()
                      this.currentStep++
                      break
              case 10:this.serverC_abort_for_modify()
                      this.currentStep++
                      break
              case 11:this.serverC_receive_propogate()
                      this.currentStep++
                      break
            }
          }
        }
    }
</script>

<style scoped>

  .box-card {
    width: 550px;
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
