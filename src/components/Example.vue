<script>

export default {
    data: () => {
        return {
            text:"Some Text",
            rawHtml: '<h1 onclick="alert()">Test Message</h1>',//DO NOT USE, EVER!
            someStyle:'background-color:red',
            id:"000-111-222",
            classes:"test-class",
            userText:""
        };
    },
    mounted(){
        let i=1;
        setInterval(() => {
            if(i%3==0){
                this.someStyle = "background-color:red"
            }else{
            this.someStyle = "background-color:yellow"
            }


            this.text="Change"+i;

            if(i%10==0){
                this.userText="Default"
            }

            i++;
            
        }, 1000);
    }, 
    unmounted (){
        console.log("Dismount");
    },
    methods:{

        someMethod(){

            return "Value"
        }
    }

}
</script>


<template>
    <p>Some Test: {{ text }}</p>

    <p v-html="rawHtml"></p>

    <p v-bind:style="someStyle" :id="id" :class="classes">Test!</p>

    <h1>{{ userText }}</h1>
    <input type="text" v-model="userText" />

    <p>{{someMethod()}}</p>

</template>

<style scoped>

.test-class{
    background-color: yellow;
}
    



</style>