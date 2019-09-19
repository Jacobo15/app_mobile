Vue.component("navbar", {
    template: `<div class="positionNav">
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

                <ul class="navbar-nav positionLinks">
                    <li class="nav-item nav-link"  v-on:click="$emit('moment', 'home')">
                        HOME
                    </li>
                    <li class="nav-item nav-link"  v-on:click="$emit('moment', 'shedule')">
                        SHEDULE
                    </li>
                    <li class="nav-item nav-link" v-on:click="$emit('moment', 'tables')">
                        TABLE
                    </li>
                    <li class="nav-item nav-link" v-on:click="$emit('moment', 'teams')">
                        TEAMS
                    </li>
                    <li class="nav-item nav-link" v-on:click="$emit('moment', 'chat')">
                        CHAT
                    </li>
                </ul>
            </nav>
        </div> `,

})


Vue.component("home", {
    props: ["upcomings"],
    template: ` 
<div class="padding">
        <div class="logo">
            <img src="img/nysl_logo.png">
        </div>
        <div class="upcomingGames">
            <h2>Upcoming Games:</h2>
            <div v-for="upcoming in upcomings" v-on:click="$emit('info', 'matchInfo'); $emit('gameinfo', upcoming)" >
            <a href="#">{{ upcoming.TeamLocal }} VS {{ upcoming.TeamVisitor }}</a>
            </div>
        </div>
        </div>

    `
})

Vue.component("shedule", {
    props: ["matchdays"],
    template: `<div class="padding">
    <div class="jornadas">
        <div v-for="matchday in matchdays">
            <button type="button" class="btn btn-success btn-lg"  v-on:click="$emit('moment', 'matchPage'); $emit('matchday', matchday.matchday )">Match day {{matchday.matchday}}</button>
            <p>{{matchday.date}}</p>
        </div>
        
    </div>
    
    </div>`
})

Vue.component("tables", {
    props: ["teams", "maxgoals", "maxassists"],
    template: `  <div class="padding">
        <div class="table">
            <table class="table table-striped">
                <thead>
                    <tr >
                        <th>TEAM</th>
                        <th>G</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GLS</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="allTeam in teams">
                        <td v-on:click="$emit('moment', 'tableTeams');$emit('team', allTeam.Team )">{{ allTeam.Team }}</td>
                        <td>{{ allTeam.G }}</td>
                        <td>{{ allTeam.W }}</td>
                        <td>{{ allTeam.D }}</td>
                        <td>{{ allTeam.L }}</td>
                        <td>{{ allTeam.GLS }}</td>
                        <td>{{ allTeam.PTS }}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Max. Scorer</h2>
            <table class="table table-striped">
                <thead>
                    <tr >
                        <th>NAME</th>
                        <th>GOALS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="maxgoal in maxgoals" >
                        <td v-on:click="$emit('name', maxgoal.name ); $emit('moment', 'tablePlayers')">{{ maxgoal.name }}</td>
                        <td>{{ maxgoal.goals }}</td>
                    </tr>
                </tbody>
            </table>
            <h2>Max. Assistant</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ASSISTS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="maxassist in maxassists">
                        <td v-on:click="$emit('name', maxassist.name ); $emit('moment', 'tablePlayers')">{{maxassist.name}}</td>
                        <td>{{maxassist.assists}}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
            </div>`

})

Vue.component("teams", {
    props: ["logos"],
    template: ` <div class="padding">
        <div class="positionTeams">
            <div class="teams" v-for="allTeam in logos" v-on:click="$emit('moment', 'tableTeams');$emit('team', allTeam.Team )">
                <img v-bind:src="allTeam.TeamLogo">
            </div>
        </div>
    </div> 
    `
})

Vue.component("chat", {
    template: `  <div class="chat">
        <div class="titleChat"><h2>NYSL CHAT</h2>
        </div>
        <div id="chatw" class="chatWindow">
        <div id="mensajes">
        </div>
        </div>
        <div>
            <div class="marginChatSend" >
                <input id="text" type="text" v-on:keyup.enter="$emit('send')" placeholder="Enter a message">
                <button v-on:click="$emit('send')" id="send" >send</button>
                <button v-on:click="$emit('logout')" id="logout" >Logout</button>
            </div>
            <div class="marginChat" >
                <button v-on:click="$emit('login')" id="login" >Login</button>
            </div>   
        </div>
    </div>
    `
})
Vue.component("shedule_jornadas", {
    props: ["matchdays"],
    template: ` <div class="padding">
    <div v-on:click="$emit('return')">
        <img  src="https://img.icons8.com/ios/80/000000/left-filled.png">
    </div>
    <div class="infoMatches" v-for="matchday in matchdays">
        <div v-on:click="$emit('moment', 'tableTeams');$emit('team', matchday.TeamLocal )">
            <img v-bind:src="matchday.TeamLogoLocal">
        </div>
        <div class="informationClick">
            <p>{{ matchday.Hour }}</p>
            <p>VS</p>
            <div v-on:click="$emit('info', 'matchInfo'); $emit('gameinfo', matchday)">
                <img src="https://img.icons8.com/ios/80/000000/info-filled.png">
            </div>
        </div>
        <div v-on:click="$emit('moment', 'tableTeams');$emit('team', matchday.TeamVisitor )">
            <img v-bind:src="matchday.TeamLogoVisitor">
        </div>
    </div>
    </div>
    `
})
Vue.component("shedule_information", {
    props: ["matchinfos", "linelocal", "linevisitor"],
    template: ` <div class="padding">
    <div v-on:click="$emit('return')">
        <img src="https://img.icons8.com/ios/80/000000/left-filled.png">
    </div>
    <div>
    <div class="infoMatches" >
        <div v-on:click="$emit('moment', 'tableTeams');$emit('team', matchinfos.TeamLocal )">
            <img v-bind:src="matchinfos.TeamLogoLocal">
        </div>
        <div class="informationClick">
            <p>VS</p>
        </div>
        <div v-on:click="$emit('moment', 'tableTeams');$emit('team', matchinfos.TeamVisitor )">
            <img v-bind:src="matchinfos.TeamLogoVisitor">
        </div>
    </div>
    <div class="result">
    <h2> Result: {{ matchinfos.Result == 'null' ? 'Not played' : matchinfos.Result }} </h2>
    </div>
    <div class="map">
        <iframe v-bind:src="matchinfos.Map"></iframe>
    </div>
    <div class="adress">
        <p>{{matchinfos.Address}}</p>
    </div>
    </div>
    <div class="line">
        <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Line-up
            </button>
        </p>
    </div>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
            <div class="lineup" >
                <div class="lineupTeam">
                <div v-on:click="$emit('moment', 'tablePlayers'); $emit('name', line.name )" v-for="line in linelocal">
                <p > - {{ line.name }} </p>
                </div>
                </div>
                <div class="lineupTeam">
                <div v-on:click="$emit('moment', 'tablePlayers'); $emit('name', line.name )" v-for="line in linevisitor">
                <p> - {{ line.name }} </p>
                </div>
                </div>
            </div>
            </div>
        
</div>
    </div> 
    
    `
})

Vue.component("table_teams", {
    props: ["allteams"],

    template: ` <div class="padding"> 
    <div v-on:click="$emit('return')">
        <img src="https://img.icons8.com/ios/80/000000/left-filled.png">
    </div>
    <div v-for="allTeam in allteams">
        <div class="imageTeam">
            <img v-bind:src="allTeam.TeamLogo">
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>POSITION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in allTeam.TeamPlayers">
                    <td v-on:click="$emit('moment', 'tablePlayers'); $emit('name', player.name )">{{player.name}}</td>
                    <td>{{player.position}}</td>
                </tr>
            </tbody>
        </table>
 
    </div>
    </div>
    
    `
})

Vue.component("table_players", {
    props: ["allplayers"],
    template: ` <div class="padding">
    <div v-on:click="$emit('return')">
        <img src="https://img.icons8.com/ios/80/000000/left-filled.png">
    </div>
    <div >
        <div>
        <div class="photo">
            <img v-bind:src="allplayers.photo">
        </div>
        <div class="information">
        <h4>Information:</h4>
        <p>Name: {{ allplayers.name }}</p>
        <p>Goals: {{ allplayers.goals }}</p>
        <p>Assists: {{ allplayers.assists }}</p>
        <p>Yellow Card: {{ allplayers.yellowCard }}</p>
        <p>Red Card: {{ allplayers.redCard }}</p>
        <p>Games Played: {{ allplayers.gamesPlayed }}</p>
        </div>
        </div>
    </div>
    </div>
    
    
    `
})

var app = new Vue({
    el: "#vue-app",
    data: {
        actual: ["home"],
        allTeams: [],
        matches: [],
        TeamPlayer: [],
        matchDay: "",
        dataHour: "",
        team: "",
        name: "",
        selectedMatch:{}

    },
    methods: {
        changePage(page) {
            this.actual.push(page) 
        },
        matchPages(match) {
            this.matchDay = match;
        },
        matchHour(hour) {
            this.dataHour = hour;
            console.log(this.dataHour);
        },
        playersTeam(teams) {
            this.team = teams;
            console.log(this.team);
        },
        playersName(names) {
            this.name = names;
            console.log(this.name);
        },
        back: function () {
          this.actual.pop()  
        },
        login() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(() => {
                    app.getMessages();
                    console.log(provider)
                })
                .catch(err => alert(err));
        },
    logout() {
        
        firebase.auth().signOut().then(function() {
            let parent = document.querySelector('#mensajes');
            parent.innerHTML = '';
            })
            .catch(function(error) {
        });
},
        sendMessage() {
            let message = document.querySelector('#text').value;
            let name = firebase.auth().currentUser.displayName;

            let objectToSend = {
                message,
                name,
            };

            firebase
                .database()
                .ref('newChat')
                .push(objectToSend);

            document.querySelector('#text').value = '';
        },

       getMessages() {
            firebase
                .database()
                .ref('newChat')
                .on('value', app.printThem);
        },

         printThem(data) {
            let parent = document.querySelector('#mensajes');
            parent.innerHTML = '';
            for (const key in data.val()) {
                const element = data.val()[key];
                parent.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class=${element.name === firebase.auth().currentUser.displayName ? "my" : "msg"}>
        <p class="name">${element.name}:</p> <p> ${element.message}</p>
        </div>
      </div>`,
                );
               parent.scrollTop = parent.scrollHeight 
            }
        },
        getgameinfo(game){
       this.selectedMatch = game;
    }

    },
    computed: {
        matchdays: function () {
            return Array.from(new Set(this.matches.map(match => match.matchDay)))
                .map(matchday => {
                    return {
                        matchday: matchday,
                        date: this.matches.find(s => s.matchDay == matchday).Date
                    }
                })
        },
        daymatch: function () {

            var match = [];
            for (var i = 0; i < this.matches.length; i++) {
                if (this.matchDay == this.matches[i].matchDay) {
                    match.push(this.matches[i])
                }
            }
            console.log(match);
            return match
        },
        infomatch: function () {
            return this.selectedMatch;
        },
        playersteam: function () {
            var players = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                if (this.team == this.allTeams[i].Team) {
                    players.push(this.allTeams[i])
                    console.log(players)
                }
            }
            console.log(players);
            return players
        },
        playersname: function () {
            var names = {};
            console.log(this.name)
            for (var i = 0; i < this.allTeams.length; i++) {
                for (var j = 0; j < this.allTeams[i].TeamPlayers.length; j++) {
                    if (this.name == this.allTeams[i].TeamPlayers[j].name) {
                        names = this.allTeams[i].TeamPlayers[j]

                    }
                }
            }
            console.log(names);
            return names
        },
        clasification: function () {
            var clas = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                clas.push(this.allTeams[i])


            }
            clas.sort((a, b) => {
                return b.PTS - a.PTS
            })
            console.log(clas);
            return clas

        },

        moregoals: function () {
            var maxg = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                for (var j = 0; j < this.allTeams[i].TeamPlayers.length; j++) {
                    maxg.push(this.allTeams[i].TeamPlayers[j])

                }
            }
            maxg.sort((a, b) => {
                return b.goals - a.goals
            })
            console.log(maxg);
            return maxg.slice(0, 3)

        },
        moreassists: function () {
            var maxa = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                for (var j = 0; j < this.allTeams[i].TeamPlayers.length; j++) {
                    maxa.push(this.allTeams[i].TeamPlayers[j])

                }
            }
            maxa.sort((a, b) => {
                return b.assists - a.assists
            })
            console.log(maxa);
            return maxa.slice(0, 3)

        },
        lineuplocal: function () {
            var local = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                for (var j = 0; j < this.allTeams[i].TeamPlayers.length; j++) {
                    if (this.selectedMatch.TeamLocal == this.allTeams[i].Team) {
                        local.push(this.allTeams[i].TeamPlayers[j])

                    }
                }
            }

            console.log(local);
            return local

        },
        lineupvisitor: function () {
            var visitor = [];
            for (var i = 0; i < this.allTeams.length; i++) {
                for (var j = 0; j < this.allTeams[i].TeamPlayers.length; j++) {
                    if (this.selectedMatch.TeamVisitor == this.allTeams[i].Team) {
                        visitor.push(this.allTeams[i].TeamPlayers[j])

                    }
                }
            }

            console.log(visitor);
            return visitor

        },
        gamesupcoming: function () {
            var upcoming = [];
            for (var i = 0; i < this.matches.length; i++) {
                if (this.matches[i].Result == "null") {
                    upcoming.push(this.matches[i])
                }
            }
            console.log(upcoming)
            return upcoming.slice(0, 3)
        },
    },

    created() {
        fetch("https://api.myjson.com/bins/ceawp", {
                method: "GET",
            })
            .then(function (response) {

                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(function (json) {

                app.allTeams = json.allTeams;
                app.matches = json.matches;



            })
            .catch(function (error) {
                // called when an error occurs anywhere in the chain
                console.log("Request failed: " + error.message);
            });
        
       firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		alert('You are logged in');
		document.querySelector('#login').style.display = 'none';
		document.querySelector('#send').style.display = '';
        document.querySelector('#logout').style.display = '';
        document.querySelector('#text').style.display = '';
        document.querySelector('#chatw').style.display = '';
		app.getMessages();
	} else {
		document.querySelector('#login').style.display = '';
		document.querySelector('#send').style.display = 'none';
        document.querySelector('#logout').style.display = 'none';
        document.querySelector('#text').style.display = 'none';
        document.querySelector('#chatw').style.display = 'none';
	}
});

    },
     
   



});
