<template>
  <div>
    <el-row   type="flex"  justify="center"  >
      <!--Server B -->
      <el-col :span="8" align="center" >
        <div class="img-container" align="center">
          <img src="../assets/cat1.png">
          <p>Alice wants to make friend with Snoopy</p>
        </div>
        <el-card class="box-card">
          <div slot="header">
            <span>Server B [site 2]</span>
          </div>
          <div>
            <el-row>
              <el-col :span="6">
                <img src="../assets/host.png">
              </el-col>
              <el-col :span="16" align="left">

                <el-collapse v-model="serverB.activeNames" @change="handleChange">
                  <el-collapse-item title="[Data]" name="1">
                    <div  class="large-text">
                      <div>set_id = 20 , pre_site = A , </div>
                      <div>name = Followers ,</div>
                      <div v-bind:class="{changingB: serverB.active_value}">value = {{serverB.value}}</div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingB: serverB.active_cmt}">committedVTS = {{serverB.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingB: serverB.active_History}">History[20] = {{serverB.History}}</div>
                  </el-collapse-item>
                  <el-collapse-item title="[Transaction]" name="3"  >
                    <div  class="large-text"  v-bind:class="{changingB: serverB.active_tx_no}"> current_tx_no = {{serverB.current_tx_no}} </div>
                    <div class="large-text" v-bind:class="{changingB: serverB.active_tx_md}"> commit_method = {{serverB.commit_method}} </div>
                    <div class="large-text" v-bind:class="{changingB: serverB.active_tx_rt}"> tx_result = {{serverB.tx_result}} </div>
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
          <img src="../assets/dog.jpg">
          <p>I'm Snoopy</p>
        </div>
        <el-card class="box-card" style="margin-bottom: 10px;">
          <div slot="header">
            <span>Server A [site 1]</span>
          </div>
          <div>
            <el-row>
              <el-col :span="6">
                <img src="../assets/host.png">
              </el-col>
              <el-col :span="16" align="left">

                <el-collapse v-model="serverA.activeNames" @change="handleChange">
                  <el-collapse-item title="[Data]" name="1" >
                    <div  class="large-text">
                      <div>set_id = 20 , pre_site = A , </div>
                      <div>name = Followers ,</div>
                      <div v-bind:class="{changingB: serverA.active_value}">value = {{serverA.value}}</div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingB: serverA.active_cmt}">committedVTS = {{serverA.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingB: serverA.active_History}">History[20] = {{serverA.History}}</div>
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
          <img src="../assets/cat2.png">
          <p>Bob wants to forget Snoopy</p>
        </div>
        <el-card class="box-card">
          <div slot="header" >
            <span>Server C [site 3]</span>
          </div>
          <div>
            <el-row>
              <el-col :span="6">
                <img src="../assets/host.png">

              </el-col>
              <el-col :span="16" align="left">
                <el-collapse v-model="serverC.activeNames" @change="handleChange">
                  <el-collapse-item title="[Data]" name="1">
                    <div  class="large-text">
                      <div>set_id = 20 , pre_site = A , </div>
                      <div>name = Followers ,</div>
                      <div v-bind:class="{changingC: serverC.active_value , changingB: serverC.active_valueB}">value = {{serverC.value}}</div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="[Status]" name="2">
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_cmt, changingB: serverC.active_cmtB}">committedVTS = {{serverC.committedVTS}}</div>
                    <div  class="large-text" v-bind:class="{changingC: serverC.active_History}">History[20] = {{serverC.History}}</div>
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
        name: "PSI_Cset",
        data(){
          return{

            currentStep:0,

            serverA:{
              activeNames:[],
              value : "{ Carl:1, Bob:1 }",
              committedVTS : "[2,1,3]",
              History: "NULL ",
              vote:"NULL",

              isLocked:false,
              active_value:false,
              active_History:false,
              active_cmt:false,
              active_vote_B:false,
              active_vote_C:false
            },

            serverB:{
              activeNames:[],
              value : "{ Carl:1, Bob:1 }",
              committedVTS : "[2,1,3]",
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
              activeNames:[],
              value : "{ Carl:1, Bob:1 }",
              committedVTS : "[2,1,3]",
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
            this.serverB.current_tx_no = 2
            this.serverB.commit_method = "FAST_COMMIT"
            this.serverB.buffer = "(setAdd) <20, ADD('Alice')>"

            this.serverB.active_tx_no = true
            this.serverB.active_tx_md = true
            this.serverB.active_buffer = true
          },

          serverC_exec(){
            this.serverC.current_tx_no = 4
            this.serverC.commit_method = "FAST_COMMIT"
            this.serverC.buffer = "(setDel) <20, DEL('Bob')>"

            this.serverC.active_tx_no = true
            this.serverC.active_tx_md = true
            this.serverC.active_buffer = true
          },

          serverB_commit(){

            this.serverB.History = "<2,2> <20, ADD('Alice')>"
            this.serverB.tx_result="Commit"
            this.serverB.value = "{ Carl:1, Bob:1, Alice:1 }"
            this.serverB.committedVTS = "[2,2,3]"

            this.serverB.active_tx_no = false
            this.serverB.active_tx_md = false
            this.serverB.active_buffer = false

            this.serverB.active_History = true
            this.serverB.active_tx_rt = true
            this.serverB.active_value = true
            this.serverB.active_cmt = true
          },


          serverC_commit(){

            this.serverC.History = "<3,4> <20, DEL('Bob')>"
            this.serverC.tx_result="Commit"
            this.serverC.value = "{ Carl:1 }"
            this.serverC.committedVTS = "[2,1,4]"

            this.serverC.active_tx_no = false
            this.serverC.active_tx_md = false
            this.serverC.active_buffer = false

            this.serverC.active_History = true
            this.serverC.active_tx_rt = true
            this.serverC.active_value = true
            this.serverC.active_cmt = true
          },

          serverB_propogate(){
            this.serverA.value = "{ Carl:1, Bob:1, Alice:1 }"
            this.serverA.committedVTS = "[2,2,3]"
            this.serverA.History = "<2,2> <20, ADD('Alice')> "

            this.serverC.value = "{ Carl:1, Alice:1 }"
            this.serverC.committedVTS = "[2,2,4]"
            this.serverC.History = "<3,4> <20, DEL('Bob')>, <2,2> <20, ADD('Alice')> "

            this.serverB.History ="NULL"

            this.serverB.active_tx_rt = false
            this.serverB.active_History = false

            this.serverA.active_value = true
            this.serverA.active_cmt = true
            this.serverA.active_History = true

            this.serverC.active_value = true
            this.serverC.active_cmt = true
            this.serverC.active_History = true
          },

          serverC_propogate(){
            this.serverA.value = "{ Carl:1,Alice:1 }"
            this.serverA.committedVTS = "[2,2,4]"
            this.serverA.History = "<2,2> <20, ADD('Alice')>, <3,4> <20, DEL('Bob')>"

            this.serverB.value = "{ Carl:1,Alice:1 }"
            this.serverB.committedVTS = "[2,2,4]"
            this.serverB.History = "<3,4> <20, DEL('Bob')>"

            this.serverC.History = "NULL"

            this.serverC.active_tx_rt = false
            this.serverC.active_History = false

            this.serverB.active_value = true
            this.serverB.active_cmt = true
            this.serverB.active_History = true

            this.serverC.active_value = true
            this.serverC.active_cmt = true
            this.serverC.active_History = true
          },

          openCalp(){
            this.serverA.activeNames = ["1","2","3"]
            this.serverB.activeNames = ["1","2","3","4"]
            this.serverC.activeNames = ["1","2","3","4"]
          }

          ,

          emulate(){
            switch (this.currentStep) {

              case 0: this.openCalp()
                this.currentStep++
                break

              case 1: this.serverB_exec()
                this.currentStep++
                break
              case 2: this.serverC_exec()
                this.currentStep++
                break
              case 3: this.serverB_commit()
                this.currentStep++
                break
              case 4: this.serverC_commit()
                this.currentStep++
                break
              case 5: this.serverB_propogate()
                this.currentStep++
                break
              case 6: this.serverC_propogate()
                this.currentStep++
                break
            }
          }
        }
    }
</script>

<style scoped>
  .box-card {
    width: 600px;
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

  .changingB{
    color : red
  }

  .changingC{
    color : blue
  }
</style>
