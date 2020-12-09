<template>
    <div class="container">
        <h1>Материнские платы</h1>
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
        <div class="row mt-2" v-for="(proc, index) in motherboard" :key="proc.id">
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
                motherboard: [],
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
                    let res = await this.$http.get("http://localhost:3000/motherboard");
                    this.motherboard = await res.json();
                    this.errMsg = "";
                } catch (e) {
                    console.error(e);
                }
            },
            async onSave() {
                let motherboard = {
                    name: this.name,
                    code: this.code,
                };
                try {
                    await this.$http.post("http://localhost:3000/motherboard", motherboard);
                    this.updateData();
                } catch (e) {
                    console.error(e);
                }
            },
            async onDelete(id) {
                try {
                    await this.$http.delete("http://localhost:3000/motherboard/" + id);
                    this.updateData()
                } catch(e) {
                    console.error(e);
                }
            },
            EditModeOn(index) {
                this.name = this.motherboard[index].name;
                this.code = this.motherboard[index].code;
                this.id = this.motherboard[index].id;
                this.isEdit = true;
            },
            EditModeOff() {
                this.name = "";
                this.code = "";
                this.id = "";
                this.isEdit = false;
            },
            async onSaveEdit(id) {
                let motherboard = {
                    name: this.name,
                    code: this.code,
                    id: this.id
                };
                try {
                    await this.$http.put("http://localhost:3000/motherboard/" + id, motherboard);
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
