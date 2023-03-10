var duels = new Vue({
    el: ".window",
    data: {
        duelsCreated: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false  ],
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
        exitWindow(){
            mp.trigger("client_exitWindow");
        },
        createMatch(){
            mp.trigger("client_createDuel", this.nameGun, this.price);
        },
        joinToMatch(){
            mp.trigger("client_joinDuel");
        },
    }
});