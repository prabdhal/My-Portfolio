(this["webpackJsonpnba-api"]=this["webpackJsonpnba-api"]||[]).push([[0],{159:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t(4),r=t.n(n),c=t(25),i=t.n(c),o=t(15),l=t(16),d=t(21),u=t(20),h=t(40),m=t(22),v=t.n(m),j=t(32),b=t(29),f=t.n(b);var g=function(e){var a,t=e.player,n=e.removePlayerFromList;return Object(s.jsxs)("div",{className:"player-information-container spaced-row",children:[Object(s.jsxs)("div",{className:"player-border",children:[function(e){if(null===e||void 0===e)return"-";var a=e.first_name,t=e.last_name,n="https://nba-players.herokuapp.com/players/".concat(t,"/").concat(a),r="".concat(a," ").concat(t," image");return Object(s.jsx)("img",{src:n,alt:r,height:"75px",width:"100px"})}(t.info),Object(s.jsx)("h4",{className:"player-name-text",children:(a=t.info,null===a||void 0===a?"-":a.first_name+" "+a.last_name)}),Object(s.jsx)("span",{children:Object(s.jsxs)("h5",{className:"player-information-text",children:["Position: ",function(e){return null===e||void 0===e?"-":void 0===e.position?null:e.position}(t.info)," | Team:"," ",function(e){return null===e||void 0===e?"-":void 0===e.team?null:e.team.abbreviation}(t.info)]})})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"nba-close-btn",onClick:function(){return e=t.id,a=t.averages.season,void n(e,a);var e,a},children:"Remove"})})]})};var p=function(e){var a=e.player;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"SEASON"}),function(e){if(null!==e&&void 0!==e)return isNaN(parseInt(e.season))?"-":e.season+" - "+(parseInt(e.season)+1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"GP"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.games_played))?"-":e.games_played.toFixed(0)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"MPG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.min))?"-":e.min}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"PPG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.pts))?"-":(1*e.pts).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"RPG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.reb))?"-":(1*e.reb).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[" ",Object(s.jsx)("h5",{className:"basic-averages-header",children:"APG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.ast))?"-":(1*e.ast).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[" ",Object(s.jsx)("h5",{className:"basic-averages-header",children:"SPG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.stl))?"-":(1*e.stl).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"BPG"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.blk))?"-":(1*e.blk).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"TOs"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.turnover))?"-":(1*e.turnover).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FGM"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fgm))?"-":e.fgm.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FGA"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fga))?"-":e.fga.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FG%"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fg_pct))?"-":(100*e.fg_pct).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[" ",Object(s.jsx)("h5",{className:"basic-averages-header",children:"3PTM"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fg3m))?"-":e.fg3m.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[" ",Object(s.jsx)("h5",{className:"basic-averages-header",children:"3PTA"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fg3a))?"-":e.fg3a.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[" ",Object(s.jsx)("h5",{className:"basic-averages-header",children:"3PT%"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fg3_pct))?"-":(100*e.fg3_pct).toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FTM"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.ftm))?"-":e.ftm.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FTA"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.fta))?"-":e.fta.toFixed(1)}(a.averages)]}),Object(s.jsxs)("div",{className:"stat-container",children:[Object(s.jsx)("h5",{className:"basic-averages-header",children:"FT%"})," ",function(e){if(null!==e&&void 0!==e)return isNaN(parseFloat(e.ft_pct))?"-":(100*e.ft_pct).toFixed(1)}(a.averages)]})]})},x=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var s;return Object(o.a)(this,t),(s=a.call(this,e)).handleSubmit=function(e){e.preventDefault();var a=e.target[0].value;console.log(a),s.getPlayerInformation(),e.target[0].value=null},s.handleChange=function(e){var a=e.target.value;a.length>0&&s.setState({playerName:a})},s.handleSelect=function(e){var a=e.target.value;s.setState({season:a}),console.log(a+" State Year: "+s.state.season)},s.getPlayerInformation=function(){f.a.get("https://www.balldontlie.io/api/v1/players?search=".concat(s.state.playerName)).then(function(){var e=Object(j.a)(v.a.mark((function e(a){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.data.data,n=a.data.data[0].id,!s.checkPlayerExistenceInList(n)){e.next=4;break}return e.abrupt("return");case 4:return r=a.data.data[0],e.next=7,s.getPlayerSeasonAverages(n).then((function(e){if(void 0===r)alert("This player did not exist during the ".concat(s.state.season," season!"));else{if(!(t.length>1)){if(null===e)return;return s.addPlayerToList(n,r,e)}alert("Please specify the name more!")}})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){return alert("This player did not exist during the ".concat(s.state.season," season!"))}))},s.checkPlayerExistenceInList=function(e){var a=!1;return s.state.activePlayersList.find((function(t){t.id===e&&""+t.stats.season===s.state.season&&(a=!0)})),!!a},s.getPlayerSeasonAverages=function(e){return f.a.get("https://www.balldontlie.io/api/v1/season_averages?season=".concat(s.state.season,"&player_ids[]=").concat(e,"&postseason=false")).then((function(e){return console.log(e.data.data[0]),void 0===e.data.data[0].season?void 0:e.data.data[0]})).catch((function(e){return console.log(e),alert("".concat(s.state.playerName," was not active during the ").concat(s.state.season," season")),null}))},s.addPlayerToList=function(e,a,t){var n=Object(h.a)(s.state.activePlayersList);s.setState({activePlayersList:[].concat(Object(h.a)(n),[{id:e,info:a,averages:t}])})},s.removePlayerFromList=function(e,a){var t=Object(h.a)(s.state.activePlayersList).filter((function(a){return a.id!==e}));s.setState({activePlayersList:t})},s.state={searchedPlayers:[],playerName:null,season:"2020",activePlayersList:[]},s}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"nba-center",children:[Object(s.jsx)("form",{className:"nba-form",onSubmit:this.handleSubmit,children:Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{className:"nba-header",children:"Compare Player Stats"}),Object(s.jsx)("input",{className:"nba-input",required:!0,type:"text",value:this.state.value,autoComplete:"off",onChange:this.handleChange,placeholder:"Enter Player Name...",name:"player",id:"player"}),Object(s.jsx)("button",{className:"nba-btn",children:"Submit"})]})}),Object(s.jsx)("div",{className:"player-container",children:this.state.activePlayersList.map((function(a){return Object(s.jsxs)(r.a.Fragment,{children:[console.log(a),Object(s.jsx)(g,{player:a,removePlayerFromList:e.removePlayerFromList},a.id),Object(s.jsx)("div",{className:"basic-stats",children:Object(s.jsx)(p,{player:a},a.id)})]})}))})]})}}]),t}(n.Component),N=t(72),O=t(69),y=t.n(O);t(97);var F=function(e){var a=e.getSelectedDate,t=new Date,c=Object(n.useState)(t),i=Object(N.a)(c,2),o=i[0],l=i[1];function d(e){l(e),a(e)}return Object(n.useEffect)((function(){d(o)}),[]),Object(s.jsx)(r.a.Fragment,{children:Object(s.jsx)(y.a,{className:"nba-input",selected:o,dateFormat:"yyyy-MM-dd",onChange:function(e){return d(e)},minDate:new Date("1979-09-01"),showYearDropdown:!0,scrollableMonthYearDropdown:!0})})};var w=function(e){var a,t=e.gameInfo,n=e.renderGameDate1;function r(e,a){return 0===e.period?null:a?e.home_team_score:e.visitor_team_score}function c(e,a){return a?null===e.home_team||void 0===e.home_team?null:e.home_team.name:a?void 0:null===e.visitor_team||void 0===e.visitor_team?null:e.visitor_team.name}function i(e,a){var t="team-logo ";switch(c(e,a)){case"Hawks":return t+"hawks";case"Celtics":return t+"celtics";case"Nets":return t+"nets";case"Hornets":return t+"hornets";case"Bulls":return t+"bulls";case"Cavaliers":return t+"cavaliers";case"Mavericks":return t+"mavericks";case"Nuggets":return t+"nuggets";case"Pistons":return t+"pistons";case"Warriors":return t+"warriors";case"Rockets":return t+"rockets";case"Pacers":return t+"pacers";case"Clippers":return t+"clippers";case"Lakers":return t+"lakers";case"Grizzlies":return t+"grizzlies";case"Heat":return t+"heat";case"Bucks":return t+"bucks";case"Timberwolves":return t+"timberwolves";case"Pelicans":return t+"pelicans";case"Trail Blazers":return t+"blazers";case"Knicks":return t+"knicks";case"Thunder":return t+"thunder";case"Magic":return t+"magic";case"76ers":return t+"sixers";case"Suns":return t+"suns";case"Kings":return t+"kings";case"Spurs":return t+"spurs";case"Raptors":return t+"raptors";case"Jazz":return t+"jazz";case"Wizards":return t+"wizards"}}function o(e,a){var t="team-score ";if("Final"===e.status){if(a&&e.home_team_score>e.visitor_team_score)return t+"green";if(a&&e.home_team_score<e.visitor_team_score)return t+"red";if(!a&&e.home_team_score>e.visitor_team_score)return t+"red";if(!a&&e.home_team_score<e.visitor_team_score)return t+"green"}return t}return Object(s.jsxs)("div",{className:"game-block",children:[Object(s.jsxs)("div",{className:"team-score-block",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:i(t,!1)}),Object(s.jsx)("h2",{className:"team-name-text",children:c(t,!1)})]}),Object(s.jsx)("div",{className:o(t,!1),children:Object(s.jsx)("h4",{children:r(t,!1)})})]}),Object(s.jsxs)("div",{className:"game-information",children:[Object(s.jsx)("div",{className:"game-date",children:(a=t,n(a))}),Object(s.jsx)("div",{className:"game-status",children:t.status}),Object(s.jsx)("div",{children:function(e){return null===e.id||void 0===e.is?null:e.postseason?"Playoffs":"Regular"}(t)}),Object(s.jsx)("div",{children:t.time})]}),Object(s.jsxs)("div",{className:"team-score-block",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:i(t,!0)}),Object(s.jsx)("h2",{className:"team-name-text",children:c(t,!0)})]}),Object(s.jsx)("div",{className:o(t,!0),children:Object(s.jsx)("h4",{children:r(t,!0)})})]})]})},D=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var s;Object(o.a)(this,t),(s=a.call(this,e)).getGames=function(){f.a.get("https://www.balldontlie.io/api/v1/games?start_date=".concat(s.state.selectDate,"&end_date=").concat(s.state.selectDate)).then(function(){var e=Object(j.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.data.data),e.next=3,s.setState({gameInfos:a.data.data});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},s.getSelectedDate=function(e){var a=s.formatDate(e);s.setState({selectDate:a},(function(){return s.getGames()}))},s.getGameTime=function(e){if("Final"!==e.status){if(0!==e.period)return-parseInt(e.period);var a=(""+e.status).split(" ")[0].split(":"),t=""+a[0]+a[1];return parseFloat(t)}},s.getFormattedDay=function(e){return e<10?"0"+e:e},s.getWeekDay=function(e,a){var t=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];return a&&(t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),t[e]},s.getMonthDay=function(e){return["January","February","March","April","May","June","July","August","September","October","Novemeber","December"][e]},s.getFormattedMonth=function(e){return e<10?"0"+e:e},s.formatDate=function(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},s.renderGameDate=function(e){var a=(""+e.date).replace(/-/g,"/").replace(/T.+/,""),t=new Date(a);return s.getWeekDay(t.getDay()+1,!1)+"., "+s.getFormattedDay(t.getDate())+"-"+s.getFormattedMonth(t.getMonth()+1)},s.renderGameDate1=function(e){var a=""+e.date,t=new Date(a);return s.getWeekDay(t.getDay(),!1)+"., "+s.getFormattedDay(t.getDate())+"-"+s.getFormattedMonth(t.getMonth()+1)},s.renderFullDate=function(e){if(null!==e&&void 0!==e){var a=(""+e.date).replace(/-/g,"/").replace(/T.+/,""),t=new Date(a);return s.getWeekDay(t.getDay(),!0)+", "+s.getMonthDay(t.getMonth())+" "+s.getFormattedDay(t.getDate()+" "+t.getFullYear())}};var n=new Date,r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();return s.state={gameInfos:[{}],selectDate:r},s}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()},(function(){return e.getGames()}))}),6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"nba-center",children:[Object(s.jsx)("form",{className:"nba-form",onSubmit:this.handleSubmit,children:Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{className:"nba-header",children:"Select a date"}),Object(s.jsx)(F,{getSelectedDate:this.getSelectedDate})]})}),Object(s.jsxs)("main",{className:"games-today center",children:[Object(s.jsx)("h3",{className:"nba-header",children:this.renderFullDate(this.state.gameInfos[0])}),this.state.gameInfos.sort((function(a,t){return e.getGameTime(a)>e.getGameTime(t)?1:-1})).map((function(a){return Object(s.jsx)(w,{gameInfo:a,renderGameDate1:e.renderGameDate1},a.id)}))]})]})}}]),t}(n.Component),P=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).hideComponent=function(a){"showHidePlayer"===a?e.setState({showHidePlayer:!0,showHideGame:!1}):e.setState({showHideGame:!0,showHidePlayer:!1})},e.toggleBtn=function(e){var a="nba-nav-btn ";return!1===e?a:a+"selected"},e.state={name:"React",showHidePlayer:!1,showHideTeam:!1,showHideGame:!0},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.showHidePlayer,n=(a.showHideTeam,a.showHideGame);return Object(s.jsxs)("div",{className:"NBA-App",children:[Object(s.jsxs)("nav",{className:"nba-nav",children:[Object(s.jsx)("h3",{className:"nba-logo",children:"Basketball Score App"}),Object(s.jsxs)("div",{className:"nba-nav-btns",children:[Object(s.jsx)("button",{className:this.toggleBtn(this.state.showHideGame),onClick:function(){return e.hideComponent("showHideGame")},children:"Games"}),Object(s.jsx)("button",{className:this.toggleBtn(this.state.showHidePlayer),onClick:function(){return e.hideComponent("showHidePlayer")},children:"Players"})]})]}),n&&Object(s.jsx)(D,{}),t&&Object(s.jsx)(x,{})]})}}]),t}(n.Component);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.c535b2b8.chunk.js.map