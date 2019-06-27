<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-2"></div>
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header ">
                        <div class="row">
                        <div class="col-md-5">
                            Products
                        </div>
                        <div class="col-md-7">
                            <button class="btn btn-success new-product btn-sm">
                                <i class="fa fa-plus"></i> Add New Product
                            </button>
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
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Soap</td>
                                <td class="image-row">
                                    <img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">
                                </td>
                                <td>5000 TZS</td>
                                <td>
                                    <a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>
                                    <a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>
                                    <a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Soap</td>
                                <td class="image-row">
                                    <img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">
                                </td>
                                <td>5000 TZS</td>
                                <td>
                                    <a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>
                                    <a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>
                                    <a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Soap</td>
                                <td class="image-row">
                                    <img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">
                                </td>
                                <td>5000 TZS</td>
                                <td>
                                    <a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>
                                    <a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>
                                    <a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Soap</td>
                                <td class="image-row">
                                    <img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">
                                </td>
                                <td>5000 TZS</td>
                                <td>
                                    <a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>
                                    <a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>
                                    <a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>
                                </td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Computer</td>
                                <td class="image-row">
                                    <img src="../../assets/images/computer.jpg" alt="No Image" class="avatar">
                                </td>
                                <td>5000 TZS</td>
                                <td>
                                    <a href="#"><button class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button></a>
                                    <a href="#"><button class="btn btn-success btn-sm"><i class="fa fa-edit"></i></button></a>
                                    <a href="#"><button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button></a>
                                </td>
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
        name: "index",
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
        margin-right: 3px;
    }
    .new-product{
        float: right;
        font-size: small;
        padding: 5px;
        border-radius: 20px;
    }
</style>
