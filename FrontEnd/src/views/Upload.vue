<template>
    <div class="container">
        <div class="">
            <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
            <button v-on:click="submitFile()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Upload",
    data(){
        return {
            file: ''
        }
    },
    methods: {
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            this.$store.dispatch("uploadFile",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>

<style scoped>
    .container {
        display:flex;
        justify-content:center;
        flex-direction:column;
        margin-top:50vh;
    }

</style>
