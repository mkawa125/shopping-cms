<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-2"></div>
            <div class="col-md-7">
            <div class="card">
                <div class="card-header add-product">Create New Product</div>

                <div class="card-body">
                    <div class="col-md-12">
                        <form @submit.prevent="saveProducts">
                            <div class="form-group">
                                <label for="name">Product Name</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fa fa-product-hunt"></i>
                                        </span>
                                    </div>
                                    <input id="name" v-model="product.name" class="form-control form-control-warning" placeholder="Product Name">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="quantity">Quantity</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fa fa-sort-amount-asc"></i>
                                        </span>
                                            </div>
                                            <input id="quantity" type="number" v-model="product.quantity" class="form-control" placeholder="Product Quantity">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="category">Product Category</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fa fa-list-alt"></i>
                                                </span>
                                            </div>
                                            <select name="category" v-model="product.category" id="category" class="form-control">
                                                <option value="" selected>Select Category</option>
                                                <option value="category1">category 1</option>
                                                <option value="category2">category 2</option>
                                                <option value="category3">category 3</option>
                                                <option value="category4">category 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="price">Product Price</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fa fa-dollar"></i>
                                        </span>
                                            </div>
                                            <input id="price" type="number" name="price" v-model="product.price" class="form-control" placeholder="Product Price">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="visibility">Product Visibility</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fa fa-eye"></i>
                                                </span>
                                            </div>
                                            <select name="visibility" v-model="product.visibility" id="visibility" class="form-control">
                                                <option value="" selected>Select Visibility</option>
                                                <option value="Private">Private</option>
                                                <option value="public">Public</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="ProductImage">Product Images</label>
                                <input id="ProductImage" type="file" class="form-control" name="ProductImage">
                            </div>

                            <div class="form-group">
                                <label for="description">Description</label>
                                <div class="input-group">
                                    <textarea id="description" v-model="product.description" placeholder="Write product descriptions" class="form-control" rows="4"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-info btn-block">Save Product</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                product: {},
                errors: {},
            }
        },
        methods: {
            saveProducts(){
                let uri = 'http://localhost:4007/v1/products/add';
                this.axios.post(uri, this.product).then(() => {
                    this.$router.push({name: 'products'});
                });
            }
        },
    }
</script>

<style scoped>
    .container{
        margin-top: 100px;
    }
    .add-product{
        text-align: center;
        font-family: sans-serif;
        font-weight: bold;
        font-size: medium;
        color: cornflowerblue;
    }
    .form-control::placeholder{
        font-size: small;
        font-style: italic;
        color: #ABB2B9;
    }
    input.form-control{
        /*height: 30px;*/
        padding: 5px 15px;
        font-size: small;
    }
    select.form-control{
        padding: 0;
        font-size: small;
    }
    .form-group{
        color: #737575;
        font-family: "Fira Code Retina";
    }
    .input-group-text{
        padding: 0 10px;
    }
</style>
