<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-2"></div>
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header ">
                        <div class="row">
                        <div class="col-md-5">
                            <strong class="list-title">List Of Products</strong>
                        </div>
                        <div class="col-md-7">
                            <router-link to="/products/add">
                                <button class="btn btn-success new-product btn-sm">
                                    <i class="fa fa-plus"></i> Add New Product
                                </button>
                            </router-link>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                </div>
                    <div class="card-body">
                        <table class="table table-bordered table-sm" id="myTable">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="product in products" :key="product._id">

                                {{ product.name}}
                                <!--<td>1</td>-->
                                <!--<td>{{ product.name}}</td>-->
                                <!--<td class="image-row">-->
                                    <!--<img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">-->
                                <!--</td>-->
                                <!--<td>{{ product.price}} TZS</td>-->
                                <!--<td>52</td>-->
                                <!--<td class="action-column">-->
                                    <!--<a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>-->
                                    <!--<a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>-->
                                    <!--<a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>-->
                                <!--</td>-->
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                products: []
            }
        },
        created() {
            let uri = 'http://localhost:4007/v1/products';
            this.axios.get(uri).then(response => {
                this.products = response.data.products;
            })
        },
        methods: {
            deletePost(id) {
                let uri = `http://localhost:4007/v1/products/delete/${id}`;
                this.axios.delete(uri).then(response => {
                    this.products.splice(this.products.indexOf(id), 1);
                });
            }
        }
    }
</script>

<style scoped>
    .container{
        margin-top: 100px;
    }
    .avatar{
        width: 50px;
        height:30px;
        text-align: center;
        margin: 0 auto;
    }
    .image-row{
        text-align: center;
    }
    .btn-sm{
        padding: 1px 4px;
        margin-right: 4px;
    }
    .new-product{
        float: right;
        font-size: small;
        padding: 5px;
        border-radius: 20px;
    }
    .action-column{
        text-align: center;
    }
    .list-title{
        font-family: cursive;
    }
</style>
