<template>
 <div class="container">
     <h1>Процессоры</h1>
     <div class="form-group">
         <label for>Название</label>
         <input type="text" class="form-control" v-model="name" placeholder="Название" />
         <label for>Артикул</label>
         <input type="text" class="form-control" v-model="code" placeholder="Артикул" />
         <button v-if="isEdit" class="btn btn-primary mt-2" @click="onSaveEdit(id)">Сохранить</button>
         <button v-if="isEdit" class="btn btn-primary mt-2 ml-2" @click="EditModeOff">Отмена</button>
         <button v-else class="btn btn-primary mt-2 save" @click="onSave">Сохранить</button>
         <hr />
     </div>
     <div class="row mt-2" v-for="(proc, index) in cpu" :key="proc.id">
         <div class="col">{{proc.name}}</div>
         <div class="col">{{proc.code}}</div>
         <div class="col">
             <button class="btn btn-danger" @click="onDelete(proc.id)">Удалить</button>
         </div>
         <div class="col">
             <button class="btn btn-primary" @click="EditModeOn(index)">Редактировать</button>
         </div>
     </div>
 </div>
</template>

<script>
    export default {
        name: "App",
        data: function () {
            return {
                cpu: [],
                name: "",
                code: "",
                id: 0,
                errMsg: "",
                isEdit: false
            };
        },
        components: {},
        methods: {
            async updateData() {
                try {
                    let res = await this.$http.get("http://localhost:3000/cpu");
                    this.cpu = await res.json();
                    this.errMsg = "";
                } catch (e) {
                    console.error(e);
                }
            },
            async onSave() {
                let cpu = {
                    name: this.name,
                    code: this.code,
                };
                try {
                    await this.$http.post("http://localhost:3000/cpu", cpu);
                    this.updateData();
                } catch (e) {
                    console.error(e);
                }
            },
            async onDelete(id) {
                try {
                    await this.$http.delete("http://localhost:3000/cpu/" + id);
                    this.updateData()
                } catch(e) {
                    console.error(e);
                }
            },
            EditModeOn(index) {
                this.name = this.cpu[index].name;
                this.code = this.cpu[index].code;
                this.id = this.cpu[index].id;
                this.isEdit = true;
            },
            EditModeOff() {
                this.name = "";
                this.code = "";
                this.id = "";
                this.isEdit = false;
            },
            async onSaveEdit(id) {
                let cpu = {
                    name: this.name,
                    code: this.code,
                    id: this.id
                };
                try {
                    await this.$http.put("http://localhost:3000/cpu/" + id, cpu);
                    this.updateData()
                } catch(e) {
                    console.error(e);
                }
            }
        },
        created() {
            this.updateData()
        }
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    .container {
        margin-top: 15px;
        font-family: 'Roboto', sans-serif;
    }
    label {
        margin-top: 10px;
    }
    label:first-child {
        margin-top: 0px;
    }

</style>
