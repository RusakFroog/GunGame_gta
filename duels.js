var duels = new Vue({
    el: ".window",
    data: {
        duelsCreated: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        style: 0,
        offName: "Carabine",
        nameGun: "carabine",
        price: 0,
        index: 0,

        duelerName: ["","","","","","","","","","","","","","","",""],
        duelerPrice: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        duelerGun: ["Carabine","Carabine","Carabine","","","","","","","","","","","","",""],

    },
    methods: {
        setWeapon(name, offname) {
            this.offName = offname;
            this.nameGun = name;
        },
        addDuelInList(userName, userBet, userGun) {
            this.duelCreated[this.index] = true;
            
            this.duelerName[this.index] = userName;
            this.duelerPrice[this.index] = userBet;
            this.duelerGun[this.index] = userGun;

            this.index += 1;
        },
        exitWindow() {
            mp.trigger("client_exitWindow");
        },
        createMatch() {
            mp.trigger("client_createDuel", this.nameGun, this.price);
        },
        joinToMatch(idMatch) {
            mp.trigger("client_joinDuel", idMatch);
        },
    }
});