var duels = new Vue({
    el: ".window",
    data: {
        style: 0,
        offName: "Carabine",
        nameGun: "carabine",
        price: 0,
    },
    methods: {
        setWeapon(name, offname){
            this.offName = offname;
            this.nameGun = name;
        },
        createMatch(){
            mp.trigger("client_createDuel", this.nameGun, this.price);
        }
    }
});