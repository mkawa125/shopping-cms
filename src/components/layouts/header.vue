<template>
    <div class="">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark" id="header">
            <router-link class="navbar-brand" to="/" style="margin-right: 70px; margin-left: 20px; font-family: cursive">
                RiseUp Logo</router-link>
            <button type="button" id="sidebarCollapse" class="btn btn-default">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/mentors" class="nav-link">Mentors</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">Profile</router-link>
                    </li>
                </ul>

                <div class="dropdown ml-auto ">
                    <a href="#">
                        <i class="fa fa-tasks info"></i>
                        <sup class="badge tasks">2</sup>
                    </a>
                    <div class="dropdown-menu">
                        <h5 class="dropdown-header">Tasks</h5>
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown" >
                    <a href="#">
                        <i class="fa fa-envelope info"></i>
                        <sup class="badge tasks">10</sup>
                    </a>
                    <div class="dropdown-menu">
                        <h5 class="dropdown-header">Messages</h5>
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown" >
                    <a href="#">
                        <i class="fa fa-bell info"></i>
                        <sup class="badge tasks">3</sup>
                    </a>
                    <div class="dropdown-menu">
                        <h5 class="dropdown-header">Notifications</h5>
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>

                <div class="dropdown notifications">
                    <a href="#" class="drop" data-toggle="dropdown">
                        <!--<img :src="avatar" alt="No Avatar" class="user-image" width = "30" height = "30">-->
                        <span class="name">Dahabu Shabani</span>
                    </a>
                    <div class="dropdown-menu ">
                        <h5 class="dropdown-header">User Profile</h5>
                        <a class="dropdown-item" href="#">Link 1</a>
                        <a class="dropdown-item" href="#">Link 2</a>
                        <a class="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </nav>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style lang="css">
    .name{
        color: white;
    }
    .navbar-toggler-icon{
        color: white;
    }
    .user-image{
        border-radius: 360px;
    }
    .notifications{
        margin-right: 100px;
        margin-left: 50px;
    }
    .drop{
        padding: 5px;
    }
    .dropdown:hover{
        color: white;
    }
    .dropdown{
        padding-right: 10px;
    }
    .dropdown:hover>.dropdown-menu {
        display: block;
    }

    .dropdown>.dropdown-toggle:active {
        /*Without this, clicking will make it sticky*/
        pointer-events: none;
    }
    .dropdown-menu:before {
        content:"";
        position: absolute;
        right: 160px;
        top: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #fae0bb transparent;
        z-index:9999;
    }
    .dropdown-menu:after {
        content:"";
        position: absolute;
        right: 153px;
        top: -22px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 17px 17px 17px;
        border-color: transparent transparent #ffffff transparent;
        z-index:9998;
    }
    .dropdown-menu {
        background: #fae0bb;
        border: 8px solid #fffefe;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
        float: left;
        position: absolute;
        margin: 0;
        top: 2.8em;
        width: 200px;
        z-index: 99999;
    }
    .tasks{
        background-color: #C0392B;
        color: white;
        border-radius: 360px;
        margin-left: -10px;
    }
    .info{
        background-color: whitesmoke;
        padding: 8px;
        border-radius: 360px;
    }
</style>
