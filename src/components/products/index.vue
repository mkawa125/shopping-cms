<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-2"></div>
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">Products</div>

                    <div class="card-body">
                        <table class="table table-bordered table-sm">
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
        name: "index"
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
</style>
