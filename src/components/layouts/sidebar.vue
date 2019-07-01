<template>
    <div class="#">
        <div id="head"></div>
        <div id="">
            <nav id="sidebar" class="side-bar">
                <div class="sidebar-header">
                    <a href="#">
                        <img src="../../assets/images/user.png" alt="No Avatar" class="avatar">
                        <h5>Dahabu Saidi</h5>
                        <span >Admin</span>
                    </a>
                </div>

                <ul class="list-unstyled components">

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa fa-dashboard"></i> Dashboard
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/products">
                            <i class="fa fa-handshake-o"></i> Products
                        </router-link>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-user"></i> Finance
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fa fa-female"></i> Customers
                        </a>
                    </li>

                    <li>
                        <h4 class="others"> OTHERS</h4>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-cog"></i> Settings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-user-circle"></i> Profile
                        </a>
                    </li>

                </ul>

                <ul class="list-unstyled CTAs">
                    <li>
                        <a href="#" class="article">
                            <i class="fa fa-sign-out"></i> Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        computed: {
            image() {
                return `/assets/images/user.png`;
            }
        },
    }
</script>

<style scoped>
    .side-bar{
        margin-top: 70px;
    }
    .others{
        margin-left: 30px;
        font-size: 13px;
        font-weight: bold;
        color: #979A9A;
        margin-top: 20px;
    }
    .fa{
        color: #B3B6B7;
    }
    .sidebar-header{
        text-align: center;
    }
    .sidebar-header span{
        font-style: italic;
    }
    .sidebar-header h5{
        font-size: 14px;
        font-weight: bold;
    }
    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 360px;
    }
</style>
<style>
    @import "../../assets/stylesheets/sidebar-styles.css";
    @import "../../assets/fontawesome/css/font-awesome.min.css";
</style>
